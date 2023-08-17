import React, { useCallback, useState } from "react";
import useBasket from "@hooks/useBasket";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import { Link } from "gatsby";
import useWidth from "@hooks/useWindowSize";
import { currency } from '@constants';

import Wrapper from "./post.styled";

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToScroll: 1
};

const Item = (props) => {
    const {post} = props
    const {isDesktop, isMobile} = useWidth();
    const {addItem, cart, editItem} = useBasket();
    const isInCart = cart && cart.filter(el => el.postId === post.postId).length > 0
    const preselectedType = (cart && cart.filter(el => el.postId === post.postId)?.[0]?.priceType) || 'min';
    const [priceType, setPriceType] = useState(preselectedType)

    const handler = useCallback(() => {
        addItem(post, priceType)
    }, [addItem, post, priceType])

    const priceSelect = useCallback(value => {
        setPriceType(value)
    }, [])

    return (
        <Wrapper>
            {isDesktop ? (
                <div className="images-grid">
                    {post.gallery.map(pic => {
                            const image = getImage(pic)
                            return (
                                <GatsbyImage className="slide-pic" key={pic.file.url} image={image} alt="" />
                            )
                        })}
                </div>
            ) : (
                <Slider {...settings} slidesToShow={isMobile ? 1 : 3}>
                    {post.gallery.map(pic => {
                        const image = getImage(pic)
                        return (
                            <GatsbyImage className="slide-pic" key={pic.file.url} image={image} alt="" />
                        )
                    })}
                </Slider>
            )}
            <div className="column">
                <h1>{post.title}</h1>
                <p className="option-title">Choose a package</p>
                <div className="priceType">
                    <div className="item">
                        <button className="button" onClick={() => priceSelect('min')} disabled={priceType === 'min'}>
                            {'Standart'}
                        </button>
                        <p className="details">Standard number of photos</p>
                        <p className="price">{currency + post.price}</p>
                    </div>
                    <div className="item">
                        <button className="button" onClick={() => priceSelect('max')} disabled={priceType === 'max'}>
                            {'Premium'}
                        </button>
                        <p className="details">Maximum number of photos</p>
                        <p className="price">{currency + post.priceMax}</p>
                    </div>
                </div>
                <button className="button add" onClick={isInCart ? () => editItem(priceType, post.postId) : handler}>
                    {isInCart ? 'Edit' : 'Add to cart'}
                </button>
                <Link to="/shop" className="continue">Continue shopping</Link>
            </div>
        </Wrapper>
    )
}

export default Item;