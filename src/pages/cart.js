import React from 'react';
import Layout from '@components/layout'
import Content from '@components/cartPage/content'
import ShopITems from '@hooks/useShopitems'
import Meta from "@components/meta"

const Cart = ({
    pageContext: {
        langKey: lang
    }
}) => {
    const posts = ShopITems()

    return (
        <Layout hasNavigation isCart
            lang={lang}
            h1={'Cart'}>
            <Content posts={posts} lang={lang}/>
        </Layout>
    )
}

export default Cart;

export const Head = () => {
    return (
        <>
            <Meta title="Cart"
                url="/cart"
            />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="mask-icon" href="safari-pinned-tab.svg" color="#fff"/>
        </>
    )
}