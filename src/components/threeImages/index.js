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
            <img src={'/'+src+'1.jpeg'} alt=""
                width={bigSizeW}
                height={bigSizeH}
                quality={100}/>
            <img src={'/'+src+'2.jpeg'} alt=""
                width={smallSizeW}
                height={smallSizeH}
                quality={100}/>
            <img src={'/'+src+'3.jpeg'} alt=""
                width={87}
                height={86}
                quality={100}/>
        </ImagesBlock>
    )
};

export default ThreeImages;