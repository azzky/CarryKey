import { styled } from "styled-components";

const SliderWrapper =styled.div`
    // & img {
    //     max-width: 100vw;
    //     max-height: calc(100vh - 80px);
    //     object-fit: cover;
    //     min-width: 100vw;
    //     position: initial !important;

    //     @media (min-width: 754px) {
    //         min-height: 63.66vw;
    //     }
    //     @media (min-width: 1280px) {
    //         max-height: 100vh;
    //         min-height: 100vh;
    //     }
    // }
    & img {
        height: 100vh;
        width: 100vw;
    }
    & .slick-slider {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
    }

    & .button {
        margin-top: 26px;
        width: 186px;
    }

    & p,
    & span,
    & h1,
    & h2,
    & h3,
    & h4 {
        font-weight: 300;
        font-size: 38px;
        color: var(--color-white);
        text-transform: uppercase;
        line-height: 53.35px;
        margin-left: -3px;
        letter-spacing: 1px;

        @media (min-width: 768px) {
            font-size: 80px;
            letter-spacing: initial;
            line-height: initial;
        }
    }

    & .slide-inner {
        position: relative;
    }

    & .slide-content {
        position: absolute;
        left: 55px;
        bottom: 108px;
        z-index: 1;

        @media (min-width: 754px) {
            left: 10.5vw;
            bottom: 111px;
            max-width: var(--desktop-width);
            width: 100%;
            margin: 0 auto;
            right: auto;
        }

        @media (min-width: 1280px) {
            bottom: 230px;
        }
    }

    & .slick-dots {
        right: 51px;
        left: auto;
        top: 0;
        width: 10px;
        height: calc(100% - 67px);
        display: flex !important;
        flex-direction: column;
        justify-content: center;
        gap: 7px;

        @media (min-width: 754px) {
            gap: 15px;
            right: 151px;
            height: calc(100% - 115px);
        }
    }

    & .slick-dots li {
        height: 6px;
        margin: 0;

        &.slick-active button::before {
            background: var(--color-main);
            border-color: var(--color-main);
        }
    }

    & .slick-dots li button::before {
        content: '';
        height: 4px;
        width: 4px;
        border: 1px solid var(--color-grey);
        border-radius: 50%;
        opacity: 1;

        @media (min-width: 754px) {
            height: 7px;
            width: 7px;
        }
    }
`;

export default SliderWrapper