const path = require(`path`)
// const fetch = require(`node-fetch`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const results = await graphql(`
    {
        allContentfulPost(sort: {postId: ASC}) {
            edges {
                node {
                    tags
                    url
                    postId
                    title
                    preview {
                        file {
                            url
                        }
                    }
                    price
                    priceMax
                }
            }
        }
    }
  `)
    const posts = results.data.allContentfulPost.edges

    const promises = posts.map(async (post) => {
        createPage({
            path: '/shop/set/' + post.node.url,
            component: path.resolve(`./src/templates/post.js`),
            context: {
                slug: post.node.postId,
                url: post.node.url,
                image: post.node.preview.file.url,
                title: post.node.title,
                priceMin: post.node.price,
                priceMax: post.node.priceMax
            }
        })
        // post.node.tags && post.node.tags.map(tag => {
        //     createPage({
        //         path: '/shop/tag/' + tag.replace(' ', '_'),
        //         component: path.resolve(`./src/templates/tag.js`),
        //         context: {
        //             slug: tag,
        //             type: 'shop',
        //             image: post.node.preview.file.url
        //         }
        //     })
        //     createPage({
        //         path: '/gallery/tag/' + tag.replace(' ', '_'),
        //         component: path.resolve(`./src/templates/tag.js`),
        //         context: {
        //             slug: tag,
        //             type: 'gallery'
        //         }
        //     })
        // })
    })

    await Promise.all(promises)
}
