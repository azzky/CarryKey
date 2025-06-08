import { useStaticQuery, graphql } from "gatsby"

export default function ShopITems() {
  const data = useStaticQuery(graphql`
    query {
        allSanityPost(
            sort: {postId: DESC}
            filter: {
                showInShop: {eq: true}
            }
        ) {
            nodes {
                id
                url
                postId
                title
                price
                priceMax
                categories
                isBestseller
                showInShop
                tags
                gallery {
                    ...ImageWithPreview
                }
                preview {
                    ...ImageWithPreview
                    asset {
                        url
                        mimeType
                        width
                        height
                    }
                }
            }
        }
    }
    `)
    return data.allSanityPost.nodes
}