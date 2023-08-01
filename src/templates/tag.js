import React from 'react';
import { graphql } from "gatsby"
import Layout from '@components/layout'

import backDesk from '@images/back-shop.jpg';
import Grid from '@components/shopPage/grid';

const Shop = ({
    data: {allContentfulPost: posts},
    pageContext: {slug}
}) => {
    return (
        <Layout hasNavigation isHero
            h1={'Results for ' +slug+ ' tag:'}
            heroImageDesktop={backDesk}>
            {posts.edges?.length > 0 && <Grid items={posts.edges}/>}
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