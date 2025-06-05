import React from "react"
import { useCallback, useState } from "react";
import { MainMenu } from "@constants";
import Link from "@components/intl/link";
import useWidth from "@hooks/useWindowSize";

import { MobileTrigger, ShopLink, Navigation, NavWrapper } from "./navigation.styled";
import SocialIcons from "../socials";
import { FormattedMessage } from "react-intl";
import LanguageSwitcher from "../langSwitcher";

const NavMenu = ({isCart, isShop, lang}) => {
    const {isMobile} = useWidth();
    const [isOpen, setIsOpen] = useState(false);

    const clickHandler = useCallback(() => {
        setIsOpen(prev=>!prev);
    }, []);

    return (
        <>
        {isMobile && (
            <>
                <ShopLink to={isShop ? '/about' : '/shop'}>
                    {isShop ? (
                        <FormattedMessage id="menu.about"/>
                    ) : (
                        <FormattedMessage id="menu.shop"/>
                    )}
                </ShopLink>
                <LanguageSwitcher/>
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
                    <span>
                        <FormattedMessage id="global.close"/>
                    </span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <use href="#close"/>
                    </svg>
                </button>
            </div>
            <Navigation>
                {MainMenu.map(item => (
                    <li key={item.link}>
                        <Link to={item.link} lang={lang} activeClassName="active">
                            <FormattedMessage id={item.title}/>
                        </Link>
                    </li>
                ))}
            </Navigation>
            <SocialIcons size={21} gap={16} />
        </NavWrapper>) : (<>
            <Navigation $isCart={isCart}>
                {MainMenu.map(item => (
                    <li key={item.link}>
                        <Link to={item.link} lang={lang} activeClassName="active">
                            <FormattedMessage id={item.title}/>
                        </Link>
                    </li>
                ))}
                <LanguageSwitcher/>
            </Navigation>
        </>)}
    </>
    );
};

export default NavMenu;