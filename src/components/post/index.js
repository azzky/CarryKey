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
        console.log(index);
    };

    return (
        <Wrapper>
        <div>
            {isDesktop ? (
                <div className="images-grid">
                    <Slider {...settings(isDesktop)}
                        className="gallery"
                        asNavFor={nav2}
                        ref={(slider1) => setNav1(slider1)}>
                        {post.gallery.map((pic, index) => {
                            return (
                                <div key={pic.file.url} onClick={() =>clickHandler(index)}>
                                <GatsbyImage className="slide-pic" image={pic.gatsbyImageData} alt="" backgroundColor="#adadad"/>
                                </div>
                            )
                        })}
                    </Slider>
                    <Slider {...thumbSliderSettings}
                        className="nav"
                        asNavFor={nav1}
                        ref={(slider2) => setNav2(slider2)}>
                        {post.gallery.map(pic => {
                            return (
                                <GatsbyImage className="slide-pic" key={pic.file.url} image={pic.gatsbyImageData} alt="" backgroundColor="#adadad"/>
                            )
                        })}
                    </Slider>
                </div>
            ) : (
                <div className="images-grid">
                    <Slider {...settings(isDesktop)} slidesToShow={isMobile ? 1 : 3}>
                        {post.gallery.map((pic, index) => {
                            return (
                                <div key={pic.file.url} 
                                onClick={() =>clickHandler(index)}>
                                    <GatsbyImage className="slide-pic" image={pic.gatsbyImageData} alt=""
                                        width={280} backgroundColor="#adadad"/>
                                </div>
                            )
                        })}
                    </Slider>
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
                    {(!isMerch || (isMerch && post.price)) && (<div className="item">
                        <button className="button" onClick={() => priceSelect('min')} disabled={priceType === 'min'}>
                            {isMerch ? (post.minPriceButtonText || '') : 'Cosplay'}
                        </button>
                        {!isMerch && <p className="details">Cosplay and sexy photos</p>}
                        <p className="price">{currency + post.price}</p>
                    </div>)}
                    <div className="item">
                        <button className="button" onClick={() => priceSelect('max')} disabled={priceType === 'max'}>
                            {isMerch ? (post.maxPriceButtonText || 'one variant') : 'Topless'}
                        </button>
                        {!isMerch && <p className="details">Full set with topless photos</p>}
                        <p className="price">{currency + post.priceMax}</p>
                    </div>
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