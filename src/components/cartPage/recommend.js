import React from "react"
import { Link } from "gatsby";
import PostCarousel from "@components/postCarousel";

import Wrapper from "../homepage/shopSlider.styled"

const Recommend = ({posts}) => {
    return posts.length > 0  ? (
        <Wrapper $isCart>
            <div className="heading">
                <h2>Products you may like</h2>
                <Link to="/shop">
                    <p>Explore collection</p>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <use href="#arrowDiagonal"/>
                    </svg>
                </Link>
            </div>
            <PostCarousel className="row1" posts={posts} />
        </Wrapper>
    ) : null
}

export default Recommend