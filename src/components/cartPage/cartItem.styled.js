import { styled } from "styled-components";

const Item = styled.li`
    display: grid;
    grid-template-columns: 20.25vw 1fr;
    column-gap: 14px;
    padding-top: 9px;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.6px;
    color: var(--color-grey);
    margin-bottom: 24px;

    @media (min-width: 600px) {
        grid-template-columns: 140px 1fr;
        column-gap: 22px;
        margin-bottom: 16px;
    }

    & img {
        width: 100%;
        height: auto;
        aspect-ratio: 1 / 1;
        border-radius: 5px;
        object-fit: cover;
        object-position: center 12%;
    }

    & button,
    & a {
        background: none;
        border: 0;
        color: inherit;
        text-decoration: underline;
        cursor: pointer;
        font-weight: 400;

        span {
            margin-left: 4px;
        }
    }

    & .actions {
        display: flex;
        justify-content: space-between;

        @media (min-width: 600px) {
            justify-content: end;

            a {
                margin-right: 30px;
            }
        }
    }

    & .title {
        font-size: 16px;
        color: var(--color-black);
        font-weight: 400;
        letter-spacing: 0.8px;

        @media (min-width: 600px) {
            font-size: 24px;
            letter-spacing: 1.2px;
            margin-top: 9px;
            margin-bottom: 2px;
        }

        @media (min-width: 1280px) {
            font-size: 36px;
            margin-top: 0;
        }
    }

    & img {
        margin-top: 6px;
    }

    & .priceType {
        margin-top: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        @media (min-width: 600px) {
            margin: 0;
        }

        .title {
            min-width: 100px;
            width: auto;
            height: 33px;
            background: var(--color-secondary);
            color: var(--color-cta);
            font-size: 14px;
            font-family: CG, sans-serif;
            padding: 0 14px;
            letter-spacing: 0;
            line-height: 33px;

            @media (min-width: 600px) {
                min-width: 140px;
                height: 36px;
                line-height: 36px;
            }

            @media (min-width: 1280px) {
                font-size: 16px;
                min-width: 161px;
                height: 42px;
                line-height: 42px;
            }
        }

        .price {
            font-weight: 400;
            color: var(--color-black);
        }
    }

    & .details {
        max-width: 138px;

        @media (min-width: 600px) {
            max-width: unset;
        }
    }

    & .info {
        @media (min-width: 600px) {
            display: grid;
            align-items: start;
            grid-template-columns: 125px auto;
            gap: 15px;
            margin-bottom: 32px;
        }

        @media (min-width: 1280px) {
            gap: 113px;
            margin-bottom: 29px;
        }
    }

    & .options {
        @media (min-width: 600px) {
            margin-top: 10px;
        }

        @media (min-width: 1280px) {
            margin-top: -4px;
            font-size: 14px;
            letter-spacing: 0.7px;
        }
    }
`

export default Item