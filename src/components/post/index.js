import React, { useCallback, useState } from "react";
import {PortableText} from '@portabletext/react'
import useBasket from "@hooks/useBasket";
import Link from "@components/intl/link";
import { currency } from '@constants';

import Wrapper from "./post.styled";
import { FormattedMessage, FormattedNumber } from "react-intl";
import Gallery from "@components/post/gallery";

const Item = (props) => {
    const {post, isMerch, lang} = props    
    
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

    return (
        <Wrapper $isMerch={isMerch && post.gallery?.length === 1}>
        <div>
            <Gallery post={post}
            />
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