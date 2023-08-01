import { styled } from "styled-components";

const Wrapper = styled.div`
    padding: 0 55px;

    @media (min-width: 754px) {
        padding: 10px 86px;
    }

    @media (min-width: 1280px) {
        padding: 7px 78px;
        max-width: var(--desktop-width);
        margin: 0 auto;
        display: grid;
        gap: 35px;
        grid-template-columns: 1fr 280px;
    }

    & h1 {
        font-size: 18px;
        letter-spacing: 0.9px;
        font-weight: 400;
        text-align: center;
        border-bottom: 1px solid var(--color-cta);
        line-height: 60px;

        @media (min-width: 754px) {
            font-size: 24px;
            text-align: start;
            letter-spacing: 1.2px;
        }

        span {
            text-transform: uppercase;
        }
    }
`;

export const Items = styled.div`
    padding: 0 7px;

    @media (min-width: 754px) {
        padding: 0 0 15px;
    }
`

export const Summary = styled.div`
    background-color: var(--color-secondary);
    border-radius: 10px;
    padding: 10px 19px 31px;
    color: var(--color-cta);
    font-weight: 300;
    font-size: 14px;
    letter-spacing: 0.7px;

    @media (min-width: 754px) {
        margin: 0 auto;
        max-width: 420px;
        padding: 25px 33px 31px;
    }

    @media (min-width: 1280px) {
        padding: 10px 19px 32px;
        width: 100%;
        margin-top: 23px;
        height: fit-content;
    }

    & h2 {
        color: inherit;
        font-size: 16px;
        font-weight: 400;
        text-align: start;
        letter-spacing: 0.8px;
        line-height: 45px;
    }

    & p {
        line-height: 50px;
        border-top: 1px solid;
        display: flex;
        justify-content: space-between;
    }

    & .button {
        text-transform: none;
        background: var(--color-cta);
        font-size: 14px;
        min-width: 243px;
        letter-spacing: 0.7px;
        margin-top: 29px;
        margin-bottom: 12px;

        @media (min-width: 754px) {
            margin: 14px auto 12px;
        }

        @media (min-width: 1280px) {
            margin: 28px auto 12px;
        }
    }

    & .continue {
        font-weight: 400;
        display: block;
        text-align: center;
    }
`

export default Wrapper