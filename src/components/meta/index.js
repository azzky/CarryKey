import * as React from "react"

import { twitterLink } from "@constants";

const Meta = ({
    title,
    url,
    description,
    thumbnail,
    priceMax,
    priceMin,
    isHome,
    isPost
}) => {    
    const schemaSkeleton = {
        '@context': 'https://schema.org',
        '@graph': []
    };
    const schemaItems = schemaSkeleton['@graph'];
    const schemaBreadcrumb = isPost ? {
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                'position': 1,
                "item":
                    {
                        "@id": process.env.GATSBY_SITE_URL + '/shop',
                        "name": "Shop"
                    }
            },
            {
                '@type': 'ListItem',
                'position': 2,
                "item":
                    {
                        "@id": process.env.GATSBY_SITE_URL + url,
                        "name": title
                    }
            }
        ]
    } : {
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                'position': 1,
                "item":
                    {
                        "@id": process.env.GATSBY_SITE_URL + url,
                        "name": title
                    }
            }
        ]
    };
    const author = {
        "@type": "Person",
        "name": "Katsiaryna Ladzianava",
        "alternateName": "Carrykey",
        "jobTitle": "Cosplayer",
        "url": twitterLink
    }
    const schemaPage = {
        '@type': 'WebPage',
        'name': title,
        // 'description': '',
        'image': process.env.GATSBY_SITE_URL + thumbnail,
        'inLanguage': 'en-US',
        'author': author
    }
    const schemaPostPage = isPost ? {
        '@type': 'WebPage',
        'name': title,
        'breadcrumb': 'Shop',
        // 'description': '',
        'image': thumbnail,
        'inLanguage': 'en-US',
        // 'image': schemaArticleImages,
        // 'datePublished': data.createdAt,
        'author': author
    } : null;
    const schemaProduct = isPost ? {
        '@type': 'Product',
        'name': title,
        'image': thumbnail,
        isFamilyFriendly: false,
        hasAdultConsideration: true,
        url: process.env.GATSBY_SITE_URL + url,
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "offerCount": 1,
            "highPrice": priceMax || priceMin,
            "lowPrice": priceMin || priceMax
        }
    } : null;
    function extractValue(obj) {
        if (obj.value) {
            return obj.value;
        }

        if (obj.content && Array.isArray(obj.content)) {
            for (const item of obj.content) {
            const result = extractValue(item);
            if (result) {
                return result;
            }
            }
        }

        return null; // Return null if no value is found
    }    
    let formattedDescription = null;
    if (description && typeof description === 'object') {
        formattedDescription = extractValue(JSON.parse(description.raw));
        // schemaProduct.review = formattedDescription;
    }
    if (description && typeof description === 'string') {
        formattedDescription = description;
        // schemaProduct.review = formattedDescription;
    }
    
    if (!isHome) schemaItems.push(schemaBreadcrumb);
    if (isPost) {
        schemaItems.push(schemaPostPage);
        schemaItems.push(schemaProduct);
    } else {
        schemaItems.push(schemaPage)
    }
    
    return <>
        {title && <>
            <title>{title + ' | CarryKey'}</title>
            <meta name="og:title"
                  property="og:title"
                  content={title + ' | CarryKey'} />
            <meta name="twitter:title"
                property="twitter:title"content={title + ' | CarryKey'} />
        </>}
        {url && <>
            <meta name="og:url"
                property="og:url"
                content={process.env.GATSBY_SITE_URL + url}/>
            <meta name="ia:markup_url"
                property="ia:markup_url"
                content={process.env.GATSBY_SITE_URL + url}/>
            <meta name="ia:rules_url"
                property="ia:rules_url"
                content={process.env.GATSBY_SITE_URL + url}/>
        </>}
        <meta property="og:type"
                content="website"></meta>
        {description && <>
            <meta name="description"
                property="description"
                content={formattedDescription} />
            <meta name="og:description"
                property="og:description"
                content={formattedDescription} />
            <meta name="twitter:description"
                property="twitter:description"
                content={formattedDescription} />
        </>}
        {thumbnail && <>
            <meta name="og:image"
                property="og:image"
                content={isPost ? thumbnail+'?w=400' : process.env.GATSBY_SITE_URL + thumbnail}/>
            <meta name="twitter:image"
                property="twitter:image"content={isPost ? thumbnail+'?w=400' : process.env.GATSBY_SITE_URL + thumbnail}/>
            <meta name="vk:image"
                property="vk:image"
                content={isPost ? thumbnail+'?w=400' : process.env.GATSBY_SITE_URL + thumbnail}/>
        </>}
        {/* <meta name="fb:app_id"
                property="fb:app_id"
                content="966242223397117"/> */}
        <meta name="twitter:card"
                property="twitter:card"
                content="summary_large_image"/>
        <script type="application/ld+json">{JSON.stringify(schemaSkeleton)}</script>
    </>
}

export default Meta