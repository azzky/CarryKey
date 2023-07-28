import React from "react"
import { Link } from "gatsby";
import NavMenu from "./navigation";
import useWidth from "../../hooks/useWindowSize";
import SocialIcons from "../socials";
import HomeSlider from "./slider";
import MiniCart from "./minicart";
import Search from './search';

import { HeaderRoot, BottomBlock, SearchWrapper, Socials } from "./header.styled";

const Header = (props) => {
    const {hasNavigation, hasCart, isHero, heroImageDesktop, heroImageMobile, h1, isHome, slides, isContact} = props;
    const {isMobile, isDesktop} = useWidth();
    const back = isMobile ? heroImageMobile : heroImageDesktop;
    return (
        <>
        <HeaderRoot $isHero={isHero}
            $isHome={isHome}>
            {isHome ? (
                <HomeSlider slides={slides}
                    isMobile={isMobile}/>
            ) : (
                <>{isHero && <img src={back}
                    alt=""
                    className="hero"
                    quality={100}/>}</>
            )}
            <div className="header">
                <Link className="logo" to={'/'}>
                    <img src="/logo1.png" alt="CarryKey logo" className="logo" quality={100}/>
                </Link>
                {hasNavigation && <NavMenu/>}
            </div>
            <BottomBlock $isHome={isHome}>
                {!isHome && <h1>{h1}</h1>}
                <Socials>
                    {!isContact && <SocialIcons size={isMobile ? 21 : 32} gap={isMobile ? 8 : 11}/>}
                </Socials>
            </BottomBlock>
        </HeaderRoot>
        {!isHome && <SearchWrapper $isContact={isContact}>
            {isContact ? (
                <>
                    {!isDesktop && <SocialIcons size={isMobile ? 37 : 51} gap={isMobile ? 14.5 : 18.5}/>}
                </>
            ) : (
                <>
                    <Search/>
                    <MiniCart/>
                </>
            )}
        </SearchWrapper>}
        </>
    )
}

export default Header