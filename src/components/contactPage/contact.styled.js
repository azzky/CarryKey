import { styled } from "styled-components";

const SocialIconsWrapper = styled.div`
    @media (max-width: 1279px) {
        display: none;
    }
`;

const Content = styled.div`
    @media (min-width: 1280px) {
        display: grid;
        max-width: var(--desktop-width);
        margin: 96px auto;
        gap: 40px;
        grid-template-areas:
            'socials images'
            'form images';
        grid-template-rows: 51px auto;
        &>div:nth-child(1) {
            grid-area: socials;
        }
        &>div:nth-child(2) {
            grid-area: form;
        }
        &>div:nth-child(3) {
            grid-area: images;
        }
    }
`

export { SocialIconsWrapper, Content }