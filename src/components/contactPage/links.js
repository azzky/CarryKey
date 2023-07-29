import React from 'react';
import Wrapper from "./links.styled"
import { gothicClass } from "@constants"

const Links = (props) => {
    const {links} = props
    return (
        <Wrapper>
            {links.map((link, index) => (
            <div key={index}>
                <p>{link.title}</p>
                <a className={gothicClass} href={link.link}>{link.link}</a>
            </div>))}
        </Wrapper>
    )
}

export default Links