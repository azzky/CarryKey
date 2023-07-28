import { styled } from "styled-components";

const HeaderRoot = styled.header`
    position: relative;
    background: rgba(0,0,0,0.2);
    ${({$isHero, $isHome})=>$isHero && `
        min-height: ${$isHome ? '494px' : '303px'};

        @media (min-width: 754px) {
            min-height: ${$isHome ? '63.66vw' : '46.5vw'};
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }

        @media (min-width: 1280px) {
            min-height: ${$isHome ? '100vh' : '38vw'};
        }
    `}

    img.logo {
        width: 81px;
        height: 35px;

        @media (min-width: 391px) {
            width: 102px;
            height: 44px;
        }

        @media (min-width: 1280px) {
            width: 145px;
            height: 63px;
            transform: translate(0, 12px);
        }
    }

    img.hero {
        position: absolute;
        object-fit: cover;
        object-position: center 12%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: -1;

        @media (min-width: 391px) {
            object-position: center 19%;
        }
    }

    & .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 66px;
        padding: 0 55px;
        position: absolute;
        width: 100%;

        @media (min-width: 391px) {
            height: 80px;
            padding: 0 11.5vw;

            ul {
                margin-right: -11px;
            }
        }

        @media (min-width: 1280px) {
            height: 96px;
            max-width: var(--desktop-width);
            margin: 0 auto;
            padding: 0;
            align-items: end;

            ul {
                margin-right: -15px;
            }
        }
    }

    & h1 {
        color: var(--color-white);
        text-transform: uppercase;
        font-size: 36px;
        font-weight: 300;
        line-height: normal;

        @media (min-width: 391px) {
            font-size: 48px;
        }

        @media (min-width: 1280px) {
            font-size: 80px;
        }
    }
`;

const BottomBlock = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 55px 47px;

    @media (min-width: 391px) {
        padding: 0 2vw 60px;
        max-width: var(--desktop-width);
        margin: 0 auto;
    }

    @media (min-width: 1280px) {
        padding: ${props=>props.$isHome ? '0 0 108px' : '0 0 34px'};
    }
`;

const SearchWrapper = styled.div`
    grid-area: search;
    display: flex;
    justify-content: ${props=>props.$isContact ? 'center' : 'space-between'};
    align-items: center;
    height: 64px;
    background: var(--color-main);
    padding: 0 var(--desktop-offset);
`;

const Socials = styled.div`
    grid-area: socials;
    display: flex;
    justify-content: end;
`

export {HeaderRoot, BottomBlock, SearchWrapper, Socials}