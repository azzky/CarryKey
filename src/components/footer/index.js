import React from "react"
import MailchimpSubscribe from "./subscription";
import { MainMenu, subscriptionUrl } from '@constants';
import { Link } from "gatsby";
import useWidth from "@hooks/useWindowSize";
import SocialIcons from "@components/socials";
import BottomNavigation from "./bottomNavigation";

import { FooterRoot, Socials, Bottom, UpperSection, BottomSection } from "./footer.styled"

const SimpleForm = () => <MailchimpSubscribe url={subscriptionUrl}/>

const Footer = () => {
    const {isDesktop, isMobile} = useWidth();
    return (
        <FooterRoot>
            <UpperSection>
                <div>
                    <img quality={100} alt="" src="/logo2.png" className="logo" width={isDesktop ? 145 : 81} height={isDesktop ? 63 : 35}/>
                    {!isMobile && <p className="hiddenDescription">{'At “CarryKey” we love our job and try to be creative every time, so our customers can get some really unique content.'}</p>}
                    <Link to={'/contact'}
                        className="contact-link">{'Contact page'}</Link>
                </div>
                {/* <MailchimpSubscribe
                    url={subscriptionUrl}
                    isDesktop={isDesktop}
                    render={({ subscribe }) => (
                    <div className="form">
                        <h4>GET THE LATEST NEWS FROM “CarryKey”</h4>
                        <p className="changingFont">Be the first to hear about new arrivals & promotions</p>
                        <SimpleForm onSubmitted={formData => subscribe(formData)} />
                    </div>
                    )}
                /> */}
            </UpperSection>
            <BottomSection>
                <BottomNavigation isDesktop={!isMobile} title="Company" links={MainMenu}/>
                {isDesktop && <Socials>
                    <SocialIcons size={32} gap={10}/>
                </Socials>}
            </BottomSection>
            <Bottom>
                {!isDesktop && <Socials>
                    <SocialIcons size={32} gap={10}/>
                </Socials>}
            </Bottom>
        </FooterRoot>
    )
}

export default Footer