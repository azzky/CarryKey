import { useStaticQuery, graphql } from "gatsby"

export default function Slides() {
  const data = useStaticQuery(graphql`
    query{
        allContentfulHomePageSlide(
            sort: {title: ASC}
        ) {
            edges {
                node {
                    title
                    text {
                        raw
                    }
                    mobileImage {
                        gatsbyImageData(
                            width: 390
                        )
                    }
                    desktopImage {
                        gatsbyImageData(
                            width: 1920
                        )
                    }
                }
            }
        }
    }
    `)
    return data.allContentfulHomePageSlide.edges
}