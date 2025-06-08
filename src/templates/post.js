import React from 'react';
import Layout from '@components/layout'
import { graphql } from "gatsby"
import Item from '@components/post';
import Meta from "@components/meta";


const Post = ({
    data: {allSanityPost: {edges}},
    pageContext
}) => {
    const data = edges[0].node
    return (
        <Layout hasNavigation isCart
            lang={pageContext.langKey}
            h1={data.title}>
            <Item post={data} lang={pageContext.langKey}/>
        </Layout>
    )
}

export default Post;

export const pageQuery = graphql`
query ($slug: Float!) {
    allSanityPost(
        filter: {postId: {eq: $slug}}
    ) {
        edges {
            node {
                id
                postId
                url
                title
                price
                priceMax
                tags
                categories
                _rawDescription
                gallery {
                    ...ImageWithPreview
                    asset {
                        url
                        mimeType
                    }
                }
                preview {
                    ...ImageWithPreview
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
                description={pageContext.description || null}
                isPost
                url={pageContext.langKey === 'en' ?
                    '/shop/set/' + pageContext.url :
                    '/' + pageContext.langKey + '/shop/set/' + pageContext.url}
                priceMin={pageContext.priceMin}
                priceMax={pageContext.priceMax}
            />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        </>
    )
}