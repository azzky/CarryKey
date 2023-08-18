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
            max-width: var(--desktop-width);
            margin: -63px auto 32px;
        }

        @media (min-width: 1280px) {
            margin: -13px auto 56px;
        }

        h2 {
            margin-bottom: 24px;

            @media (min-width: 754px) {
                margin-bottom: -9px;
            }
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
`
export default Wrapper