import { styled } from "styled-components";

const GridWrapper = styled.div`
    display: grid;
    grid-template-areas:
        'tags tags'
        'filters grid';
    max-width: var(--desktop-width);
    margin: 0 auto;
    grid-template-columns: 231px 1fr;
    gap: 10px 48px;
    padding-bottom: 104px;

    & .top {
        grid-area: tags;
        display: flex;
        justify-content: space-between;
        height: 78px;
        align-items: center;
    }

    & .tags {
        display: flex;
        column-gap: 8px;

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

    & .filters {
        grid-area: filters;

        h3 {
            letter-spacing: 0.2px;
            font-size: 24px;
            text-transform: uppercase;
            border-bottom: 1px solid var(--color-cta);
            line-height: 17px;
            padding-bottom: 26px;
        }
    }

    & .applied {
        padding-top: 21px;
        position: relative;
        border-bottom: 1px solid var(--color-cta);
        padding-bottom: 15px;

        &-title {
            text-transform: uppercase;
        }

        .items {
            display: flex;
            flex-wrap: wrap;
            column-gap: 10px;
            padding: 6px 0;
            row-gap: 10px;
        }

        .item {
            background: var(--color-secondary);
            color: var(--color-white);
            position: relative;
            cursor: pointer;
            border: 0;
            height: 35px;
            padding-left: 7px;
            padding-right: 32px;

            p {
                color: inherit;
            }
        }

        svg {
            color: var(--color-cta);
            position: absolute;
            top: 10px;
            right: 10px;
        }
    }

    & .reset {
        text-decoration: underline;
        font-weight: 300;
        position: absolute;
        background: none;
        border: 0;
        right: 0;
        top: 27px;
        cursor: pointer;
    }

    & .grid {
        grid-area: grid;
        display: grid;
        gap: 40px 20px;
        grid-template-columns: repeat(3, 1fr);
    }

    & .filter-name {
        text-transform: uppercase;
        padding-top: 22px;
    }

    & .filter-items {
        display: grid;
        justify-content: start;
        text-align: start;
        gap: 20px;
        padding-top: 12px;
    }

    & .filter-item {
        position: relative;
        height: 23px;
        cursor: pointer;
        border: 0;
        background: none;
        text-align: start;

        &:disabled {
            color: inherit;
        }

        span {
            padding-left: 30px;
        }

        span::before {
            position: absolute;
            content: '';
            width: 18px;
            height: 18px;
            border: 2px solid #7A7372;
            left: 0;
            top: 0;
        }

        .selected::before {
            background-color: var(--color-cta);
        }
    }
`

export {GridWrapper}