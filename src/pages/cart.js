import React from 'react';
import Layout from '@components/layout'
import Content from '@components/cartPage/content'
import ShopITems from '@hooks/useShopitems'

const Cart = () => {
    const posts = ShopITems()

    return (
        <Layout hasNavigation isCart
            h1={'Cart'}>
            <Content posts={posts}/>
        </Layout>
    )
}

export default Cart;