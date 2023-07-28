import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import AboutBlock from '../components/homepage/about'
import ShopSlider from '../components/homepage/shopSlider'
import Services from '../components/homepage/services'
import Feedback from '../components/homepage/services'

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
        <title>yoba</title>
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
                title
                preview {
                    gatsbyImageData(width: 400)
                    file {
                        url
                    }
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