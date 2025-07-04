import React from "react"
import Layout from '@components/layout'
import AboutBlock from '@components/homepage/about'
import ShopSlider from '@components/homepage/shopSlider'
// import Services from '@components/homepage/services'
// import Feedback from '@components/homepage/feedback'
import ShopITems from '@hooks/useShopitems'
import Slides from '@hooks/useHomepageSlider'
// import Reviews from "@hooks/useFeedbackData"
import Meta from "@components/meta"

import backDesk from '@images/back-contact.jpg';

const IndexPage = ({
    pageContext: {
        langKey: lang
    }
}) => {
    const posts = ShopITems()
    const slides = Slides()
    // const reviews = Reviews()

    return (
        <>
            <Layout hasNavigation isHero isHome slides={slides} lang={lang}>
                <AboutBlock lang={lang}/>
                <ShopSlider posts={posts} lang={lang}/>
                {/* <Services/> */}
                {/* <Feedback reviews={reviews}/> */}
            </Layout>
        </>
    )
}

export default IndexPage

export const Head = () => {
    return (
        <>
            <Meta title="Hi I'm Carry"
                thumbnail={backDesk}
                isHome
            />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
            <link rel="mask-icon" href="safari-pinned-tab.svg" color="#fff"/>
        </>
    )
}