import React from 'react';
import Link from "@components/intl/link";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import BannerWrapper from "./banner.styled";

const Banner = ({post, lang}) => {
    const {image, link, type, setReference: {postId}} = post;
    const pic = getImage(image)
    // TODO use postId to got to selected post
    return (
        <BannerWrapper>
            {type === 'link' ? (
                <Link to={link} lang={lang}>
                    <GatsbyImage image={pic} alt=""/>
                </Link>
            ) : (
                <GatsbyImage className={'banner-to-post-'+postId} image={pic} alt=""/>
            )}
        </BannerWrapper>
    )
}

export default Banner;