import * as React from "react"

const Meta = ({
    title,
    url,
    description,
    thumbnail,
    isPost
}) => {
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
                content={process.env.GATSBY_SITE_URL + '/' + url}/>
            <meta name="ia:markup_url"
                property="ia:markup_url"
                content={process.env.GATSBY_SITE_URL + '/' + url}/>
            <meta name="ia:rules_url"
                property="ia:rules_url"
                content={process.env.GATSBY_SITE_URL + '/' + url}/>
        </>}
        <meta property="og:type"
                content="website"></meta>
        {description && <>
            <meta name="description"
                property="description"
                content={description} />
            <meta name="og:description"
                property="og:description"
                content={description} />
            <meta name="twitter:description"
                property="twitter:description"
                content={description}/>
        </>}
        {thumbnail && <>
            <meta name="og:image"
                property="og:image"
                content={isPost ? thumbnail+'?w=400' : process.env.GATSBY_SITE_URL + '/' + thumbnail+'?w=400'}/>
            <meta name="twitter:image"
                property="twitter:image"content={isPost ? thumbnail+'?w=400' : process.env.GATSBY_SITE_URL + '/' + thumbnail+'?w=400'}/>
            <meta name="vk:image"
                property="vk:image"
                content={isPost ? thumbnail+'?w=400' : process.env.GATSBY_SITE_URL + thumbnail+'?w=400'}/>
        </>}
        {/* <meta name="fb:app_id"
                property="fb:app_id"
                content="966242223397117"/> */}
        <meta name="twitter:card"
                property="twitter:card"
                content="summary_large_image"/>
        {/* <script type="application/ld+json">{JSON.stringify(schemaSkeleton)}</script> */}
    </>
}

export default Meta