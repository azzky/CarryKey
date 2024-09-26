import { useStaticQuery, graphql } from "gatsby"

export default function MerchItems() {
  const data = useStaticQuery(graphql`
    query {
        allContentfulMerch(
            sort: {postId: DESC}
        ) {
            nodes {
                id
                postId
                url
                title
                price
                priceMax
                isBestseller
                gallery {
                    gatsbyImageData(width: 450, quality: 85)
                    file {
                        url
                        contentType
                    }
                }
                preview {
                    gatsbyImageData(width: 450, quality: 85)
                    file {
                        url
                        details {
                            image {
                                width
                                height
                            }
                        }
                    }
                }
                minPriceButtonText
                maxPriceButtonText
            }
        }
    }
    `)
    return data.allContentfulMerch.nodes
}