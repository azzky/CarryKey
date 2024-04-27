import * as React from "react"
import Layout from '@components/layout'
import NotFound from "@components/404page"
import Meta from "@components/meta"

const NotFoundPage = () => {
    return (
        <Layout hasNavigation isCart
                h1={'About'}>
            <NotFound/>
        </Layout>
    )
}

export default NotFoundPage

export const Head = () => {
    return (
        <Meta title="Not found"
            url="404"
            />
    )
}