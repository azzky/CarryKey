import { styled } from "styled-components";

const GridWrapper = styled.div`
    margin: 0 auto;
    padding: 0 var(--mobile-offset) 104px;

    @media (min-width: 754px) {
        padding: 0 var(--tablet-offset) 104px;
        display: grid;
        gap: 10px 20px;
        grid-template-columns: 180px 1fr;
        grid-template-areas:
            'tags tags'
            'filters grid';
        max-width: 100%;
    }

    @media (min-width: 1280px) {
        max-width: var(--desktop-width);
        gap: 10px 48px;
        grid-template-columns: 231px 1fr;
        padding: 0 0 104px;
    }

    & .top {
        grid-area: tags;
        display: flex;
        justify-content: space-between;
        height: 78px;
        align-items: center;
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
        @media (min-width: 754px) {
            grid-area: grid;
            grid-template-columns: repeat(2, 1fr);
            display: grid;
            gap: 40px 20px;
        }

        @media (min-width: 1280px) {
            grid-template-columns: repeat(3, 1fr);
        }
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
`;

const MobileFiltersWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 52px;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.6px;

    & .sorting {
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 8px;

        p {
            white-space: nowrap;
            padding-left: 4px;
        }
    }

    & .react-select__menu {
        z-index: 2;
        color: var(--color-grey);
        text-align: end;
        background: var(--color-white);
        padding: 5px;
        font-size: 16px;
        white-space: nowrap;
        width: auto;
    }

    & .react-select__control {
        color: var(--color-cta);
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 0.6px;
    }

    & .react-select__indicators {
        display: none;
    }

    & .react-select__single-value {
        overflow: hidden;
        max-width: 58px;
    }

    & .react-select-container {
        padding-right: 10px;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 8px 4px 0 4px;
            border-color: var(--color-main) transparent transparent transparent;
            top: 15px;
            right: 0;
        }
    }

    & .filters {
        display: flex;
        column-gap: 8px;
        padding-left: 16px;
        height: 20px;
        border-left: 1px solid var(--color-cta);
    }

    & .results {
        min-width: 65px;
        height: 20px;
        line-height: 20px;
        border-right: 1px solid var(--color-cta);
    }
`

export const MobileFiltersContent = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    right: ${({$isOpen}) => $isOpen ? '0' : '100%'};
    top: 0;
    transition: height .4s linear;
    background: var(--color-secondary);
    overflow: hidden;

    & .content {
        padding: 0 39px 39px;
    }

    & .bottom {
        padding: 13px;
        display: flex;
        justify-content: end;
        background: var(--color-main);

        button {
            background: var(--color-cta);
        }
    }
`

export {GridWrapper, MobileFiltersWrapper}