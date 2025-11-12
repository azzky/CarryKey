const path = require(`path`)
const fs = require("fs");
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

// exports.onPostBuild = async ({ graphql, reporter }) => {
//     // Get siteUrl and all pages
//     const result = await graphql(`
//         {
//             allSanityMerch {
//                 edges {
//                     node {
//                         postId
//                         title
//                         url
//                         price
//                         priceMax
//                         seoDescription
//                     }
//                 }
//             }
//             allSanityPost {
//                 edges {
//                     node {
//                         tags
//                         url
//                         postId
//                         title
//                         price
//                         priceMax
//                         seoDescription
//                     }
//                 }
//             }
//             allSitePage {
//                 nodes {
//                     path
//                 }
//             }
//         }
//     `);

//     if (result.errors) {
//         reporter.panicOnBuild("Error loading pages for IndexNow file");
//         return;
//     }

//     const siteUrl = process.env.GATSBY_SITE_URL || (result.data.site && result.data.site.siteMetadata && result.data.site.siteMetadata.siteUrl) || "";
//     if (!siteUrl) {
//         reporter.warn("siteMetadata.siteUrl is empty. Full URLs may be incorrect.");
//     }

//     // const pages = result.data.allSanityMerch.edges
//     //     .map(n => n.node.url)
//     //     // normalize to absolute urls
//     //     .map(p => {
//     //     // ensure leading slash
//     //     if (!p.startsWith("/")) p = `/${p}`;
//     //     // remove trailing index.html if present
//     //     return `${siteUrl}/merch${p}`;
//     //     });
//     // const postPages = result.data.allSanityPost.edges
//     //     .map(n => n.node.url)
//     //     // normalize to absolute urls
//     //     .map(p => {
//     //     // ensure leading slash
//     //     if (!p.startsWith("/")) p = `/${p}`;
//     //     // remove trailing index.html if present
//     //     return `${siteUrl}/shop${p}`;
//     //     });
//     // pages.push(...postPages);

//     // // Deduplicate and optionally remove `/*` catchalls (if any)
//     // const uniquePages = Array.from(new Set(pages));

//     // // IndexNow key — you can hardcode or use env var. Using env var is recommended.
//     // const GATSBY_INDEXNOW_KEY = process.env.GATSBY_INDEXNOW_KEY;
//     // const keyLocation = `${siteUrl}/${GATSBY_INDEXNOW_KEY}.txt`;

//     // // Build the file content exactly as requested:
//     // const payload = {
//     //     host: siteUrl.replace(/^https?:\/\//, ""),
//     //     key: GATSBY_INDEXNOW_KEY,
//     //     keyLocation,
//     //     urlList: uniquePages,
//     // };

//     // const fileContentLines = [
//     //     "POST /IndexNow HTTP/1.1",
//     //     "Content-Type: application/json; charset=utf-8",
//     //     `Host: api.indexnow.org`,
//     //     JSON.stringify(payload, null, 2),
//     // ];

//     // const fileContent = fileContentLines.join("\n");

//     // // Write to the public/ directory so it's deployed to the site root
//     // const outDir = path.join(__dirname, "public");
//     // if (!fs.existsSync(outDir)) {
//     //     fs.mkdirSync(outDir, { recursive: true });
//     // }
//     // const outPath = path.join(outDir, GATSBY_INDEXNOW_KEY + ".txt");

//     // try {
//     //     fs.writeFileSync(outPath, fileContent, "utf8");
//     //     reporter.info(`IndexNow file written: ${outPath} (contains ${uniquePages.length} urls)`);
//     // } catch (err) {
//     //     reporter.panicOnBuild(`Failed to write ${outPath}: ${err}`);
//     // }
//     const allPages = result.data.allSitePage.nodes.map(n => n.path);
//     const urlList = allPages
//         .filter(p => !p.includes("dev-404-page"))
//         .filter(p => !p.startsWith("/404"))
//         .map(p => `${siteUrl}${p}`);

//     const payload = {
//         host,
//         key,
//         keyLocation,
//         urlList,
//     };

//     const fileContent = [
//         "POST /IndexNow HTTP/1.1",
//         "Content-Type: application/json; charset=utf-8",
//         "Host: api.indexnow.org",
//         JSON.stringify(payload, null, 2),
//     ].join("\n");

//     const publicDir = path.join(__dirname, "public");
//     if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

//     const outPath = path.join(publicDir, `${process.env.GATSBY_INDEXNOW_KEY}.txt`);
//     fs.writeFileSync(outPath, fileContent, "utf8");

//     reporter.info(`✅ Created IndexNow file: ${outPath} (${urlList.length} URLs)`);
// };

exports.onPostBuild = async ({ graphql, reporter }) => {
  reporter.info("Generating IndexNow data file...");

  const result = await graphql(`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      allSitePage {
        nodes {
          path
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error fetching site data", result.errors);
    return;
  }

  const siteUrl = process.env.GATSBY_SITE_URL;
  const key = 'requests_indexnow_2bbe13fc752a449584db19a3eddd68ef';
  const keyLocation = `${siteUrl}/${key}.txt`;
  const host = siteUrl.replace(/^https?:\/\//, "");

  const allPages = result.data.allSitePage.nodes.map(n => n.path);
  const urlList = allPages
    .filter(p => !p.includes("dev-404-page"))
    .filter(p => !p.startsWith("/404"))
    .filter(p => !p.startsWith("/de/404"))
    .filter(p => !p.startsWith("/cart"))
    .filter(p => !p.startsWith("/de/cart"))
    .filter(p => !p.startsWith("/dates"))
    .filter(p => !p.startsWith("/de/dates"))
    .filter(p => !p.startsWith("/links"))
    .filter(p => !p.startsWith("/de/links"))
    .filter(p => !p.startsWith("/mobile-sets"))
    .filter(p => !p.startsWith("/de/mobile-sets"))
    .filter(p => !p.startsWith("/search"))
    .filter(p => !p.startsWith("/de/search"))
    .filter(p => !p.startsWith("/start"))
    .filter(p => !p.startsWith("/de/start"))
    .map(p => `${siteUrl}${p}`);

  const payload = {
    host,
    key: key.replace('requests_indexnow_', ''),
    keyLocation,
    urlList,
  };

  const fileContent = [
    "POST /IndexNow HTTP/1.1",
    "Content-Type: application/json; charset=utf-8",
    "Host: api.indexnow.org",
    JSON.stringify(payload, null, 2),
  ].join("\n");

  const publicDir = path.join(__dirname, "public");
  const outPath = path.join(publicDir, `${key}.txt`);

  try {
    fs.writeFileSync(outPath, fileContent, { encoding: "utf8", flag: "w" });
    reporter.info(`✅ Overwrote ${outPath} (${urlList.length} URLs)`);
  } catch (err) {
    reporter.error(`❌ Failed to write ${outPath}: ${err}`);
  }
};
