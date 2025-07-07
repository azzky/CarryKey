import React from "react"
import Link from "@components/intl/link";
import NavMenu from "./navigation";
import useWidth from "@hooks/useWindowSize";
import SocialIcons from "../socials";
import HomeSlider from "./slider";
import MiniCart from "./minicart";
import Search from './search';
import ToTop from "./toTop";

import { HeaderRoot, BottomBlock, SearchWrapper, Socials, FixedMinicart } from "./header.styled";

const Header = (props) => {
    const {hasNavigation, isHero, heroImageDesktop, heroImageMobile, h1, isHome, slides, isContact, isCart, isShop, lang, type} = props;
    const {isMobile, isDesktop} = useWidth();
    return (
        <>
        <HeaderRoot $isHero={isHero}
            $isHome={isHome}
            $isCart={isCart}>
            {isHome ? (
                <HomeSlider slides={slides}
                    isMobile={isMobile}
                    lang={lang}/>
            ) : (
                <>
                    {isHero && !heroImageMobile && <img src={heroImageDesktop}
                        alt="" loading="lazy"
                        className="hero"/>}
                    {isHero && heroImageMobile && (
                        <picture>
                            <source media="(max-width: 767px)" srcSet={heroImageMobile}/>
                            <img src={heroImageDesktop} alt="" loading="lazy" className="hero"/>
                        </picture>
                    )}
                </>
            )}
            {isCart ? (
                <>
                    <Link className="logo" to={'/'} lang={lang}>
                        <img src="/logo1.png" alt="CarryKey logo" className="logo" quality={100}/>
                    </Link>
                    <Socials>
                        {!isMobile && <SocialIcons size={23} gap={18}/>}
                    </Socials>
                    {hasNavigation && <NavMenu isCart lang={lang}/>}
                </>
            ) : (
                <>
                    <div className="header">
                        <Link className="logo" to={'/'} lang={lang}>
                            <img src="/logo1.png" alt="CarryKey logo" className="logo"/>
                        </Link>
                        {hasNavigation && <NavMenu isShop={isShop} lang={lang}/>}
                    </div>
                    <BottomBlock $isHome={isHome}>
                        {!isHome && !isCart && <h1>{h1}</h1>}
                        <Socials>
                            {!isContact && <SocialIcons size={isMobile ? 21 : 32} gap={isMobile ? 8 : 11}/>}
                        </Socials>
                    </BottomBlock>
                </>
            )}
        </HeaderRoot>
        {!isHome && !isCart && <SearchWrapper $isContact={isContact}>
            {isContact ? (
                <>
                    {!isDesktop && <SocialIcons size={isMobile ? 37 : 51} gap={isMobile ? 14.5 : 18.5}/>}
                </>
            ) : (
                <>
                    <Search lang={lang}
                        type={type}/>
                    <MiniCart lang={lang}/>
                </>
            )}
        </SearchWrapper>}
        <FixedMinicart>
            <MiniCart lang={lang}/>
        </FixedMinicart>
        <ToTop/>
        </>
    )
}

export default Header