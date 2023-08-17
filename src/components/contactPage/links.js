import React from 'react';
import Wrapper from "./links.styled"

const Links = (props) => {
    const {links} = props
    return (
        <Wrapper>
            {links.map((link, index) => (
            <div key={index}>
                <p>{link.title}</p>
                <a href={link.link}>{link.link}</a>
            </div>))}
        </Wrapper>
    )
}

export default Links