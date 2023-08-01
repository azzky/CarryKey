import React from 'react';
import Layout from '@components/layout'
import Content from '@components/cartPage/content'
import { graphql } from "gatsby"

const Cart = ({
    data: {
        allContentfulPost: posts,
        allContentfulHomePageSlide: slides
    }
}) => {
    return (
        <Layout hasNavigation isCart
            h1={'Cart'}>
            <Content posts={posts.edges}/>
        </Layout>
    )
}

export default Cart;

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
}
`