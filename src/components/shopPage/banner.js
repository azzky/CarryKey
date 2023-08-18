import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import BannerWrapper from "./banner.styled";

const Banner = ({post}) => {
    const {image, link, type, setReference: {postId}} = post;
    const pic = getImage(image)
    // TODO use postId to got to selected post
    return (
        <BannerWrapper>
            {type === 'link' ? (
                <Link to={link}>
                    <GatsbyImage image={pic} alt=""/>
                </Link>
            ) : (
                <GatsbyImage className={'banner-to-post-'+postId} image={pic} alt=""/>
            )}
        </BannerWrapper>
    )
}

export default Banner;