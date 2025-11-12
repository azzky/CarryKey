import { useStaticQuery, graphql } from "gatsby"

export default function PagePreview() {
  const data = useStaticQuery(graphql`
    query {
        allSanityWebsitePages {
            nodes {
                homepagePreview {
                ...ImageWithPreview
                                asset {
                                    url
                                    width
                                    height
                                }
                }
                shopPreview {
                    ...ImageWithPreview
                                asset {
                                    url
                                    width
                                    height
                                }
                }
            }
        }
    }
    `)
    return data.allSanityWebsitePages.nodes[0] || null
}