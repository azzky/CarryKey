import React from "react"
import useWidth from "@hooks/useWindowSize";

import ImagesBlock from "./threeImages.styled";

const ThreeImages = (props) => {
    const {src} = props;
    const {isMobile, isDesktop} = useWidth();
    const bigSizeW = isMobile ? 247 : isDesktop ? 291 : 253
    const bigSizeH = isMobile ? 245 : isDesktop ? 440 : 382
    const smallSizeW = isMobile ? 87 : isDesktop ? 236 : 205
    const smallSizeH = isMobile ? 86 : isDesktop ? 353 : 307
    return (
        <ImagesBlock>
            <img src={'/'+src+'1.jpg'} alt=""
                width={bigSizeW}
                height={bigSizeH}
                loading="lazy"/>
            <img src={'/'+src+'2.jpg'} alt=""
                width={smallSizeW}
                height={smallSizeH}
                loading="lazy"/>
            <img src={'/'+src+'3.jpg'} alt=""
                width={87}
                height={86}
                loading="lazy"/>
        </ImagesBlock>
    )
};

export default ThreeImages;