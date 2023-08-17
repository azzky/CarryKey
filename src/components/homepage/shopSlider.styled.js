import { styled } from "styled-components";

const Wrapper = styled.div`
    margin-bottom: 32px;

    ${({$isCart}) => $isCart && `
        @media (min-width: 1280px) {
            margin-bottom: 80px;
        }
    `}

    & .heading {
        max-width: calc(100vw - (var(--mobile-offset) * 2));
        margin: -13px auto 29px;
        text-transform: uppercase;

        @media (min-width: 754px) {
            display: flex;
            justify-content: space-between;
            align-items: end;
            margin: 0 auto 56px;
            max-width: var(--desktop-width);
            margin: -13px auto 29px;
        }
        
        a {
            font-size: 14px;
            display: flex;
            column-gap: 9px;
            align-items: center;
            justify-content: end;

            @media (min-width: 754px) {
                font-size: 16px;
            }
        }

        ${({$isCart}) => $isCart && `
            @media (min-width: 754px) {
                max-width: calc(100vw - var(--tablet-offset) * 2);
                margin: -13px auto 29px;
            }

            @media (min-width: 1280px) {
                max-width: var(--desktop-width);
                margin-bottom: 48px;
            }
            
            h2 {
                font-size: 18px;
                text-transform: none;
                text-align: start;
                letter-spacing: 0.9px;
                margin-bottom: 21px;

                @media (min-width: 754px) {
                    font-size: 24px;
                    text-align: center;
                    margin-bottom: 0;
                    
                }

                @media (min-width: 1280px) {
                    font-size: 36px;
                }
            }

            a {
                font-size: 12px;
                letter-spacing: 0.6px;

                @media (min-width: 1280px) {
                    font-size: 16px;
                    letter-spacing: 0.8px;
                }
            }
        `}
    }

    & .button {
        position: absolute;
        bottom: 15px;
        left: 18px;
        font-size: 12px;
        border-radius: 12px;
        height: 24px;
        width: 117px;

        @media (min-width: 754px) {
            left: 28px;
            font-size: 14px;
            height: 38px;
            border-radius: 19px;
            width: 186px;
        }
    }

    & .slick-slide {
        margin: 0 8px;
        width: 152px !important;
        padding-bottom: 11px;

        @media (min-width: 754px) {
            margin: 0 10px;
            width: 242px !important;
            padding-bottom: 20px;
        }
    }

    & .item {
        position: relative;
        border-radius: 10px;
        overflow: hidden;

        &:hover {
            box-shadow: 10px 8px 16px 0px rgba(0, 0, 0, 0.25); 
        }
    }

    & img {
        object-fit: cover;
        display: block;
        width: 152px;
        height: 228px;

        @media (min-width: 754px) {
            width: 242px;
            height: 363px;
        }
    }
`
export default Wrapper