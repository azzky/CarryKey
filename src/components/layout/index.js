import React from "react"
import Sprite from '@components/svg-sprite'
import Header from "@components/header";
import Footer from "@components/footer";

const Layout = (props) => {
    const {hasNavigation, isHero, h1, isHome, heroImageDesktop, heroImageMobile, slides, isContact, isCart, isShop} = props;
    return (
        <>
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
                h1={h1}/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </>
    )
}
export default Layout