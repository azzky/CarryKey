import * as React from "react"
import Layout from '@components/layout'
import NotFound from "@components/404page"
import Meta from "@components/meta"

const NotFoundPage = () => {
    return (
        <Layout  isCart hideFooter>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
                <h1>Temporary unavailable</h1>
            <p>we're making something new for you!</p>

                </div>
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