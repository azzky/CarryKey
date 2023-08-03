import { styled } from "styled-components";

const SearchWrapper = styled.form`
    position: relative;
    width: 100%;

    @media (min-width: 754px) {
        max-width: 448px;
    }

    & input {
        height: 30px;
        border-radius: 15px;
        border: 0;
        padding: 0 18px;
        width: 100%;

        @media (min-width: 754px) {
            height: 48px;
            border-radius: 24px;
            padding: 0 28px;
        }

        &::placeholder {
            font-size: 12px;
        }
    }

    & button {
        border: 0;
        background: none;
        position: absolute;
        top: 7px;
        right: 8px;

        @media (min-width: 754px) {
            top: 12px;
            right: 12px;
        }

        svg {
            width: 15px;
            height: 15px;
            @media (min-width: 754px) {

            }
        }
    }
`

export default SearchWrapper