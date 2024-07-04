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
                    postId
                    title
                    preview {
                        file {
                            url
                        }
                    }
                }
            }
        }
    }
  `)
    const merchReq = await graphql(`
        {
            allContentfulMerch(sort: {postId: ASC}) {
                edges {
                    node {
                        postId
                        title
                        preview {
                            file {
                                url
                            }
                        }
                    }
                }
            }
        }
    `)
    const posts = results.data.allContentfulPost.edges
    const merch = merchReq.data.allContentfulMerch.edges

    const promises = posts.map(async (post) => {
        createPage({
            path: '/shop/post/' + post.node.postId,
            component: path.resolve(`./src/templates/post.js`),
            context: {
                slug: post.node.postId,
                image: post.node.preview.file.url,
                title: post.node.title
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
    const merchPromises = merch.map(async (post) => {
        createPage({
            path: '/shop/merch/' + post.node.postId,
            component: path.resolve(`./src/templates/merch.js`),
            context: {
                slug: post.node.postId,
                image: post.node.preview.file.url,
                title: post.node.title
            }
        })
    })

    await Promise.all(promises)
    await Promise.all(merchPromises)
}
