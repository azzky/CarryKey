import { styled } from "styled-components";
import Link from "@components/intl/link";

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
    translate: ${props=>props.$isOpen ? '0 0' : '130% 0'};
    transition: linear .3s translate;
    padding-right: 30px;
    padding-bottom: 50px;
    bottom: 0;
    box-shadow: 30px 0 50px 20px var(--color-black);
    will-change: translate;

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

    @media (min-width: 754px) {
        a:hover,
        a.active {
            text-decoration: underline;
        }
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