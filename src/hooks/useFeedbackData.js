import { useStaticQuery, graphql } from "gatsby"

export default function Reviews () {
  const data = useStaticQuery(graphql`
    query {
        allSanityFeedback {
            nodes {
                name
                rating
                avatar {
                    ...ImageWithPreview
                    asset {
                        url
                    }
                }
                text {
                    _rawChildren
                }
            }
        }
    }
    `)
    return data.allSanityFeedback.nodes || []
}