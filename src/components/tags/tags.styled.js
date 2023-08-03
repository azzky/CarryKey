import { styled } from "styled-components";

const Wrapper = styled.div`
    grid-area: tags;
    display: flex;
    flex-direction: column-reverse;
    align-items: end;
    padding: 7px 55px 32px;
    row-gap: 24px;
    width: 100%;

    @media (min-width: 754px) {
        flex-direction: row;
        justify-content: space-between;
        height: 78px;
        align-items: center;
        padding: 0 86px;
    }

    @media (min-width: 1280px) {
        max-width: var(--desktop-width);
        margin: 0 auto;
        padding: 0;
    }

    & .tags {
        display: flex;
        column-gap: 8px;
        row-gap: 8px;
        flex-wrap: wrap;
        justify-content: center;

        @media (min-width: 754px) {
            justify-content: start;
        }

        a {
            display: block;
            height: 25px;
            border-radius: 5px;
            border: 1px solid #CECDCF;
            letter-spacing: 0.7px;
            font-weight: 300;
            padding: 0 10px;
            text-transform: lowercase;
            color: var(--color-black);
            line-height: 20px;
            cursor: pointer;
        }
    }
`

export default Wrapper