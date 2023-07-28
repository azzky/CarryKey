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
                }
            }
        }
    }
  `)
    const posts = results.data.allContentfulPost.edges

    const promises = posts.map(async (post, i) => {
        post.node.tags && post.node.tags.map(tag => {
            createPage({
                path: '/shop/tag/' + tag.replace(' ', '_'),
                component: path.resolve(`./src/templates/tag.js`),
                context: {
                    slug: tag
                }
            })
        })
    })

    await Promise.all(promises)
}
