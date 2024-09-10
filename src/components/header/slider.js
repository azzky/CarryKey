import React from "react";
import { GatsbyImage , getImage} from "gatsby-plugin-image";
import Slider from "react-slick";
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import useWidth from '@hooks/useWindowSize'

import SliderWrapper from "./slider.styled";
import { Link } from "gatsby";

const HomeSlider = (props) => {
    const {slides} = props
    const {isMobile} = useWidth()
    const settings = {
        dots: !isMobile,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover:false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <SliderWrapper>
        <Slider {...settings}>
            {slides.map(slide => {                
            const text = renderRichText({raw: slide.text.raw})
            const image = isMobile ? getImage(slide.mobileImage) : getImage(slide.desktopImage)
            return (
                <div className="slide-inner" key={slide.title}>
                    <div className="slide-content">
                        {text}
                        <Link className="button" to={'/shop/post/'+slide.post.postId}>Purchase</Link>
                    </div>
                    <GatsbyImage image={image}
                        layout="fill"
                        quality={85}
                        alt={slide.post.title}/>
                </div>
            )})}
        </Slider>
        </SliderWrapper>
    );
};

export default HomeSlider;