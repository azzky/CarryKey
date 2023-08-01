import React from "react"
import SocialsWrapper from './socials.styled';

const SocialIcons = (props) => {
    const {size, gap} = props;
    return (
        <SocialsWrapper $size={size} $gap={gap}>
            <a href={'https://www.instagram.com/carry.key_cosplay'}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <use href="#instagram"/>
                </svg>
            </a>
            <a href={'https://www.instagram.com/carry.key_cosplay'}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <use href="#facebook"/>
                </svg>
            </a>
            <a href={'https://www.tiktok.com/@carrykey_cosplay'}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <use href='#tiktok'/>
                </svg>
            </a>
            <a href={'https://www.instagram.com/carry.key_cosplay'}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <use href="#youtube"/>
                </svg>
            </a>
        </SocialsWrapper>
    )
};

export default SocialIcons;