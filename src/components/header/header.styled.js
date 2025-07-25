import { styled } from "styled-components";

const HeaderRoot = styled.header`
    position: relative;
    background: rgba(0,0,0,0.2);
    ${({$isHero, $isHome})=>$isHero && `
        min-height: ${$isHome ? '127vw' : '80vw'};

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
    ${({$isCart})=>$isCart && `
        min-height: 54px;
        background: var(--color-cta);
        padding: 0 var(--mobile-offset);
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (min-width: 754px) {
            background: linear-gradient(to bottom, var(--color-cta) 68px, white 40px);
            min-height: 106px;
            padding: 0 var(--tablet-offset);
            display: grid;
            grid-template-rows: 68px 38px;

            ul {
                grid-row: 2;
                align-items: center;
                grid-column-end: span 2;
            }

            > div {
                margin-left: auto;
            }

            > div,
            > a {
                grid-row: 1;
            }
        }

        @media (min-width: 1280px) {
            background: linear-gradient(to bottom, var(--color-cta) var(--tablet-offset), white 40px);
            padding: 0 var(--desktop-offset);
            grid-template-rows: var(--tablet-offset) 47px;

            ul {
                grid-row: 2;
                grid-column-end: 1;
            }

            > div {
                grid-row: 2;
            }
        }
    `}

    img.logo {
        width: 81px;
        height: 35px;

        @media (min-width: 754px) {
            width: 102px;
            height: 44px;
        }

        @media (min-width: 1280px) {
            width: 145px;
            height: 63px;
            ${({$isCart})=>!$isCart && 'transform: translate(0, 12px);'}
        }
    }

    a.logo {
        ${({$isHome})=>$isHome && `background-image: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.3), transparent);`}

        @media (min-width: 754px) {
            background: none;
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

        @media (min-width: 754px) {
            object-position: center 19%;
        }
    }

    & .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 66px;
        padding: 0 var(--mobile-offset);
        position: absolute;
        width: 100%;

        @media (min-width: 754px) {
            height: 80px;
            padding: 0 11.5vw;
        }

        @media (min-width: 1280px) {
            height: 96px;
            max-width: var(--desktop-width);
            margin: 0 auto;
            padding: 0;
            align-items: end;
        }
    }

    & h1 {
        color: var(--color-white);
        text-transform: uppercase;
        font-size: 36px;
        font-weight: 300;
        line-height: normal;

        @media (min-width: 754px) {
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
    padding: 0 var(--mobile-offset) 47px;

    @media (min-width: 754px) {
        padding: 0 var(--tablet-offset) 60px;
        margin: 0 auto;
    }

    @media (min-width: 1280px) {
        padding: 0 2vw 60px;
        max-width: var(--desktop-width);
        padding: ${props=>props.$isHome ? '0 0 108px' : '0 0 34px'};
    }
`;

const SearchWrapper = styled.div`
    grid-area: search;
    display: flex;
    justify-content: ${props=>props.$isContact ? 'center' : 'space-between'};
    align-items: center;
    height: 48px;
    background: var(--color-main);
    padding: 0 var(--mobile-offset);

    @media (min-width: 754px) {
        height: 64px;
        padding: 0 var(--tablet-offset);
    }
    @media (min-width: 1280px) {
        padding: 0 var(--desktop-offset);
    }
`;

const Socials = styled.div`
    grid-area: socials;
    display: flex;
    justify-content: end;
`
const FixedMinicart = styled.div`
    position: fixed;
    background: var(--color-main);
    padding: 10px;
    border-radius: 50%;
    right: 40px;
    bottom: 53px;
    z-index: 999;
    box-shadow: 5px 4px 8px 0px rgba(0, 0, 0, 0.25);
`

export {HeaderRoot, BottomBlock, SearchWrapper, Socials, FixedMinicart}