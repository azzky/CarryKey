import React from "react";
import { GatsbyImage , getImage} from "gatsby-plugin-image";
import Slider from "react-slick";
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import useWidth from '@hooks/useWindowSize'

import SliderWrapper from "./slider.styled";
import Link from "@components/intl/link";
import { FormattedMessage } from "react-intl";

const HomeSlider = (props) => {
    const {slides, lang} = props
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
            return (
                <div className="slide-inner" key={slide.title}>
                    <div className="slide-content">
                        {text}
                        <Link className="button" lang={lang} to={'/shop/set/'+slide.post.url}>
                            <FormattedMessage id="global.purchase"/>
                        </Link>
                    </div>
                    <GatsbyImage image={getImage(slide.desktopImage)}
                        layout="fill"
                        quality={85}
                        className="desktop"
                        alt={slide.post.title}/>
                    <GatsbyImage image={getImage(slide.mobileImage)}
                        layout="fill"
                        quality={85}
                        className="mobile"
                        alt={slide.post.title}/>
                </div>
            )})}
        </Slider>
        </SliderWrapper>
    );
};

export default HomeSlider;