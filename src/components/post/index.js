import React, { useCallback, useState } from "react";
import {PortableText} from '@portabletext/react'
import Lightbox from 'react-image-lightbox';
import useBasket from "@hooks/useBasket";
import Slider from "react-slick";
import Link from "@components/intl/link";
import useWidth from "@hooks/useWindowSize";
import { currency } from '@constants';
import Image from "@components/image";

import Wrapper from "./post.styled";
import { FormattedMessage, FormattedNumber } from "react-intl";

const settings = (isDesktop) => {
    return isDesktop ? {
        dots: false,
        arrows: false,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        adaptiveHeight: true
    } : {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToScroll: 1
    }
};

const thumbSliderSettings = {
    dots: true,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    gap: 10,
    focusOnSelect: true,
    infinite: false
}

const Item = (props) => {
    const {post, isMerch, lang} = props    
    
    const {isDesktop, isMobile} = useWidth();
    const {addItem, cart, editItem} = useBasket();
    const isInCart = cart && cart.filter(el => el.postId === post.postId).length > 0
    const preselectedType = (cart && cart.filter(el => el.postId === post.postId)?.[0]?.priceType) || (isMerch ? 'max' : 'min');
    const [priceType, setPriceType] = useState(preselectedType)

    const handler = useCallback(() => {
        addItem(post, priceType)
    }, [addItem, post, priceType])

    const priceSelect = useCallback(value => {
        setPriceType(value)
    }, [])

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const [showLightBox, setShowLightBox] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(null);

    const clickHandler = (index) => {
        setShowLightBox(true);
        setPhotoIndex(index);
    };

    return (
        <Wrapper $isMerch={isMerch && post.gallery?.length === 1}>
        <div>
            {isDesktop ? (
                <div className="images-grid">
                    {post.gallery?.length > 1 ? (
                        <Slider {...settings(isDesktop)}
                        className="gallery"
                        asNavFor={nav2}
                        ref={(slider1) => setNav1(slider1)}>
                        {post.gallery.map((pic, index) => {
                            return pic.asset?.mimeType?.includes('video') ? (
                                <video controls key="video">
                                    <source type="video/mp4" src={pic.asset.url}/>
                                </video>
                            ) : (
                                pic.asset && <div key={pic.asset.url} onClick={() =>clickHandler(index)}>
                                    <Image className="slide-pic"
                                        image={pic}
                                        width={400}
                                        alt={`${post.title} set image ${index + 1}`}/>
                                </div>
                            )
                        })}
                    </Slider>
                    ) : post.gallery?.length === 1 ? (
                        post.gallery[0].asset.mimeType.includes('video') ? (
                            <video controls>
                                    <source type="video/mp4" src={post.gallery[0].asset.url}/>
                                </video>
                        ) : (
                            <Image className="slide-pic"
                                image={post.gallery[0]}
                                alt={`${post.title} set image`}/>
                        )
                    ) : (
                    <Image className="slide-pic"
                                image={post.preview}
                                alt={`thumbnail for ${post.title} set`}/>
                                )}
                    {post.gallery?.length > 1 && <Slider {...thumbSliderSettings}
                        className="nav"
                        asNavFor={nav1}
                        ref={(slider2) => setNav2(slider2)}>
                        {post.gallery.map((pic, index) => {                            
                            return post.preview.asset?.url && pic.asset?.mimeType?.includes('video') ? (
                                <div className="video-thumb" key="video">
                                    <img src={post.preview.asset.url + '?w=250'}
                                        key={pic.asset.url}
                                        alt={`thumbnail for ${post.title} set video`}/>
                                </div>
                            ) : (
                                pic.asset && <img src={pic.asset.url + '?w=250'}
                                key={pic.asset.url}
                                alt={`thumbnail for ${post.title} set image ${index + 1}`}/>
                            )
                        })}
                    </Slider>}
                </div>
            ) : (
                <div className="images-grid">
                    {post.gallery ? <Slider {...settings(isDesktop)} slidesToShow={isMobile ? 1 : 3}>
                        {post.gallery.map((pic, index) => {
                            return pic.asset?.mimeType.includes('video') ? (
                                <video controls key="video">
                                    <source type="video/mp4" src={pic.asset.url}/>
                                </video>
                            ) : (
                                pic.asset && <div key={pic.asset.url} 
                                    onClick={() =>clickHandler(index)}>
                                    <Image className="slide-pic"
                                        image={pic}
                                        alt={`${post.title} - ${index + 1}`}
                                        width={280}/>
                                </div>
                            )
                        })}
                    </Slider> : (
                        <Image className="slide-pic"
                                        image={post.preview}
                                        alt={post.title}
                                        width={280}/>
                    )}
                </div>
            )}
            {showLightBox && (
            <Lightbox
                mainSrc={post.gallery[photoIndex].asset.url +'?w=1920&h=1920&q=90'}
                nextSrc={post.gallery[photoIndex < post.gallery.length -1 ? photoIndex + 1 : 0]?.asset ? post.gallery[photoIndex < post.gallery.length -1 ? photoIndex + 1 : 0]?.asset?.url + '?w=1920&h=1920&q=90' : null}
                prevSrc={post.gallery[photoIndex > 0 ? photoIndex - 1 : post.gallery.length - 1].asset ? post.gallery[photoIndex > 0 ? photoIndex - 1 : post.gallery.length - 1]?.asset?.url + '?w=1920&h=1920&q=90' : null}
                onCloseRequest={() => setShowLightBox(false)}
                onMovePrevRequest={() => setPhotoIndex((photoIndex + post.gallery.length - 1) % post.gallery.length)}
                onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % post.gallery.length)}
            />
            )}
            {post._rawDescription && <div className="description">            
                <PortableText value={post._rawDescription}/>
            </div>}
            </div>
            <div className="column">
                <h1>{post.title}</h1>
                {post.price && post.priceMax ? <p className="option-title">
                    <FormattedMessage id="set.choose"/>
                </p> :
                    <p className="option-title"></p>}
                <div className="priceType">
                    {(!isMerch || (isMerch && post.price && post.price !== post.priceMax)) && (<div className="item">
                        <button className="button" onClick={() => priceSelect('min')} disabled={priceType === 'min'}>
                            {isMerch ? (post.minPriceButtonText || '') : (
                                <FormattedMessage id="set.cosplay"/>)}
                        </button>
                        {!isMerch && (
                            <p className="details">
                            <FormattedMessage id="set.cosplayDescription"/>
                            </p>)}
                        <p className="price">
                            <FormattedNumber style="currency"
                                currency={currency[lang].code}
                                value={post.price}/>
                        </p>
                    </div>)}
                    {post.priceMax && <div className="item">
                        <button className="button" onClick={() => priceSelect('max')} disabled={priceType === 'max'}>
                            {isMerch ? (post.maxPriceButtonText || (
                                <FormattedMessage id="set.oneVariant"/>
                            )) : (<FormattedMessage id="set.topless"/>)}
                        </button>
                        {!isMerch && (
                            <p className="details">
                            <FormattedMessage id="set.toplessDescription"/>
                            </p>)}
                        <p className="price">
                            <FormattedNumber style="currency"
                                currency={currency[lang].code}
                                value={post.priceMax}/>
                        </p>
                    </div>}
                </div>
                <button className="button add" onClick={isInCart ? () => editItem(priceType, post.postId, lang) : handler}>
                    <FormattedMessage id={isInCart ? 'set.edit' : 'set.add'}/>
                    {!isInCart && (<>
                        <span>&nbsp;-&nbsp;</span>
                        <FormattedNumber style="currency"
                        currency={currency[lang].code}
                        value={(priceType === 'min' ? post.price : post.priceMax)}/></>)}
                </button>
                <Link to={isMerch ? '/merch' : '/shop'} className="continue" lang={lang}>
                    <FormattedMessage id="set.continue"/>
                </Link>
            </div>
        </Wrapper>
    )
}

export default Item;