import { styled } from "styled-components";

const SearchWrapper = styled.form`
    position: relative;

    & input {
        height: 30px;
        border-radius: 15px;
        border: 0;
        min-width: 280px;
        padding: 0 18px;

        @media (min-width: 754px) {
            height: 48px;
            border-radius: 24px;
            min-width: 448px;
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