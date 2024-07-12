import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { currency } from '@constants';

import Item from "./cartItem.styled";

const CartItem = ({item, removeItem}) => {
    const {postId, title, priceType, price, priceMax, preview, isMerch, minPriceButtonText, maxPriceButtonText} = item;
    const image = getImage(preview)
    return (
        <Item>
            <GatsbyImage image={image} layout="fill" alt="" />
            <div className="details">
                <p className="title">{title}</p>
                <div className="info">
                    <div className="options"/>
                    <div className="priceType">
                        <p className="title">{
                            isMerch ?
                                priceType === 'max' && maxPriceButtonText ||
                                priceType === 'min' && minPriceButtonText ||
                                'one option'
                            :
                            priceType === 'min' ? 'Cosplay' : 'Topless'
                        }</p>
                        <p className="price">{currency + (priceType === 'min' ? price : priceMax)}</p>
                    </div>
                </div>
                <div className="actions">
                    <Link to={isMerch ? '/shop/merch/'+postId : '/shop/post/'+postId}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use href="#edit"/>
                        </svg>
                        <span>Edit...</span>
                    </Link>
                    <button onClick={() =>removeItem(item)}>
                        <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use href="#bin"/>
                        </svg>
                        <span>Delete</span>
                    </button>
                </div>
            </div>
        </Item>
    )
}

export default CartItem