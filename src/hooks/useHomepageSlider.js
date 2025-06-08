import { useStaticQuery, graphql } from "gatsby"

export default function Slides() {
  const data = useStaticQuery(graphql`
    query{
        allSanityHomePageSlide(
            sort: {title: ASC}
        ) {
            nodes {
                title
                _rawText
                mobileImage {
                    ...ImageWithPreview
                }
                desktopImage {
                    ...ImageWithPreview
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
    return data.allSanityHomePageSlide.nodes
}