import React from "react";
import { GatsbyImage , getImage} from "gatsby-plugin-image";
import Slider from "react-slick";
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import useWidth from '@hooks/useWindowSize'

import SliderWrapper from "./slider.styled";

const HomeSlider = (props) => {
    const {slides} = props
    const {isMobile} = useWidth()
    const settings = {
        dots: true,
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
            const text = renderRichText({raw: slide.node.text.raw})
            const image = isMobile ? getImage(slide.node.mobileImage) : getImage(slide.node.desktopImage)
            return (
                <div className="slide-inner" key={slide.node.title}>
                    <div className="slide-content">
                        {text}
                        <button className="button">Purchase</button>
                    </div>
                    <GatsbyImage image={image}
                        layout="fill"
                        alt=""/>
                </div>
            )})}
        </Slider>
        </SliderWrapper>
    );
};

export default HomeSlider;