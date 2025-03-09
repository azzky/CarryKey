import * as React from "react"
import Layout from '@components/layout'
import NotFound from "@components/404page"
import Meta from "@components/meta"

const NotFoundPage = ({
    pageContext: {
        langKey: lang
    }
}) => {
    return (
        <Layout hasNavigation isCart
            lang={lang}
                h1={'About'}>
            <NotFound/>
        </Layout>
    )
}

export default NotFoundPage

export const Head = () => {
    return (
        <>
        <Meta title="Not found"
            url="404"
            />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#fff"/>
        </>
    )
}