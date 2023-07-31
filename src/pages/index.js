import React from "react"
import { graphql } from "gatsby"
import Layout from '@components/layout'
import AboutBlock from '@components/homepage/about'
import ShopSlider from '@components/homepage/shopSlider'
import Services from '@components/homepage/services'
import Feedback from '@components/homepage/feedback'

const IndexPage = ({
    data: {
        allContentfulPost: posts,
        allContentfulHomePageSlide: slides
    }
}) => {
    return (
        <>
            <Layout hasNavigation isHero isHome slides={slides.edges}>
                <AboutBlock/>
                <ShopSlider posts={posts.edges}/>
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

export const pageQuery = graphql`
query{
    allContentfulPost(
        sort: {postId: ASC}
    ) {
        edges {
            node {
                id
                postId
                price
                priceMax
                title
                gallery {
                    gatsbyImageData(width: 400)
                }
                preview {
                    gatsbyImageData(width: 400)
                }
            }
        }
    }
    allContentfulHomePageSlide(
        sort: {title: ASC}
    ) {
        edges {
            node {
                title
                text {
                    raw
                }
                mobileImage {
                    gatsbyImageData(
                        width: 390
                    )
                }
                desktopImage {
                    gatsbyImageData(
                        width: 1920
                    )
                }
            }
        }
    }
    }
`