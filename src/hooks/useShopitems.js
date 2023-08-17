import { useStaticQuery, graphql } from "gatsby"

export default function ShopITems() {
  const data = useStaticQuery(graphql`
    query {
        allContentfulPost(
            sort: {postId: DESC}
        ) {
            nodes {
                id
                postId
                title
                price
                priceMax
                categories
                isBestseller
                tags
                gallery {
                    gatsbyImageData(width: 450, quality: 100)
                }
                preview {
                    gatsbyImageData(width: 450, quality: 100)
                }
            }
        }
    }
    `)
    return data.allContentfulPost.nodes
}