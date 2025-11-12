import React from "react"
import Layout from '@components/layout'
import AboutBlock from '@components/homepage/about'
import ShopSlider from '@components/homepage/shopSlider'
// import Services from '@components/homepage/services'
// import Feedback from '@components/homepage/feedback'
import ShopITems from '@hooks/useShopitems'
import Slides from '@hooks/useHomepageSlider'
// import Reviews from "@hooks/useFeedbackData"
import PagePreview from '@hooks/usePreviews'
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
                <AboutBlock/>
                <ShopSlider posts={posts} lang={lang}/>
                {/* <Services/> */}
                {/* <Feedback reviews={reviews}/> */}
            </Layout>
        </>
    )
}

export default IndexPage

export const Head = () => {
    const preview = PagePreview()
    console.log('preview', preview.homepagePreview)
    return (
        <>
            <Meta title="Hi I'm Carry"
                isSanityPreview
                thumbnail={preview?.homepagePreview?.asset?.url + '?w=1200' || backDesk}
                isHome
            />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
            <link rel="mask-icon" href="safari-pinned-tab.svg" color="#fff"/>
        </>
    )
}