import React, { useCallback, useState } from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Lightbox from 'react-image-lightbox';
import useBasket from "@hooks/useBasket";
import { GatsbyImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import { Link } from "gatsby";
import useWidth from "@hooks/useWindowSize";
import { currency } from '@constants';

import Wrapper from "./post.styled";

const options = {
    renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, text])
}

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
    const {post, isMerch} = props
    
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
                            return pic.file.contentType.includes('video') ? (
                                <video controls key="video">
                                    <source type="video/mp4" src={'https:' + pic.file.url}/>
                                </video>
                            ) : (
                                <div key={pic.file.url} onClick={() =>clickHandler(index)}>
                                    <GatsbyImage className="slide-pic"
                                        image={pic.gatsbyImageData}
                                        alt={`${post.title} set image ${index + 1}`}
                                        backgroundColor="#adadad"/>
                                </div>
                            )
                        })}
                    </Slider>
                    ) : post.gallery?.length === 1 ? (
                        post.gallery[0].file.contentType.includes('video') ? (
                            <video controls>
                                    <source type="video/mp4" src={'https:' + post.gallery[0].file.url}/>
                                </video>
                        ) : (
                            <GatsbyImage className="slide-pic"
                                image={post.gallery[0].gatsbyImageData}
                                alt={`${post.title} set image`}
                                backgroundColor="#adadad"/>
                        )
                    ) : (
                    <GatsbyImage className="slide-pic"
                                image={post.preview.gatsbyImageData}
                                alt={`thumbnail for ${post.title} set`}
                            backgroundColor="#adadad"/>
                                )}
                    {post.gallery?.length > 1 && <Slider {...thumbSliderSettings}
                        className="nav"
                        asNavFor={nav1}
                        ref={(slider2) => setNav2(slider2)}>
                        {post.gallery.map((pic, index) => {
                            return pic.file.contentType.includes('video') ? (
                                <div className="video-thumb" key="video">
                                    <GatsbyImage className="slide-pic"
                                        key="video-thumb"
                                        image={post.preview.gatsbyImageData}
                                        alt={`thumbnail for ${post.title} set video`}
                                        backgroundColor="#adadad"/>
                                </div>
                            ) : (
                                <GatsbyImage className="slide-pic"
                                key={pic.file.url}
                                image={pic.gatsbyImageData}
                                alt={`thumbnail for ${post.title} set image ${index + 1}`}
                                backgroundColor="#adadad"/>
                            )
                        })}
                    </Slider>}
                </div>
            ) : (
                <div className="images-grid">
                    {post.gallery ? <Slider {...settings(isDesktop)} slidesToShow={isMobile ? 1 : 3}>
                        {post.gallery.map((pic, index) => {
                            return pic.file.contentType.includes('video') ? (
                                <video controls key="video">
                                    <source type="video/mp4" src={'https:' + pic.file.url}/>
                                </video>
                            ) : (
                                <div key={pic.file.url} 
                                onClick={() =>clickHandler(index)}>
                                    <GatsbyImage className="slide-pic"
                                        image={pic.gatsbyImageData}
                                        alt={`${post.title} - ${index + 1}`}
                                        width={280} backgroundColor="#adadad"/>
                                </div>
                            )
                        })}
                    </Slider> : (
                        <GatsbyImage className="slide-pic"
                                        image={post.preview.gatsbyImageData}
                                        alt={post.title}
                                        width={280} backgroundColor="#adadad"/>
                    )}
                </div>
            )}
            {showLightBox && (
                // <></>
            <Lightbox
                mainSrc={'https:'+post.gallery[photoIndex].file.url +'?w=1920&h=1920&q=90'}
                nextSrc={'https:' +post.gallery[photoIndex < post.gallery.length -1 ? photoIndex + 1 : 0].file.url + '?w=1920&h=1920&q=90'}
                prevSrc={'https:' +post.gallery[photoIndex > 0 ? photoIndex - 1 : post.gallery.length - 1].file.url + '?w=1920&h=1920&q=90'}
                onCloseRequest={() => setShowLightBox(false)}
                onMovePrevRequest={() => setPhotoIndex((photoIndex + post.gallery.length - 1) % post.gallery.length)}
                onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % post.gallery.length)}
            />
            )}
            {post.description && <div className="description">
                {renderRichText(post.description, options)}
            </div>}
            </div>
            <div className="column">
                <h1>{post.title}</h1>
                {post.price && post.priceMax ? <p className="option-title">Choose a package</p> :
                    <p className="option-title"></p>}
                <div className="priceType">
                    {(!isMerch || (isMerch && post.price && post.price !== post.priceMax)) && (<div className="item">
                        <button className="button" onClick={() => priceSelect('min')} disabled={priceType === 'min'}>
                            {isMerch ? (post.minPriceButtonText || '') : 'Cosplay'}
                        </button>
                        {!isMerch && <p className="details">Cosplay and sexy photos</p>}
                        <p className="price">{currency + post.price}</p>
                    </div>)}
                    {post.priceMax && <div className="item">
                        <button className="button" onClick={() => priceSelect('max')} disabled={priceType === 'max'}>
                            {isMerch ? (post.maxPriceButtonText || 'one variant') : 'Topless'}
                        </button>
                        {!isMerch && <p className="details">Full set with topless photos</p>}
                        <p className="price">{currency + post.priceMax}</p>
                    </div>}
                </div>
                <button className="button add" onClick={isInCart ? () => editItem(priceType, post.postId) : handler}>
                    {isInCart ? 'Edit' : 'Add to cart'}
                    {!isInCart && ' - ' + currency + (priceType === 'max' ? post.priceMax : post.price)}
                </button>
                <Link to={isMerch ? '/merch' : '/shop'} className="continue">Continue shopping</Link>
            </div>
        </Wrapper>
    )
}

export default Item;