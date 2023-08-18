import React from "react"
import { Link } from "gatsby";
import PostCarousel from "@components/postCarousel";

import Wrapper from './shopSlider.styled'

const ShopSlider = ({posts})=> {
    return (
        <Wrapper>
            <div className="heading">
                <h2>Shop</h2>
                <Link to="/shop">
                    <p>Explore collection</p>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <use href="#arrowDiagonal"/>
                    </svg>
                </Link>
            </div>
            <PostCarousel className="row1" posts={posts} />
            <PostCarousel className="row2" posts={posts} isReverse />
        </Wrapper>
    )
}

export default ShopSlider