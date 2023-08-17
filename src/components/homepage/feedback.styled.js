import { styled } from "styled-components";

const Wrapper = styled.div`
    margin-bottom: 81px;

    @media (min-width: 754px) {
        margin-bottom: 91px;
    }

    @media (min-width: 1280px) {
        margin-bottom: 151px;
    }

    & h2 {
        padding: 0 var(--mobile-offset);
        margin-bottom: 32px;

        @media (min-width: 754px) {
            padding: 0 var(--tablet-offset);
        }

        @media (min-width: 1280px) {
            padding: 0;
            max-width: var(--desktop-width);
            margin: 0 auto;
        }
    }

    & .starRating {
        display: none;
        color: var(--color-main);

        @media (min-width: 1280px) {
            display: block;
            max-width: var(--desktop-width);
            margin: 75px auto 36px;
        }

        .average {
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 13px;
            font-size: 22px;

            .value {
                width: 87px;
                height: 46px;
                border-radius: 7px;
                background: var(--color-main);
                color: var(--color-white);
                font-family: CG, sans-serif;
                font-size: 24px;
                font-weight: 400;
                text-align: center;
                line-height: 46px;
            }

            .progress {
                position: relative;

                .full {
                    position: absolute;
                    overflow: hidden;
                    ${({$width})=> $width && `
                    width: ${$width}%;
                    `}
                }
            }
        }

        & > div {
            display: flex;
            column-gap: 57px;
            justify-content: space-between;
        }

        & .items {
            display: grid;
            gap: 7px;
        }

        
    }

    & .slick-list {
        width: 148.71vw;
        margin-left: -31px;

        @media (min-width: 754px) {
            width: 156.5vw;
            margin: 0 calc(-28.25vw - 30px);
        }
        @media (min-width: 1280px) {
            width: 123.61vw;
            margin: 0 -12vw;
        }
    }

    & .slick-slide {
        width: 280px !important;
        margin: 0 10px;
        color: var(--color-grey);

        img {
            width: 280px !important;
        }

        .item {
            border: 1px solid #ededed;
            border-radius: 10px;
            height: 337px;
        }

        .content {
            padding: 12px 9px;
        }

        .nickname {
            font-family: CG, sans-serif;
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 33px;
        }

        .rating {
            color: var(--color-main);
            font-size: 17px;
        }

        .text {
            font-size: 14px;
            font-weight: 300;
            letter-spacing: 0.7px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;

            @supports (-webkit-line-clamp: 2) {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: initial;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
    }
    & .slick-track {
        max-height: 337px;
        overflow: hidden;
    }

    & .slick-dots {
        display: flex !important;
        column-gap: 10px;
        justify-content: center;
        align-items: center;
        height: 27px;
        bottom: -43px;
        width: 100vw;
        left: 31px;

        @media (min-width: 754px) {
            bottom: -50px;
            left: 50%;
            translate: -50% 0;
        }

        @media (min-width: 1280px) {
            height: 35px;
            width: auto;
            bottom: -60px;
        }

        li {
            height: 9px;
            width: 9px;
            border-radius: 50%;
            border: 1px solid var(--color-grey);
            position: relative;
            margin: 0;

            &.slick-active {
                border: 0;
                background: var(--color-main);
            }
        }

        button {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            color: transparent;

            &::before {
                content: none;
            }
        }
    }
`

export const RatingItem = styled.div`
    display: grid;
    grid-template-columns: auto 728px auto;
    align-items: center;

    & .progressbar {
        height: 9px;
        border-radius: 4.5px;
        background: var(--color-grey-light);
        position: relative;
        ${({$value})=> $value && `       
        &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: ${100 - $value}%;
            background: var(--color-main);
            border-radius: 4.5px;
        }
        `}
    }

    & .value {
        font-size: 23px;
        margin-right: 23px;
        line-height: 18px;
    }

    & .count {
        min-width: 21px;
        margin-left: 10px;
        font-size: 14px;
        font-weight: 300;
        letter-spacing: 0.7px; 
    }
`

export default Wrapper;