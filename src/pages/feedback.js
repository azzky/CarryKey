import React from 'react';
import Layout from '@components/layout'

const Feedback = () => {
    return (
        <Layout hasNavigation isHero
            h1={'Feedback'}>
        </Layout>
    )
}

export default Feedback;

export const Head = () => {
    return (
        <>
            <title>Feedback | CarryKey</title>
            <link rel="mask-icon" href="safari-pinned-tab.svg" color="#fff"/>
        </>
    )
}