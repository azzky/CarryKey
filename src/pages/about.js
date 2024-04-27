import React from 'react';
import Layout from '@components/layout'
import AboutBlock from '@components/homepage/about'
import Meta from "@components/meta"

import backDesk from '@images/back-contact.jpg';

const About = () => {
    return (
        <Layout hasNavigation isHero
            h1={'About'}
            heroImageDesktop={backDesk}>
            <AboutBlock/>
        </Layout>
    )
}

export default About;

export const Head = () => {
    return (
        <Meta title="About"
            url="about"
            thumbnail={backDesk}
        />
    )
}