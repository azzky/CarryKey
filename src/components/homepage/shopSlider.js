import React from "react"
import Link from "@components/intl/link";
import PostCarousel from "@components/postCarousel";
import { FormattedMessage } from "react-intl"

import Wrapper from './shopSlider.styled'

const ShopSlider = ({posts, lang})=> {
    return (
        <Wrapper>
            <div className="heading">
                <h2>
                    <FormattedMessage id="menu.shop"/>
                </h2>
                <Link to="/shop" lang={lang}>
                    <p><FormattedMessage id="cart.recommendText"/></p>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <use href="#arrowDiagonal"/>
                    </svg>
                </Link>
            </div>
            <PostCarousel className="row1" posts={posts} lang={lang} />
            <PostCarousel className="row2" posts={posts} isReverse lang={lang} />
        </Wrapper>
    )
}

export default ShopSlider