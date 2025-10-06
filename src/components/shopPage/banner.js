import React from 'react';
import Link from "@components/intl/link";
import fixImageUrl from '@utils/imageUrl';

import BannerWrapper from "./banner.styled";

const Banner = ({post, lang}) => {
    const {image, link, type, setReference: {postId}} = post;
    // TODO use postId to got to selected post
    return (
        <BannerWrapper>
            {type === 'link' ? (
                <Link to={link} lang={lang}>
                    <img src={fixImageUrl(image.asset.url + '?w=1920&q=90')} alt={post.title}
                        srcSet={`${fixImageUrl(image.asset.url)}?w=1920&q=90&fm=webp 1x,
                            ${fixImageUrl(image.asset.url)}?w=3840&q=90 2x`}
                        loading="lazy"/>
                </Link>
            ) : (
                <img className={'banner-to-post-'+postId} src={fixImageUrl(image.asset.url + '?w=1920&q=90')} alt={post.title}
                    srcSet={`${fixImageUrl(image.asset.url)}?w=1920&q=90&fm=webp 1x,
                        ${fixImageUrl(image.asset.url)}?w=3840&q=90 2x`}
                    loading="lazy"/>
            )}
        </BannerWrapper>
    )
}

export default Banner;