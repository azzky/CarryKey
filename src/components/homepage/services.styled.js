import { styled } from "styled-components";

const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    margin: 32px 55px 48px;

    @media (min-width: 754px) {
        align-items: center;
    }

    & li {
        border-radius: 10px;
        border: 1px solid var(--color-black);
        padding: 57px 0 61px;
        display: grid;
        justify-content: center;
        text-align: center;

        @media (min-width: 754px) {
            width: 380px;
        }
    }

    & .title,
    .price {
        font-size: 36px;
        font-weight: 300;
    }

    & .price {}

    & .button {
        min-width: 235px;
    }
`;

export {Wrapper}