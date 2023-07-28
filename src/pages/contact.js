import React from 'react';
import Layout from '../components/layout'
import { ContactLinks } from '../constants';
import ThreeImages from '../components/threeImages';
import Links from '../components/contactPage/links';
import SocialIcons from '../components/socials';

import { SocialIconsWrapper, Content } from '../components/contactPage/contact.styled';

import backDesk from '../images/back-contact-big.jpeg';
import backMobile from '../images/back-contact-mobile.jpg';

const Contact = () => {
    return (
        <Layout hasNavigation isHero isContact
            h1={'Contact page'}
            heroImageDesktop={backDesk}
            heroImageMobile={backMobile}>
            <Content>
                <SocialIconsWrapper>
                    <SocialIcons size={51} gap={19}/>
                </SocialIconsWrapper>
                <Links links={ContactLinks}/>
                <ThreeImages src="contact" />
            </Content>
        </Layout>
    )
}

export default Contact;