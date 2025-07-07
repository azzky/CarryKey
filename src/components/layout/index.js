import React from "react"
import Intl from "@components/intl";
import Sprite from '@components/svg-sprite'
import Header from "@components/header";
import Footer from "@components/footer";

const Layout = (props) => {
    const {hasNavigation, isHero, h1, isHome, heroImageDesktop, heroImageMobile, slides, isContact, isCart, isShop, hideFooter, lang, type} = props;
    return (
        <Intl lang={lang}>
            <Sprite/>
            <Header hasNavigation={hasNavigation}
                isHero={isHero}
                isHome={isHome}
                isCart={isCart}
                isShop={isShop}
                isContact={isContact}
                heroImageDesktop={heroImageDesktop}
                heroImageMobile={heroImageMobile}
                slides={slides}
                lang={lang}
                type={type}
                h1={h1}/>
            <main>
                {props.children}
            </main>
            {!hideFooter && <Footer lang={lang}/>}
        </Intl>
    )
}
export default Layout