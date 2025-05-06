import React from 'react';
import Layout from '@components/layout'
import AboutBlock from '@components/homepage/about'
import Meta from "@components/meta"

import backDesk from '@images/back-contact.jpg';

const About = ({
    pageContext: {
        langKey: lang
    }
}) => {
    return (
        <Layout hasNavigation isHero
            h1={'Über Mich'}
            lang={lang}
            heroImageDesktop={backDesk}>
            <AboutBlock lang={lang}/>
        </Layout>
    )
}

export default About;

export const Head = () => {
    return (
        <>
        <Meta title="Über Mich"
            url="/de/about"
            thumbnail={backDesk}
        />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#fff"/>
        </>
    )
}