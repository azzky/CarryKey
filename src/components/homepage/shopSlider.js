import React from "react"
import Slider from "react-slick";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Wrapper from './shopSlider.styled'

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // pauseOnHover:false,
    adaptiveHeight: true,
    slidesToShow: 6,
    slidesToScroll: 1
};

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
            <Slider {...settings}>
                {posts.map(slide => {
                    const image = getImage(slide.preview)
                    return (
                    <div key={'slider1-'+slide.postId} className="item">
                        <GatsbyImage alt="" image={image} width={242} height={363} />
                        <Link to={'/shop/post/'+slide.postId} className="button">Purchase</Link>
                    </div>
                )})}
            </Slider>
            <Slider {...settings} rtl={true}>
                {posts.map(slide => {
                    const image = getImage(slide.preview)
                    return(
                    <div key={'slider1-'+slide.postId} className="item">
                        <GatsbyImage alt="" image={image} width={242} height={363} />
                        <Link className="button">Purchase</Link>
                    </div>
                )})}
            </Slider>
        </Wrapper>
    )
}

export default ShopSlider