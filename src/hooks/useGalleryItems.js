import { useStaticQuery, graphql } from "gatsby"

export default function GalleryItems() {
  const data = useStaticQuery(graphql`
    query {
        allSanityGalleryPage {
            nodes {
                images {
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
    return data.allSanityGalleryPage.nodes[0].images || []
}