import React from 'react';
import Layout from '@components/layout'
import Grid from '@components/shopPage/grid';
import ShopITems from '@hooks/useShopitems'

import backDesk from '@images/back-shop.jpg';

const Shop = () => {
    const posts = ShopITems()
    
    return (
        <Layout hasNavigation isHero isShop
            h1={'Shop'}
            heroImageDesktop={backDesk}>
            {posts?.length > 0 && <Grid items={posts}/>}
        </Layout>
    )
}

export default Shop;