import React from 'react';
import { Item } from "./shopItem.styled";
import { currency } from "@constants";
import Link from "@components/intl/link";
import { FormattedMessage, FormattedNumber } from 'react-intl';

const ShopItem = ({post, isMerch, lang}) => {
    const {
        title,
        isBestseller,
        price,
        priceMax,
        url,
        // gallery,
        preview
    } = post;
    const isHorizontal = preview?.file?.details?.image?.width > preview?.file?.details?.image?.height || false;

    console.log(post);
    

    return (
        <Item>
            <Link to={isMerch ? '/merch/'+url : '/shop/set/'+url}
                aria-label={'link to post '+title}
                lang={lang}>
                <span className="visually-hidden">{'link to post '+title}</span>
            </Link>
            <div className={isMerch ? 'merch' : isHorizontal ? 'imageWrapper square' : 'imageWrapper'}>
                <img src={preview?.asset?.url + '?w=450&q=90&fm=webp'} alt={'preview for '+title}
                    srcSet={`${preview?.asset?.url}?w=450&q=90&fm=webp 1x,
                            ${preview?.asset?.url}?w=900&q=90 2x`}/>
            </div>
            <p className="title">{title}</p>
            <div className="details">
                {isBestseller && <p className="bestseller">
                    <FormattedMessage id="shop.bestseller"/>
                </p>}
                {price && price !== priceMax && <p className="price"><FormattedNumber style="currency"
                                                currency={currency[lang].code}
                                                value={price?.toFixed(0) || 0}/></p>}
                {priceMax && <p className="price"><FormattedNumber style="currency"
                                                currency={currency[lang].code}
                                                value={priceMax?.toFixed(0) || 0}/></p>}
                <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use href="#basket"/>
                </svg>
            </div>
        </Item>
    );
};

export default ShopItem