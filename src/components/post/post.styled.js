import { styled } from "styled-components";

const Wrapper = styled.div`
    padding: 16px 55px;

    @media (min-width: 1280px) {
        display: flex;
        column-gap: 24px;
        max-width: var(--desktop-width);
        margin: 0 auto;
        padding-top: 24px;
    }

    & h1 {
        display: none;

        @media (min-width: 754px) {
            display: block;
            font-size: 44px;
            font-weight: 400;
            border-bottom: 1px solid var(--color-cta);
            line-height: 75px;
        }

        @media (min-width: 1280px) {
            margin-top: 64px;
        }
    }

    & .option-title {
        display: none;

        @media (min-width: 754px) {
            display: block;
            letter-spacing: 0.8px;
            line-height: 44px;
            margin-bottom: 7px;
        }
    }

    & .slick-slider {
        @media (min-width: 754px) {
            min-width: 131.56vw;
            margin-left: -13.13vw;
        }
    }

    & .slide-pic {
        width: 280px !important;
        height: 280px;
        object-fit: cover;

        @media (min-width: 754px) {
            width: 320px !important;
            height: 320px;
        }

        @media (min-width: 1280px) {
            width: 238px !important;
            height: 238px;
        }
    }

    & .slick-dots {
        display: flex !important;
        column-gap: 4px;
        justify-content: center;
        align-items: center;
        height: 27px;
        margin-bottom: 6px;

        @media (min-width: 754px) {
            column-gap: 6px;
            height: 35px;
            translate: -9.95vw 0;
            margin-bottom: -12px;
        }

        li {
            height: 7px;
            width: 7px;
            border-radius: 50%;
            border: 1px solid var(--color-grey);
            position: relative;

            @media (min-width: 754px) {
                height: 8px;
                width: 8px;
            }

            &.slick-active {
                border: 0;
                background: var(--color-main);
            }
        }

        button {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            color: transparent;
        }
    }

    & .slick-arrow {
        position: absolute;
        top: 50%;
        z-index: 1;
    }

    & .slick-prev {
        left: 0;
    }
    & .slick-next {
        right: 0;
    }

    & .priceType {
        display: grid;
        gap: 16px;
        margin-bottom: 32px;

        @media (min-width: 754px) {
            margin-bottom: 26px;
        }

        .details {
            display: none;

            @media (min-width: 754px) {
                display: block;
                font-size: 12px;
                margin-right: 18px;
                letter-spacing: 0.6px;
                font-weight: 300;
                color: var(--color-cta);
                text-align: center;
            }
        }

        .item {
            display: flex;
            height: 42px;
            justify-content: space-between;
            align-items: center;
        }

        .button {
            border-radius: 2px;
            min-height: 100%;
            text-transform: none;
            justify-content: start;
            max-width: 181px;
            padding: 0 14px;
            font-size: 16px;
            font-family: CG, sans-serif;
            letter-spacing: 0;

            &:disabled {
                background: var(--color-secondary);
                color: var(--color-cta);
            }

            @media (min-width: 754px) {
                max-width: 160px;
            }
        }

        .price {
            padding-right: 28px;

            @media (min-width: 754px) {
                padding-right: 0;
            }
        }
    }

    & .add {
        min-width: 100%;
        background-color: var(--color-cta);

        @media (min-width: 754px) {
            min-width: 300px;
            margin: 0 auto;
        }
    }

    & .continue {
        text-align: center;
        letter-spacing: 0.7px;
        color: var(--color-cta);
        display: block;
        font-size: 14px;
        margin-top: 12px;
    }

    & .column {
        @media (min-width: 754px) {
            max-width: 380px;
            margin: 0 auto;
        }

        @media (min-width: 1280px) {
            min-width: 340px;
        }
    }

    & .images-grid {
        display: grid;
        gap: 24px;
        grid-template-columns: repeat(2, 1fr);
    }
`

export default Wrapper