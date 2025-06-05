import React from "react"
import { FormattedMessage } from "react-intl"
import Link from "@components/intl/link";
import useWidth from "@hooks/useWindowSize";
import SocialIcons from "@components/socials";
import BottomNavigation from "./bottomNavigation";

import { FooterRoot, Socials, Bottom, UpperSection, BottomSection } from "./footer.styled"
import { MainMenu } from "@constants";
const Footer = ({lang}) => {
    const {isDesktop, isMobile} = useWidth();
    const time = new Date();
    const year = time.getFullYear() === 2024 ? '2024' : `2024 - ${time.getFullYear()}`;
    
    return (
        <FooterRoot>
            <UpperSection>
                <div>
                    <Link to="/" lang={lang}>
                        <img quality={100} alt="" src="/logo2.png" className="logo" width={isDesktop ? 145 : 81} height={isDesktop ? 63 : 35}/>
                    </Link>
                    {!isMobile && <p className="hiddenDescription">
                        <FormattedMessage id="footer.description"/>
                    </p>}
                    <Link to={'/contact'}
                        lang={lang}
                        className="contact-link">
                        <FormattedMessage id="footer.contactLink"/>
                    </Link>
                </div>
            </UpperSection>
            <BottomSection>
                <BottomNavigation isDesktop={!isMobile} title="Company" links={MainMenu} lang={lang}/>
            </BottomSection>
            <Bottom>
                <p className="copyright">
                    &copy; {` ${year}, CarryKey`}
                </p>
                <Socials>
                    <SocialIcons size={32} gap={10}/>
                </Socials>
                <span className="space"></span>
            </Bottom>
        </FooterRoot>
    )
}

export default Footer