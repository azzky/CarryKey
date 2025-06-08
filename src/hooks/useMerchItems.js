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
                }
                preview {
                    ...ImageWithPreview
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