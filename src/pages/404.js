import * as React from "react"
import Layout from '@components/layout'
import NotFound from "../components/404page"

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
        <title>Not found</title>
    )
}
