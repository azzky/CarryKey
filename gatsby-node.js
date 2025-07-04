const path = require(`path`)
// const fetch = require(`node-fetch`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const results = await graphql(`
    {
        allSanityPost(sort: {postId: ASC}) {
            edges {
                node {
                    tags
                    url
                    postId
                    title
                    price
                    priceMax
                    seoDescription
                }
            }
        }
    }
  `)
    const merchReq = await graphql(`
        {
            allSanityMerch(sort: {postId: ASC}) {
                edges {
                    node {
                        postId
                        title
                        url
                        price
                        priceMax
                        seoDescription
                    }
                }
            }
        }
    `)
    const posts = results.data.allSanityPost.edges
    const merch = merchReq.data.allSanityMerch.edges

    const promises = posts.map(async (post) => {
        createPage({
            path: '/shop/set/' + post.node.url,
            component: path.resolve(`./src/templates/post.js`),
            context: {
                slug: post.node.postId,
                url: post.node.url,
                // image: post.node.preview.asset.url,
                title: post.node.title,
                priceMin: post.node.price,
                priceMax: post.node.priceMax,
                // description: post.node.seoDescription || post.node.description,
                langKey: 'en'
            }
        })
        createPage({
            path: '/de/shop/set/' + post.node.url,
            component: path.resolve(`./src/templates/post.js`),
            context: {
                slug: post.node.postId,
                url: post.node.url,
                // image: post.node.preview.asset.url,
                title: post.node.title,
                priceMin: post.node.price,
                priceMax: post.node.priceMax,
                // description: post.node.seoDescriptionDe || post.node.descriptionDe || post.node.seoDescription || post.node.description,
                langKey: 'de'
            }
        })
        // createPage({
        //     path: '/es/shop/set/' + post.node.url,
        //     component: path.resolve(`./src/templates/post.js`),
        //     context: {
        //         slug: post.node.postId,
        //         url: post.node.url,
        //         image: post.node.preview.asset.url,
        //         title: post.node.title,
        //         priceMin: post.node.price,
        //         priceMax: post.node.priceMax,
        //         description: post.node.seoDescriptionEs || post.node.descriptionEs || post.node.seoDescription || post.node.description,
        //         langKey: 'es'
        //     }
        // })
        // createPage({
        //     path: '/fr/shop/set/' + post.node.url,
        //     component: path.resolve(`./src/templates/post.js`),
        //     context: {
        //         slug: post.node.postId,
        //         url: post.node.url,
        //         image: post.node.preview.asset.url,
        //         title: post.node.title,
        //         priceMin: post.node.price,
        //         priceMax: post.node.priceMax,
        //         description: post.node.seoDescriptionFr || post.node.descriptionFr || post.node.seoDescription || post.node.description,
        //         langKey: 'fr'
        //     }
        // })
        
        // post.node.tags && post.node.tags.map(tag => {
        //     createPage({
        //         path: '/shop/tag/' + tag.replace(' ', '_'),
        //         component: path.resolve(`./src/templates/tag.js`),
        //         context: {
        //             slug: tag,
        //             type: 'shop',
        //             image: post.node.preview.asset.url
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
            path: '/merch/' + post.node.url,
            component: path.resolve(`./src/templates/merch.js`),
            context: {
                slug: post.node.postId,
                url: post.node.url,
                // image: post.node.preview.asset.url,
                title: post.node.title,
                priceMin: post.node.price,
                priceMax: post.node.priceMax,
                // description: post.node.seoDescription || post.node.description,
                langKey: 'en'
            }
        })
        createPage({
            path: '/de/merch/' + post.node.url,
            component: path.resolve(`./src/templates/merch.js`),
            context: {
                slug: post.node.postId,
                url: post.node.url,
                // image: post.node.preview.asset.url,
                title: post.node.title,
                priceMin: post.node.price,
                priceMax: post.node.priceMax,
                // description: post.node.seoDescriptionDe || post.node.descriptionDe || post.node.seoDescription || post.node.description,
                langKey: 'de'
            }
        })
    })

    // await Promise.all(promises)
    // await Promise.all(merchPromises)
}
