import React from "react"
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Slider from "react-slick";

import Wrapper from "../homepage/shopSlider.styled"

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    // pauseOnHover:false,
    adaptiveHeight: true,
    slidesToShow: 6,
    slidesToScroll: 1
};

const Recommend = ({posts}) => {
    return (
        <Wrapper>
            <div className="heading">
                <h2>Products you may like</h2>
                <Link to="/shop">
                    <p>Explore collection</p>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <use href="#arrowDiagonal"/>
                    </svg>
                </Link>
            </div>
            <Slider {...settings}>
                {posts.map(slide => {
                    const image = getImage(slide.node.preview)
                    return (
                    <div key={'slider1-'+slide.node.postId} className="item">
                        <GatsbyImage alt="" image={image} width={242} height={363} />
                        <button className="button">Purchase</button>
                    </div>
                )})}
            </Slider>
        </Wrapper>
    )
}

export default Recommend