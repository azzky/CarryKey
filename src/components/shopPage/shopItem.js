import React from 'react';
// import Image from "next/image";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Item } from "./shopItem.styled";
import { gothicClass } from "../../constants";
const ShopItem = ({post}) => {
    const {node: {
        title,
        isBestseller,
        price,
        priceMax,
        gallery,
        preview
    }} = post;
    const image = getImage(preview)
    return (
        <Item>
            <div className="imageWrapper">
                <GatsbyImage image={image}
                    alt=""/>
            </div>
            <p className="title">{title}</p>
            <div className={'details '+ gothicClass}>
                {isBestseller && <p className="bestseller">Best seller</p>}
                <p className="price">{'$'+price.toFixed(0)}</p>
                <p className="price">{'$'+priceMax.toFixed(0)}</p>
                <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use href="#basket"/>
                </svg>
            </div>
        </Item>
    );
};

export default ShopItem