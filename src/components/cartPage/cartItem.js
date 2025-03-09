import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Link from "@components/intl/link";
import { currency } from '@constants';

import Item from "./cartItem.styled";
import { FormattedMessage, FormattedNumber } from 'react-intl';

const CartItem = ({item, removeItem, lang}) => {
    const {title, priceType, price, priceMax, preview, url, isMerch, minPriceButtonText, maxPriceButtonText} = item;
    const image = getImage(preview);
    const showEdit = !isMerch && priceMax !== null;      

    return (
        <Item>
            <GatsbyImage image={image} layout="fill" alt={'Thumbnail for '+item.title} />
            <div className="details">
                <p className="title">{title}</p>
                <div className="info">
                    <div className="options"/>
                    <div className="priceType">
                        <p className="title">{
                            isMerch ?
                                (priceType === 'max' && maxPriceButtonText) ||
                                (priceType === 'min' && minPriceButtonText) ||
                                'one option'
                            :
                            priceType === 'min' ? <FormattedMessage id="set.cosplay"/> : <FormattedMessage id="set.topless"/>
                        }</p>
                        <p className="price">
                            <FormattedNumber style="currency"
                                currency="USD"
                                value={priceType === 'min' ? price : priceMax}/>
                        </p>
                    </div>
                </div>
                <div className="actions">
                    {showEdit && <Link to={isMerch ? '/merch/'+url : '/shop/set/'+url} lang={lang}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use href="#edit"/>
                        </svg>
                        <span>
                            <FormattedMessage id="global.edit"/>
                        </span>
                    </Link>}
                    <button onClick={() =>removeItem(item)}>
                        <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use href="#bin"/>
                        </svg>
                        <span>
                            <FormattedMessage id="global.delete"/>
                        </span>
                    </button>
                </div>
            </div>
        </Item>
    )
}

export default CartItem