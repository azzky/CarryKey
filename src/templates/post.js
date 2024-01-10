import React from 'react';
import Layout from '@components/layout'
import { graphql } from "gatsby"
import Item from '@components/post';

const Post = ({
    data: {allContentfulPost: {edges}}
}) => {
    const data = edges[0].node
    return (
        <Layout hasNavigation isCart
            h1={data.title}>
            <Item post={data}/>
        </Layout>
    )
}

export default Post;

export const pageQuery = graphql`
query ($slug: Int!) {
    allContentfulPost(
        filter: {postId: {eq: $slug}}
    ) {
        edges {
            node {
                id
                postId
                title
                price
                priceMax
                tags
                categories
                preview {
                    gatsbyImageData(width: 280, quality: 85)
                }
                gallery {
                    gatsbyImageData(width: 500, quality: 85)
                    file {
                        url
                    }
                }
            }
        }
    }
}
`

export const Head = () => {
    return (
        <>
            <title>Product page</title>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            {/* <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/> */}
        </>
    )
}