import { styled } from "styled-components";
import { Link } from "gatsby";

const MobileTrigger = styled.button`
    width: 13px;
    position: relative;
    height: 13px;
    background: none;
    border: 0;
    box-shadow: none;

    & span {
        height: 2px;
        border-radius: 1px;
        background: var(--color-white);
        position: absolute;
        top: 0;
        left: 0;
        width: 13px;

        &:nth-child(2) {
            top: 5px;
        }

        &:nth-child(3) {
            top: 10px;
        }
    }
`;

const ShopLink = styled(Link)`
    text-transform: uppercase;
    font-size: 12px;
    color: var(--color-white);
    margin-right: -38px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 11px 4.5px 0 4.5px;
        border-color: var(--color-main) transparent transparent transparent;
        top: 5px;
        right: -16px;
    }
`;

const NavWrapper = styled.div`
    position: fixed;
    background: var(--color-secondary);
    left: 30px;
    right: 0;
    top: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    font-size: 30px;
    align-items: center;
    translate: ${props=>props.$isOpen ? '0 0' : '100% 0'};
    transition: linear .3s translate;
    padding-right: 30px;
    padding-bottom: 50px;

    & .top {
        height: 48px;
        display: flex;
        justify-content: space-between;
        width: calc(100% + 30px);
        background-color: var(--color-cta);
        align-items: center;
        padding: 0 57px 0 26px;
        margin-right: -30px;

        button {
            border: 0;
            background: none;
            color: var(--color-white);
            display: flex;
            column-gap: 13px;
        }
    }
`;

const Navigation = styled.ul`
    list-style: none;
    display: flex;
    text-transform: uppercase;
    font-size: 14px;

    @media (max-width: 753px) {
        display: grid;
        width: 100%;
        padding-bottom: 52px;
    }

    & li {
        position: relative;

        @media (max-width: 753px) {
            color: var(--color-black);
            height: 54px;
            border-bottom: 1px solid var(--color-cta);
            line-height: 54px;
            padding: 0 5px;
            margin: 0 11px;
        }
    }

    & a:hover::after,
    &:not(:hover) a.active::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 11px 4.5px 0 4.5px;
        border-color: var(--color-main) transparent transparent transparent;
        ${props=>props.$isCart ? `
        top: 6px;
        right: 17px;
        `:`
        top: 5px;
        right: 1px;
        `}
    }

    & a {
        text-decoration: none;
        margin: 0 15px;
        color: var(--color-black);

        ${props=>props.$isCart ? `
            @media (min-width: 754px) {
                margin: 0 30px 0 0;
            }
        `: `
            @media (min-width: 754px) {
                color: var(--color-white);
            }
        `}
    }
`;

export {MobileTrigger, ShopLink, Navigation, NavWrapper}