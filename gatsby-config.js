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
            resolve: 'gatsby-source-contentful',
            options: {
                "accessToken": process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
                "spaceId": process.env.GATSBY_CONTENTFUL_SPACE_ID
            }
        },
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
                include_favicon: true,
                cache_busting_mode: 'none',
                icon_options: {
                    purpose: `any maskable`,
                }
            }
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://carrykey.me',
                sitemap: 'https://carrykey.me/sitemap-0.xml',
                env: {
                    development: {
                        policy: [{ userAgent: '*', disallow: ['/'] }]
                    },
                    production: {
                        policy: [{ userAgent: '*', allow: '/' }]
                    }
                }
            }
        },
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                excludes: ['/merch', '/feedback', '/search', '/dates'],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GATSBY_GA_NUMBER,
                head: true,
                exclude: ['/merch', '/feedback', '/search'],
                pageTransitionDelay: 0,
                defer: false,
                enableWebVitalsTracking: true
            },
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: process.env.GATSBY_GA_NUMBER,

                // Include GTM in development.
                //
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false,

                // datalayer to be set before GTM is loaded
                // should be an object or a function that is executed in the browser
                //
                // Defaults to null
                // defaultDataLayer: { platform: "gatsby" },
                defaultDataLayer: function () {
                    return {
                    pageType: window.pageType,
                    }
                },
            },
        },
    ]
};
