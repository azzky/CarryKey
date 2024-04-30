import { useStaticQuery, graphql } from "gatsby"

export default function GalleryItems() {
  const data = useStaticQuery(graphql`
    query {
        allContentfulGalleryPage {
            nodes {
                images {
                    gatsbyImageData(width: 450, quality: 90)
                    file {
                        url
                    }
                }
            }
        }
    }
    `)
    return data.allContentfulGalleryPage.nodes[0].images || []
}