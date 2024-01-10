import { useStaticQuery, graphql } from "gatsby"

export default function BannerItem() {
  const data = useStaticQuery(graphql`
    query {
        allContentfulShopBanner {
            nodes {
                isEnabled
                type
                setReference {
                    postId
                }
                link
                position
                image {
                    gatsbyImageData(width: 800, quality: 85)
                }
            }
        }
    }
    `)
    return data?.isEnabled ? (data?.allContentfulShopBanner?.nodes && data?.allContentfulShopBanner?.nodes[0]) : {}
}