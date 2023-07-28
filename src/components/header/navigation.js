import React from "react"
import { useCallback, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { MainMenu } from "../../constants";
import { Link } from "gatsby";
import useWidth from "../../hooks/useWindowSize";

import { MobileTrigger, ShopLink, Navigation, NavWrapper } from "./navigation.styled";
import SocialIcons from "../socials";

const NavMenu = () => {
    const {isMobile} = useWidth();
    const [isOpen, setIsOpen] = useState(false);

    const clickHandler = useCallback(() => {
        setIsOpen(prev=>!prev);
    }, []);

    return (
        <>
        {isMobile && (
            <>
            <ShopLink to={'/shop'}>Shop</ShopLink>
                <MobileTrigger onClick={clickHandler}
                    $isOpen={isOpen}>
                    <span/>
                    <span/>
                    <span/>
                </MobileTrigger>
            </>
        )}
        {isMobile ? (<NavWrapper $isOpen={isOpen}>
            <div className="top">
                <img src="/logo1.png" alt="CarryKey logo" className="logo" quality={100}/>
                <button className="close" onClick={clickHandler}>
                    <span>Close</span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <use href="#close"/>
                    </svg>
                </button>
            </div>
            <Navigation>
                {MainMenu.map(item => (
                    <li key={item.link}>
                        <Link to={item.link} activeClassName="active">{item.title}</Link>
                    </li>
                ))}
            </Navigation>
            <SocialIcons size={21} gap={16} />
        </NavWrapper>) : (<>
            <Navigation>
                {MainMenu.map(item => (
                    <li key={item.link}>
                        <Link to={item.link} activeClassName="active">{item.title}</Link>
                    </li>
                ))}
            </Navigation>
        </>)}
    </>
    );
};

export default NavMenu;