import { Link } from "gatsby";
import { styled } from "styled-components";

const Item = styled(Link)`
    margin-bottom: 40px;

    @media (min-width: 754px) {
        margin-bottom: 0;
    }

    &:hover {
        cursor: pointer;
    }
    
    & .imageWrapper {
        width: 100%;

        img {
            object-fit: cover;
            object-position: center 12%;
            aspect-ratio: 1 / 1;
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