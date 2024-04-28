import { useStaticQuery, graphql } from "gatsby"

export default function ShopITems() {
  const data = useStaticQuery(graphql`
    query {
        allContentfulPost(
            sort: {postId: DESC}
            filter: {
                showInGallery: {eq: true}
            }
        ) {
            nodes {
                id
                postId
                title
                price
                priceMax
                categories
                isBestseller
                showInGallery
                tags
                gallery {
                    gatsbyImageData(width: 450, quality: 85)
                }
                preview {
                    gatsbyImageData(width: 450, quality: 85)
                    file {
                        url
                    }
                }
            }
        }
    }
    `)
    return data.allContentfulPost.nodes
}