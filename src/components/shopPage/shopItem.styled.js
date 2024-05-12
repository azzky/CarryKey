import { styled } from "styled-components";

const Item = styled.li`
    margin-bottom: 40px;
    position: relative;

    &>a {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
    }

    @media (min-width: 754px) {
        margin-bottom: 0;
    }
    
    & .imageWrapper {
        width: 100%;

        &.square img {
            aspect-ratio: 1 / 1;
        }

        &:not(.square) img {
            @media (min-width: 754px) {
                aspect-ratio: 6 / 9;
            }
        }

        img {
            object-fit: cover;
            object-position: center 12%;
            height: auto;
        }
    }

    & .title {
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 1.2px;
        padding: 4px 0;
    }

    & .details {
        display: flex;
        border-top: 1px solid var(--color-main);
        height: 35px;
        align-items: center;
        justify-content: end;
        font-family: CG, sans-serif;

        &>* {
            border-left: 1px solid var(--color-main);
            padding: 0 12px;
        }

        &>*:first-child {
            border: 0;
        }

        .bestseller {
            margin-right: auto;
            text-transform: uppercase;
            padding-left: 0;
            font-size: 16px;
            font-weight: 400;
        }

        .price {
            font-weight: 700;
        }

        svg {
            width: 26px;
            padding-right: 0;
            box-sizing: content-box;
        }
    }
`;

export { Item}