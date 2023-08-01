import { styled } from "styled-components";

export const Wrapper = styled.div`
    @media (min-width: 754px) {
        padding: 0 56px;
        margin-bottom: 56px;

        & h2 {
            text-align: center;
        }
    }

    @media (min-width: 1280px) {
        margin: 0 auto 104px;
        max-width: var(--desktop-width);
        padding: 0;

        & h2 {
            text-align: start;
        }
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    margin: 32px 55px 48px;

    @media (min-width: 754px) {
        align-items: center;
    }

    @media (min-width: 1280px) {
        flex-direction: row;
        column-gap: 56px;
        margin: 32px 0 100px;
    }

    & li {
        border-radius: 10px;
        border: 1px solid var(--color-black);
        padding: 45px 0 35px;
        display: grid;
        justify-content: center;
        text-align: center;
        font-family: CG, sans-serif;
        line-height: 23px;

        @media (min-width: 754px) {
            width: 380px;
            padding: 45px 0 59px;
        }
    }

    & .title,
    .price {
        font-size: 36px;
        font-weight: 300;
        letter-spacing: 1.8px;
        font-family: Oswald, sans-serif;
        line-height: normal;
        margin-bottom: 15px;
    }

    & .price {
        margin-top: 12px;
    }

    & .button {
        min-width: 235px;
        text-transform: none;
        margin-top: 24px;
        cursor: pointer;

        @media (min-width: 754px) {
            margin-top: 0;
        }
    }
`