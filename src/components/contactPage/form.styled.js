import { styled } from "styled-components";

const FormWrapper = styled.form`
    display: grid;
    max-width: 460px;
    grid-template-rows: repeat(5, max-content);
    gap: 20px;
    margin: 40px auto;

    @media (max-width: 768px) {
        padding-left: 20px;
        padding-right: 20px;
    }

    & input {
        display: block;
        height: 40px;
        padding: 0 10px;
    }

    & textarea {
        padding: 10px;
    }

    & button {
        background-color: var(--color-cta);
        color: var(--color-white);
        text-transform: uppercase;
        cursor: pointer;
        height: 40px;
    }

    @media (min-width: 1280px) {
        margin: 0;
    }
`

export { FormWrapper }