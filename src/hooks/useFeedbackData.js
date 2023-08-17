import { useStaticQuery, graphql } from "gatsby"

export default function Reviews () {
  const data = useStaticQuery(graphql`
    query {
        allContentfulFeedback {
            nodes {
                name
                rating
                avatar {
                    gatsbyImageData(width: 300, quality: 80)
                }
                text {
                    text
                }
            }
        }
    }
    `)
    return [...data.allContentfulFeedback.nodes, ...data.allContentfulFeedback.nodes, ...data.allContentfulFeedback.nodes, ...data.allContentfulFeedback.nodes] || {}
}