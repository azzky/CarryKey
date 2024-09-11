import { useStaticQuery, graphql } from "gatsby"

export default function ShopITems() {
  const data = useStaticQuery(graphql`
    query {
        allContentfulPost(
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
                    gatsbyImageData(width: 450, quality: 85)
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
            }
        }
    }
    `)
    return data.allContentfulPost.nodes
}