import { styled } from "styled-components";

const SearchWrapper = styled.form`
    position: relative;

    & input {
        height: 48px;
        border-radius: 24px;
        border: 0;
        min-width: 448px;
        padding: 0 28px;
    }

    & button {
        border: 0;
        background: none;
        position: absolute;
        top: 12px;
        right: 12px;
    }
`

export default SearchWrapper