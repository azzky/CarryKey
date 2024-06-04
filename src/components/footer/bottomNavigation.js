import React from "react"
import { Link } from "gatsby";
// import { useState, useCallback } from "react";
// import Nav from "./bottomNavigation.styled";

const BottomNavigation = (props) => {
    const {links} = props;
    // const [isOpen, setIsOpen] = useState(false);
    // const clickHandler = useCallback(() => {
    //     setIsOpen(prev=>!prev)
    // }, []);
    return (
        <div className="column">
            {/* <Nav onClick={clickHandler}>
                <h4>{title}</h4>
                <svg width="10" height="12" viewBox="0 0 10 12">
                    <use href="#arrowDown"/>
                </svg>
            </Nav> */}
            {/* {(isDesktop || isOpen) &&  */}
            <ul>
                {links.map(item => (
                    <li key={item.link}>
                        <Link to={item.link}>{item.title}</Link>
                    </li>
                ))}
            </ul>
            {/* } */}
        </div>
    )
}

export default BottomNavigation