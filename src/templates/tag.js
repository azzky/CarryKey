import React from 'react';
import { graphql } from "gatsby"
import Layout from '@components/layout'
import Grid from '@components/shopPage/grid';
import GalleryGrid from '@components/galleryPage/grid';

import backDesk from '@images/back-shop.jpg';

const Shop = ({
    data: {allContentfulPost: posts},
    type,
    pageContext: {slug}
}) => {
    const component = type === 'shop' ? <Grid items={posts.edges}/> : <GalleryGrid posts={posts.edges} />
    return (
        <Layout hasNavigation isHero
            h1={'Results for ' +slug+ ' tag:'}
            heroImageDesktop={backDesk}>
            {posts.edges?.length > 0 && component}
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
                tags
                categories
                preview {
                    gatsbyImageData(width: 280, quality: 100)
                    file {
                        url
                    }
                }
            }
        }
    }
}
`