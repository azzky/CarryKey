import React from 'react';
import Layout from '@components/layout'
import Grid from '@components/shopPage/grid';
import ShopITems from '@hooks/useShopitems'
import BannerItem from '@hooks/useShopBannerData'
import Meta from "@components/meta"

import backDesk from '@images/back-shop.jpg';

const Shop = ({
    pageContext: {
        langKey: lang
    }
}) => {
    const posts = ShopITems()
    const banner = BannerItem()
    
    return (
        <Layout hasNavigation isHero isShop
            h1={'Shop'}
            lang={lang}
            heroImageDesktop={backDesk}>
            {posts?.length > 0 && <Grid items={posts}
                banner={banner}
                lang={lang}
                isMerch={false}/>}
        </Layout>
    )
}

export default Shop;

export const Head = () => {
    return (
        <>
        <Meta title="Shop"
            thumbnail={backDesk}
        />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#fff"/>
        </>
    )
}