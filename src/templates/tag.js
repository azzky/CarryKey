import React from 'react';
import { graphql } from "gatsby"
import Layout from '@components/layout'
import Grid from '@components/shopPage/grid';
// import GalleryGrid from '@components/galleryPage/grid';
import Meta from "@components/meta"

import backDesk from '@images/back-shop.jpg';

const Shop = ({
    data: {allContentfulPost: posts},
    pageContext: {slug, type}
}) => {
    // const component = type === 'shop' ? <Grid selectedTag={slug} items={posts.edges}/> : <GalleryGrid posts={posts.edges} />
    return (
        <Layout hasNavigation isHero
            h1={'Results for ' +slug+ ' tag:'}
            heroImageDesktop={backDesk}>
            {posts.edges?.length > 0 && <Grid selectedTag={slug} items={posts.edges}/>}
        </Layout>
    )
}

export default Shop;

export const pageQuery = graphql`
query ($slug: String!) {
    allContentfulPost(
        sort: {postId: ASC}
        filter: {tags: {eq: $slug}}
    ) {
        edges {
            node {
                id
                title
                price
                priceMax
                postId
                tags
                categories
                preview {
                    gatsbyImageData(width: 280, quality: 85)
                    file {
                        url
                    }
                }
            }
        }
    }
}
`

export const Head = ({pageContext}) => {
    return (
        <Meta title={'Results for ' + pageContext.slug + ' tag'}
            thumbnail={'https:'+pageContext.image}
            isPost
        />
    )
}