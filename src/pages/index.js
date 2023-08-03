import React from "react"
import Layout from '@components/layout'
import AboutBlock from '@components/homepage/about'
import ShopSlider from '@components/homepage/shopSlider'
import Services from '@components/homepage/services'
import Feedback from '@components/homepage/feedback'
import ShopITems from '@hooks/useShopitems'
import Slides from '@hooks/useHomepageSlider'

const IndexPage = () => {
    const posts = ShopITems()
    const slides = Slides()

    return (
        <>
            <Layout hasNavigation isHero isHome slides={slides}>
                <AboutBlock/>
                <ShopSlider posts={posts}/>
                <Services/>
                <Feedback/>
            </Layout>
        </>
    )
}

export default IndexPage

export const Head = () => {
    return (
        <>
            <title>yoba</title>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        </>
    )
}