import React from 'react';
import Layout from '@components/layout'
import ServicesBlock from '@components/homepage/services'

import backDesk from '@images/back-contact.jpg';

const Services = () => {
    return (
        <Layout hasNavigation isHero
            h1={'Services'}
            heroImageDesktop={backDesk}>
            <ServicesBlock/>
        </Layout>
    )
}

export default Services;

export const Head = () => {
    return (
        <>
            <title>Services | CarryKey</title>
        </>
    )
}