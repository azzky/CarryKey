import React from 'react';
import Layout from '@components/layout'
import ShopITems from '@hooks/useShopitems'
import GalleryGrid from '@components/galleryPage/grid';

import backDesk from '@images/back-gallery.jpg';

const Gallery = () => {
    const posts = ShopITems()

    return (
        <Layout hasNavigation isHero
            heroImageDesktop={backDesk}
            h1={'Gallery'}>
            {posts.length > 0 && <GalleryGrid posts={posts} />}
        </Layout>
    )
}

export default Gallery;

export const Head = () => {
    return (
        <>
            <title>Gallery | CarryKey</title>
        </>
    )
}