import { useStaticQuery, graphql } from "gatsby"

export default function MerchItems() {
  const data = useStaticQuery(graphql`
    query {
        allSanityMerch(
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
                    ...ImageWithPreview
                    asset {
                        url
                        mimeType
                    }
                }
                preview {
                    ...ImageWithPreview
                    asset {
                        url
                        mimeType
                    }
                }
                minPriceButtonText
                maxPriceButtonText
                categories
            }
        }
    }
    `)
    return data.allSanityMerch.nodes
}