import { styled } from "styled-components";

const SocialsWrapper = styled.div`
    display: flex;
    ${props=>props.$gap > 0 && `column-gap: ${props.$gap}px;`}

    & a {
        border-radius: 50%;
        ${props=>props.$isLinksPage ? '' : 'background-color: var(--color-main);'}
        display: grid;
        place-items: center;
        ${props=>props.$size && `
            width: ${props.$size}px;
            height: ${props.$size}px;
        `}
    }

    & svg {
        ${props=>props.$size && `
            width: ${props.$size}px;
            height: ${props.$size}px;
        `}
    }

    & a:hover {
        ${props=>props.$isLinksPage ? '' : `background-color: var(--color-main-hover);
        box-shadow: 4px 4px 8px 0px #3D3D3D;`}
    }
`;

export default SocialsWrapper;