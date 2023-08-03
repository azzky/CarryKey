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
                }
            }
        }
    }
  `)
    const posts = results.data.allContentfulPost.edges

    const promises = posts.map(async (post) => {
        createPage({
            path: '/shop/post/' + post.node.postId,
            component: path.resolve(`./src/templates/post.js`),
            context: {
                slug: post.node.postId
            }
        })
        post.node.tags && post.node.tags.map(tag => {
            createPage({
                path: '/shop/tag/' + tag.replace(' ', '_'),
                component: path.resolve(`./src/templates/tag.js`),
                context: {
                    slug: tag,
                    type: 'shop'
                }
            })
            createPage({
                path: '/gallery/tag/' + tag.replace(' ', '_'),
                component: path.resolve(`./src/templates/tag.js`),
                context: {
                    slug: tag,
                    type: 'gallery'
                }
            })
        })
    })

    await Promise.all(promises)
}
