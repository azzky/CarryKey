import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import { Item } from "./shopItem.styled";
import { currency } from "@constants";
import { Link } from 'gatsby';
const ShopItem = ({post}) => {
    const {
        title,
        isBestseller,
        price,
        priceMax,
        postId,
        // gallery,
        preview
    } = post;
    const isHorizontal = preview?.file?.details?.image?.width > preview?.file?.details?.image?.height || false;
    return (
        <Item>
            <Link to={'/shop/post/'+postId}
                aria-label={'link to post '+title}>
                <span className="visually-hidden">{'link to post '+title}</span>
            </Link>
            <div className={isHorizontal ? 'imageWrapper square' : 'imageWrapper'}>
                <GatsbyImage image={preview.gatsbyImageData}
                    alt={'preview for '+title}/>
            </div>
            <p className="title">{title}</p>
            <div className="details">
                {isBestseller && <p className="bestseller">Best seller</p>}
                <p className="price">{currency+price?.toFixed(0) || '0'}</p>
                <p className="price">{currency+priceMax?.toFixed(0) || '0'}</p>
                <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use href="#basket"/>
                </svg>
            </div>
        </Item>
    );
};

export default ShopItem