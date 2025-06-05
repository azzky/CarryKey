import React from 'react';
import Layout from '@components/layout'
import { graphql } from "gatsby"
import Item from '@components/post';
import Meta from "@components/meta"

const Merch = ({
    data: {allContentfulMerch: {edges}},
    pageContext
}) => {
    const data = edges[0].node
    return (
        <Layout hasNavigation isCart
            lang={pageContext.langKey}
            h1={data.title}>
            <Item post={{...data, isMerch: true}}
                lang={pageContext.langKey}
                isMerch/>
        </Layout>
    )
}

export default Merch;

export const pageQuery = graphql`
query ($slug: String!) {
    allContentfulMerch(
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
                description {
                    raw
                }
                preview {
                    gatsbyImageData(width: 450, quality: 90)
                }
                gallery {
                    gatsbyImageData(width: 450, quality: 90, formats: WEBP)
                    file {
                        url
                        contentType
                    }
                }
                minPriceButtonText
                maxPriceButtonText
            }
        }
    }
}
`

export const Head = ({pageContext}) => {
    // console.log(pageContext);
    return (
        <>
            <Meta title={pageContext.title}
                thumbnail={'https:' + pageContext.image}
                description={pageContext.description?.raw || null}
                isPost
                url={pageContext.langKey === 'en' ?
                    '/merch/' + pageContext.url :
                    '/' + pageContext.langKey + '/merch/' + pageContext.url}
                priceMin={pageContext.priceMin}
                priceMax={pageContext.priceMax}
            />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        </>
    )
}