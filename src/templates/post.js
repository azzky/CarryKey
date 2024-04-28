import React from 'react';
import Layout from '@components/layout'
import { graphql } from "gatsby"
import Item from '@components/post';
import Meta from "@components/meta"

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
                description {
                    raw
                }
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

export const Head = ({pageContext}) => {
    // console.log(pageContext);
    return (
        <>
            <Meta title={pageContext.title + ' cosplay set'}
                thumbnail={'https:' + pageContext.image}
                // description={pageContext.description}
                isPost
            />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        </>
    )
}