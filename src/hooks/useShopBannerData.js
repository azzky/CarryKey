import { useStaticQuery, graphql } from "gatsby"

export default function BannerItem() {
  const data = useStaticQuery(graphql`
    query {
        allSanityShopBanner {
            nodes {
                isEnabled
                type
                setReference {
                    postId
                }
                link
                position
                image {
                    ...ImageWithPreview
                    asset {
                        url
                    }
                }
            }
        }
    }
    `)
    return data?.isEnabled ? (data?.allSanityShopBanner?.nodes && data?.allSanityShopBanner?.nodes[0]) : {}
}