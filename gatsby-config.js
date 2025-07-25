/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});
module.exports = {
    siteMetadata: {
        title: `Carrykey`,
        siteUrl: `https://carrykey.me`
    },
    trailingSlash: "never",
    plugins: [
        {
            resolve: `gatsby-source-sanity`,
            options: {
                projectId: process.env.GATSBY_SANITY_PROJECT_ID,
                dataset: process.env.GATSBY_SANITY_DATASET,
                // a token with read permissions is required
                // if you have a private dataset
                token: process.env.SANITY_TOKEN,

                // If the Sanity GraphQL API was deployed using `--tag <name>`,
                // use `graphqlTag` to specify the tag name. Defaults to `default`.
                graphqlTag: 'default',
            },
        },
        {
            resolve: "gatsby-plugin-sanity-image",
            options: {
                // Sanity project info (required)
                projectId: process.env.GATSBY_SANITY_PROJECT_ID,
                dataset: process.env.GATSBY_SANITY_DATASET,
                customImageTypes: ['webp', 'avif'],
                defaultImageConfig: {
                    quality: 95,
                    fit: "max",
                    auto: "format",
                },
            },
        },
        // {
        //     resolve: 'gatsby-source-contentful',
        //     options: {
        //         "accessToken": process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        //         "spaceId": process.env.GATSBY_CONTENTFUL_SPACE_ID
        //     }
        // },
        {
            resolve: 'gatsby-plugin-preconnect',
            options: {
                domains: [
                    'https://images.ctfassets.net',
                    'https://fonts.googleapis.com',
                    'https://fonts.gstatic.com',
                ],
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-styled-components",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
        __key: "images"
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                "@components": "src/components",
                "@pages": "src/pages",
                "@styles": "src/styles",
                "@templates": "src/templates",
                "@hooks": "src/hooks",
                "@images": "src/images",
                "@constants": "src/constants"
                },
                extensions: ["js"],
            }
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
                stripMetadata: true,
                failOnError: true,
                defaults: {
                    formats: [`avif`, `webp`, `auto`],
                    placeholder: `blurred`,
                    quality: 75,
                    breakpoints: [280, 450, 754, 1280, 1440, 1920],
                    backgroundColor: `transparent`,
                    tracedSVGOptions: {},
                    blurredOptions: {},
                    jpgOptions: {},
                    pngOptions: {},
                    webpOptions: {},
                    avifOptions: {},
                }
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `CarryKey`,
                short_name: `CarryKey`,
                start_url: `/`,
                description: 'CarryKey website portfolio',
                lang: 'en',
                orientation: 'portrait',
                background_color: `#FDFDFD`,
                theme_color: `#A38ED2`,
                display: `standalone`,
                icon: `src/images/favic/favicon.png`,
                "icons": [
                    {
                        "src": "/android-chrome-36x36.png",
                        "sizes": "36x36",
                        "type": "image/png"
                    },
                    {
                        "src": "/android-chrome-48x48.png",
                        "sizes": "48x48",
                        "type": "image/png"
                    },
                    {
                        "src": "/android-chrome-72x72.png",
                        "sizes": "72x72",
                        "type": "image/png"
                    },
                    {
                        "src": "/android-chrome-96x96.png",
                        "sizes": "96x96",
                        "type": "image/png"
                    },
                    {
                        "src": "/android-chrome-144x144.png",
                        "sizes": "144x144",
                        "type": "image/png"
                    },
                    {
                        "src": "/android-chrome-192x192.png",
                        "sizes": "192x192",
                        "type": "image/png"
                    },
                    {
                        "src": "/android-chrome-256x256.png",
                        "sizes": "256x256",
                        "type": "image/png"
                    },
                    {
                        "src": "/android-chrome-384x384.png",
                        "sizes": "384x384",
                        "type": "image/png"
                    },
                    {
                        "src": "/android-chrome-512x512.png",
                        "sizes": "512x512",
                        "type": "image/png"
                    }
                ],
                include_favicon: true,
                cache_busting_mode: 'none',
                icon_options: {
                    purpose: `any maskable`,
                },
                legacy: true,
            }
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://carrykey.me',
                sitemap: 'https://carrykey.me/sitemap-0.xml',
                env: {
                    development: {
                        policy: [{ userAgent: '*', disallow: ['/cart', '*?*'] }]
                    },
                    production: {
                        policy: [{ userAgent: '*', disallow: ['/cart', '*?*'] }]
                    }
                }
            }
        },
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                excludes: ['/merch', '/feedback', '/search', '/dates', '/mobile-sets', '/cart', '/start', '/links'],
                query: `
                    {
                        allSitePage {
                            nodes {
                                path

                            }
                        }
                        allSanityPost {
                            nodes {
                                url
                                _updatedAt
                            }
                        }
                        allSanityMerch {
                            nodes {
                                url
                                _updatedAt
                            }
                        }
                    }
                `,
                resolveSiteUrl: () => 'https://carrykey.me',
                resolvePages: ({ allSitePage: { nodes }, allSanityPost }) => {
                    return nodes.map((page) => {
                        const matchingApiPage = allSanityPost.nodes.find(apiPage => 
                            page.path === '/shop/set/' + apiPage.url
                        );
                        const priority = page.path === "/" ? 1.0 : 0.7;
                        const changefreq = page.path === "/" ? 'daily' : 'weekly';
                        const lastmod = matchingApiPage ? matchingApiPage._updatedAt : new Date().toISOString();
                        return { ...page, priority, changefreq, lastmod };
                    });
                },
                serialize: ({ path, priority, changefreq,lastmod }) => {                    
                    return {
                        url: path,
                        priority: priority,
                        changefreq: changefreq,
                        lastmod: lastmod
                    };
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GATSBY_GA_NUMBER,
                head: true,
                exclude: ['/merch', '/feedback', '/search', '/links', '/mobile-sets', '/cart', '/start'],
                pageTransitionDelay: 0,
                defer: false,
                enableWebVitalsTracking: true
            },
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: process.env.GATSBY_GTM_NUMBER,

                // Include GTM in development.
                //
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false,

                // datalayer to be set before GTM is loaded
                // should be an object or a function that is executed in the browser
                //
                // Defaults to null
                defaultDataLayer: { platform: "gatsby" },
                // defaultDataLayer: function () {
                //     return {
                //     pageType: window.pageType,
                //     }
                // },
            },
        },
        {
            resolve: 'gatsby-plugin-i18n',
            options: {   
                langKeyDefault: 'en',
                useLangKeyLayout: true,     
                prefixDefault: false
            }
        },
    ]
};
