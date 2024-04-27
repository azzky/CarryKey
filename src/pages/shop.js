import React from 'react';
import Layout from '@components/layout'
import Grid from '@components/shopPage/grid';
import ShopITems from '@hooks/useShopitems'
import BannerItem from '@hooks/useShopBannerData'
import Meta from "@components/meta"

import backDesk from '@images/back-shop.jpg';

const Shop = () => {
    const posts = ShopITems()
    const banner = BannerItem()
    
    return (
        <Layout hasNavigation isHero isShop
            h1={'Shop'}
            heroImageDesktop={backDesk}>
            {posts?.length > 0 && <Grid items={posts} banner={banner}/>}
        </Layout>
    )
}

export default Shop;

export const Head = () => {
    return (
        <Meta title="Shop"
            thumbnail={backDesk}
        />
    )
}