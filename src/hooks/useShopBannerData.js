import { useStaticQuery, graphql } from "gatsby"

export default function BannerItem() {
  const data = useStaticQuery(graphql`
    query {
        allContentfulShopBanner {
            nodes {
                type
                setReference {
                    postId
                }
                link
                position
                image {
                    gatsbyImageData(width: 800, quality: 100)
                }
            }
        }
    }
    `)
    return (data.allContentfulShopBanner.nodes && data.allContentfulShopBanner.nodes[0]) || {}
}