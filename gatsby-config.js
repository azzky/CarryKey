/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});
module.exports = {
    siteMetadata: {
        title: `Carrykey`,
        siteUrl: `https://www.yourdomain.tld` // TODO
    },
    trailingSlash: "never",
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
                "spaceId": process.env.CONTENTFUL_SPACE_ID
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
                    quality: 100,
                    breakpoints: [390, 754, 1280, 1440, 1920],
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
        // {
        //     resolve: `gatsby-plugin-sitemap`,
        //     options: {
        //         output: `/`,
        //         excludes: [`/ru/404`, `/404.html`, `/success`, `/ru/success`, `/contact`, `/ru/contact`],
        //         query: `{
        //         allSitePage {
        //             nodes {
        //             path
        //             pageContext
        //             }
        //         }
        //         }`,
        //         resolveSiteUrl: () => process.env.SITE_URL,
        //         serialize: ({path, pageContext}) => {
        //         const today = new Date()
        //         return {
        //             url: process.env.SITE_URL + path,
        //             changefreq: `daily`,
        //             priority: 0.7,
        //             lastmodISO: pageContext.modified || today.toISOString()
        //         }
        //         }
        //     }
        // },
        // {
        //     resolve: 'gatsby-plugin-robots-txt',
        //     options: {
        //         host: process.env.SITE_URL,
        //         sitemap: process.env.SITE_URL +'/sitemap-0.xml',
        //         env: {
        //         development: {
        //             policy: [{ userAgent: '*', disallow: ['/'] }]
        //         },
        //         production: {
        //             policy: [{ userAgent: '*', allow: '/' }]
        //         }
        //         }
        //     }
        // },
    ]
};
