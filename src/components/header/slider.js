import React from "react";
import Image from "@components/image";
import Slider from "react-slick";
import useWidth from '@hooks/useWindowSize'
import {PortableText} from '@portabletext/react'

import SliderWrapper from "./slider.styled";
import Link from "@components/intl/link";
import { FormattedMessage } from "react-intl";

const HomeSlider = (props) => {
    const {slides, lang} = props
    const {isMobile} = useWidth()
    const settings = {
        adaptiveHeight: true,
        dots: !isMobile,
        arrows: false,
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover:false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    if (!slides || slides.length === 0) {
        return null;
    }
    
    return (
        <SliderWrapper>
        <Slider {...settings}>
            {slides.map(slide => {  
            if (!slide.post || !slide.post.url) {
                return null; // Skip if post or URL is not available
            }
            console.log(slide);
            
            return (
                <div className="slide-inner" key={slide.title}>
                    <div className="slide-content">
                        <PortableText value={slide._rawText}/>
                        <Link className="button" lang={lang} to={'/shop/set/'+slide.post.url}>
                            <FormattedMessage id="global.purchase"/>
                        </Link>
                    </div>
                    <div className="desktop">
                        <img src={slide.desktopImage.asset.url + '?w=1920&q=90'} alt={slide.post.title}
                            srcSet={`${slide.desktopImage.asset.url}?w=1920&q=90&fm=webp 1x,
                                ${slide.desktopImage.asset.url}?w=3840&q=90 2x`}
                                 />
                    </div>
                    <div className="mobile">
                        <Image image={slide.mobileImage}
                            alt={slide.post.title}/>
                    </div>
                </div>
            )})}
        </Slider>
        </SliderWrapper>
    );
};

export default HomeSlider;