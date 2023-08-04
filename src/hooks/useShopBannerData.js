import { useStaticQuery, graphql } from "gatsby"

export default function BannerItem() {
  const data = useStaticQuery(graphql`
    query {
        allContentfulShopBanner {
            edges {
            node {
                type
                setReference {
                    postId
                }
                link
                position
                image {
                    gatsbyImageData(width: 580, quality: 100)
                }
            }
            }
        }
    }
    `)
    return (data.allContentfulShopBanner?.edges && data.allContentfulShopBanner.edges[0]) || {}
}