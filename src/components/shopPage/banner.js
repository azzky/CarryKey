import React from 'react';
import { Link } from 'gatsby';

import BannerWrapper from "./banner.styled";

const Banner = (props) => {
    const {preview, url} = props.post.node;
    return (
        <BannerWrapper>
            {url ? (<Link to={url}>
                <img src={'https:'+preview+'?q=100&w=580'} alt=""/>
            </Link>) : (
                <img src={'https:'+preview+'?q=100&w=580'} alt=""/>
            )}
        </BannerWrapper>
    )
}

export default Banner;