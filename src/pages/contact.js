import React from 'react';
import Layout from '@components/layout'
import ThreeImages from '@components/threeImages';
import SocialIcons from '@components/socials';
import ContactForm from '../components/contactPage/form';
import Meta from "@components/meta"

import { SocialIconsWrapper, Content } from '@components/contactPage/contact.styled';

import backDesk from '@images/back-contact.jpg';

const Contact = () => {
    return (
        <Layout hasNavigation isHero isContact
            h1={'Contact page'}
            heroImageDesktop={backDesk}>
            <Content>
                <SocialIconsWrapper>
                    <SocialIcons size={51} gap={19}/>
                </SocialIconsWrapper>
                <ContactForm/>
                <ThreeImages src="contact" />
            </Content>
        </Layout>
    )
}

export default Contact;

export const Head = () => {
    return (
        <Meta title="Contact"
            url="contact"
            thumbnail={backDesk}
        />
    )
}