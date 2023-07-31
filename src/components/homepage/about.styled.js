import { styled } from "styled-components";

const AboutWrapper = styled.div`
    text-align: center;
    font-size: 1rem;
    max-width: 280px;
    margin: 0 auto;
    padding-top: 49px;

    @media (min-width: 754px) {
        padding-top: 57px;
        display: grid;
        max-width: 577px;
        padding-right: 40px;
    }

    @media (min-width: 1280px) {
        max-width: var(--desktop-width);
        padding-top: 105px;
        grid-template-columns: repeat(2, 1fr);
        padding-right: 0;
        column-gap: 50px;
        grid-template-rows: 109px 347px auto;

        &>div:last-child {
            grid-row: 1 / span 3;
            grid-column: 2;
        }
    }

    & h2 {
        margin-bottom: 5px;

        @media (min-width: 1280px) {
            text-align: start;
            grid-row: 1;
            margin: 0;
        }
    }

    & .numbers {
        display: grid;
        gap: 20px;
        margin-bottom: 16px;
        font-family: CG, sans-serif;

        @media (min-width: 754px) {
            grid-template-columns: repeat(3, 1fr);
            width: calc(100% + 90px);
            margin-left: -35px;
            margin-top: 21px;
            margin-bottom: -42px;
        }

        @media (min-width: 1280px) {
            grid-column: 1;
            grid-row: 3;
            margin: 0;
        }

        span {
            display: block;
        }
    }

    & .about {
        font-size: 14px;
        margin-bottom: 15px;
        font-family: CG, sans-serif;

        @media (min-width: 754px) {
            grid-row: 2;
            text-align: start;
            font-size: 16px;
            line-height: 20px;
            margin-top: 27px;
        }

        @media (min-width: 1280px) {
            grid-row: 2;
            margin: 0;
        }

        p {
            margin-bottom: 5px;

            @media (min-width: 754px) {
                margin-bottom: 22px;
            }
        }
    }

    & .number {
        font-size: 24px;

        @media (min-width: 754px) {
            font-size: 36px;
        }
    }

    & .socialMedia {
        margin-bottom: 10px;
        display: block;

        @media (min-width: 754px) {
            display: none;
        }

        &.tablet,
        &.tablet+p {
            display: none;

            @media (min-width: 754px) {
                display: block;
            }
        }

        a {
            text-decoration: underline;
            color: var(--color-cta);
            font-size: 16px;
        }
    }
`

export {AboutWrapper}