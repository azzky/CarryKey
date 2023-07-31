import React from 'react';
import { graphql } from "gatsby"
import Layout from '@components/layout'

import backDesk from '@images/back-shop.jpg';
import backMobile from '@images/back-shop-mobile.jpg';
import Grid from '@components/shopPage/grid';

const Shop = ({
    data: {allContentfulPost: posts}
}) => {
    return (
        <Layout hasNavigation isHero
            h1={'Shop'}
            heroImageDesktop={backDesk}
            heroImageMobile={backMobile}>
            {posts.edges?.length > 0 && <Grid items={posts.edges}/>}
        </Layout>
    )
}

export default Shop;

export const pageQuery = graphql`
query{
    allContentfulPost(
        sort: {postId: DESC}
    ) {
        edges {
            node {
                id
                postId
                title
                price
                priceMax
                categories
                tags
                gallery {
                    gatsbyImageData(width: 450, quality: 100)
                }
                preview {
                    gatsbyImageData(width: 450, quality: 100)
                }
            }
        }
    }
}
`