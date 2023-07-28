import React from "react"
import Sprite from '../svg-sprite'
import Header from "../header";
import Footer from "../footer";
// import useCart from "../../hooks/useCart";

const Layout = (props) => {
    const {hasNavigation, isHero, h1, isHome, heroImageDesktop, heroImageMobile, slides, isContact} = props;
    // const {cart} = useCart()
    return (
        <>
            <Sprite/>
            <Header hasNavigation={hasNavigation}
                isHero={isHero}
                isHome={isHome}
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
export const Head = () => {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap" rel="stylesheet"/>
        </>
    )
}