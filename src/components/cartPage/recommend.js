import React from "react"
import Link from "@components/intl/link";
import PostCarousel from "@components/postCarousel";

import Wrapper from "../homepage/shopSlider.styled"
import { FormattedMessage } from "react-intl";

const Recommend = ({posts, lang}) => {
    return posts.length > 0  ? (
        <Wrapper $isCart>
            <div className="heading">
                <h2><FormattedMessage id="cart.recommendTitle"/></h2>
                <Link to="/shop" lang={lang}>
                    <p><FormattedMessage id="cart.recommendText"/></p>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <use href="#arrowDiagonal"/>
                    </svg>
                </Link>
            </div>
            <PostCarousel className="row1" posts={posts} lang={lang}/>
        </Wrapper>
    ) : null
}

export default Recommend