import React from "react"
import { ContactLinks } from '@constants';

import SocialsWrapper from './socials.styled';

const SocialIcons = (props) => {
    const {size, gap, isLinksPage} = props;
    return (
        <SocialsWrapper $size={size} $gap={gap} $isLinksPage={isLinksPage}>
            {ContactLinks.map(social => (
                <a href={social.link} rel="me noreferrer" target="_blank" key={social.title}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                        <use href={'#'+social.title.toLowerCase()}/>
                    </svg>
                    <span className="visually-hidden">{`link to the ${social.title}`}</span>
                </a>
            ))}
        </SocialsWrapper>
    )
};

export default SocialIcons;