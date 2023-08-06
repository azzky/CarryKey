import { styled } from "styled-components";

const Wrapper = styled.div`
    grid-area: tags;
    display: flex;
    flex-direction: column-reverse;
    align-items: end;
    padding: 7px var(--mobile-offset) 32px;
    row-gap: 24px;
    width: 100%;

    @media (min-width: 754px) {
        flex-direction: row;
        justify-content: space-between;
        height: 78px;
        align-items: center;
        padding: 0 --tablet-offset;
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

    & .sorting {
        .react-select__control {
            border: 1px solid #CECDCF;
            height: 32px;
            border-radius: 16px;
            width: 121px;
            padding: 0 14px;
            letter-spacing: 0.7px;
            font-size: 14px;
            font-weight: 300;
        }

        .react-select__indicators {
            display: none;
        }

        .react-select__single-value {
            &::after {
                content: '';
                position: absolute;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 8px 4px 0 4px;
                border-color: var(--color-main) transparent transparent transparent;
                top: 8px;
                right: 0;
            }
        }

        .react-select__menu {
            z-index: 2;
        }
    }
`

export default Wrapper