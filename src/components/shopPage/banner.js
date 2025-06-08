import React from 'react';
import Link from "@components/intl/link";
import Image from "@components/image";

import BannerWrapper from "./banner.styled";

const Banner = ({post, lang}) => {
    const {image, link, type, setReference: {postId}} = post;
    // TODO use postId to got to selected post
    return (
        <BannerWrapper>
            {type === 'link' ? (
                <Link to={link} lang={lang}>
                    <Image image={image}/>
                </Link>
            ) : (
                <Image className={'banner-to-post-'+postId} image={image}/>
            )}
        </BannerWrapper>
    )
}

export default Banner;