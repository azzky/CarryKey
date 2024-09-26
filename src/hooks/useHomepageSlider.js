import { useStaticQuery, graphql } from "gatsby"

export default function Slides() {
  const data = useStaticQuery(graphql`
    query{
        allContentfulHomePageSlide(
            sort: {title: ASC}
        ) {
            nodes {
                title
                text {
                    raw
                }
                mobileImage {
                    gatsbyImageData(
                        width: 1280
                    )
                }
                desktopImage {
                    gatsbyImageData(
                        width: 1920
                    )
                }
                post {
                    postId
                    title
                    url
                }
            }
        }
    }
    `)
    return data.allContentfulHomePageSlide.nodes
}