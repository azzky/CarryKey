import React from 'react';
import Layout from '@components/layout'
import GalleryItems from '@hooks/useGalleryItems'
import GalleryGrid from '@components/galleryPage/grid';
import Meta from "@components/meta"

import backDesk from '@images/back-gallery.jpg';
import backMobile from '@images/back-gallery-m.jpg';

const Gallery = ({
    pageContext: {
        langKey: lang
    }
}) => {
    const images = GalleryItems()

    return (
        <Layout hasNavigation isHero
            heroImageDesktop={backDesk}
            heroImageMobile={backMobile}
            lang={lang}
            h1={'Gallery'}>
            {images.length > 0 && <GalleryGrid images={images} />}
        </Layout>
    )
}

export default Gallery;

export const Head = () => {
    return (
        <>
        <Meta title="Gallery"
            thumbnail={backDesk}
            url="/gallery"
        />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#fff"/>
        </>
    )
}