import { styled } from "styled-components";

const Wrapper = styled.div`
    padding: 0 var(--mobile-offset);

    @media (min-width: 754px) {
        padding: 10px var(--tablet-offset);
    }

    @media (min-width: 1280px) {
        padding: 7px 78px;
        max-width: var(--desktop-width);
        margin: 0 auto;
        display: grid;
        gap: 0 35px;
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
    --offset: 19px;
    background-color: var(--color-secondary);
    border-radius: 10px;
    padding: 10px var(--offset) 31px;
    color: var(--color-cta);
    font-weight: 300;
    font-size: 14px;
    letter-spacing: 0.7px;

    @media (min-width: 754px) {
        --offset: 33px;
        margin: 0 auto;
        max-width: 420px;
        padding: 25px var(--offset) 31px;
    }

    @media (min-width: 1280px) {
        --offset: 19px;
        padding: 10px var(--offset) 32px;
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
        border-top: 1px solid #BFBBC9;
        display: flex;
        justify-content: space-between;

        &:last-of-type {
            border-bottom: 1px solid #BFBBC9;
        }
    }

    & .paypal-buttons-context-iframe {
]       max-width: 243px;
        margin: 0 auto;
    }

    & .continue {
        font-weight: 400;
        display: block;
        text-align: center;
    }

    & .button {
        text-transform: none;
        background: var(--color-cta);
        font-size: 14px;
        max-width: 243px;
        width: 100%;
        letter-spacing: 0.7px;
        margin: 29px auto 12px;
        cursor: pointer;

        &:hover {
            background: var(--color-cta-hover);
        }

        @media (min-width: 754px) {
            margin: 14px auto 12px;
        }

        @media (min-width: 1280px) {
            margin: 28px auto 12px;
        }
    }

    & .paypal-buttons-context-iframe {
        margin-top: 13px;
    }

    input {
        background: none;
        border: none;
        width: 100%;
    }
`

export const WhatsNextWrapper = styled.div`
    color: var(--color-grey);
    font-family: CG, sans-serif;
    font-size: 12px;
    font-weight: 400;
    margin: 15px auto 20px;
    line-height: 18px;
    max-width: 420px;
    width: 100%;
    grid-column: 2;

    @media (min-width: 754px) {
        padding: 0 35px;
    }

    @media (min-width: 1280px) {
        padding: 0;
    }

    & .item {
        display: grid;
        grid-template-columns: 24px auto;
        gap: 10px;
        align-items: center;
        margin-bottom: 2px;
        padding-left: 5px;
    }

    & .heading {
        font-family: Oswald;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.7px;
    }

    & .payments {
        padding: 0 32px;
        display: flex;
        column-gap: 11px;
        margin: 24px 0 61px;

        @media (min-width: 754px) {
            padding: 0 39px;
            column-gap: 12px;
        }

        @media (min-width: 1280px) {
            margin: 24px 0 91px;
        }
    }
`

export const Success = styled.div`
    display: grid;
    place-items: center;
    min-height: 350px;
`

export const EmptyCart = styled.div`
    display: grid;
    place-items: center;
    min-height: 350px;
`

export default Wrapper