const { styled } = require("styled-components");

const FooterRoot = styled.footer`
    background-color: var(--color-secondary);
    color: var(--color-cta);
    justify-content: center;
    padding: 40px var(--mobile-offset) 0;

    @media (min-width: 754px) {
        padding: 18px --tablet-offset 0;
    }

    @media (min-width: 1280px) {
        padding: 47px var(--desktop-offset) 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0 45px;
    }

    & .hiddenDescription {
        font-size: 12px;
        font-weight: 400;
        font-family: CG, sans-serif;

        @media (min-width: 754px) {
            margin-top: 8px;
            line-height: 15px;
        }

        @media (min-width: 1280px) {
            margin-top: 20px;
            line-height: 20px;
            font-size: 16px;
            max-width: 330px;
        }
    }

    & .contact-link {
        text-decoration: underline;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        display: block;
        margin: 10px 0 27px;
        font-family: CG, sans-serif;

        @media (min-width: 754px) {
            margin-bottom: 15px;
        }

        @media (min-width: 1280px) {
            margin: 4px 0 21px;
        }
    }

    & .changingFont {
        @media (min-width: 754px) {
            font-family: CG, sans-serif;
            letter-spacing: 0 !important;
        }
    }

    & .form {
        @media (min-width: 754px) {
            text-align: right;
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: end;
        }

        @media (min-width: 1280px) {
            justify-content: center;
            align-items: start;
        }

        &>div {
            display: grid;
            row-gap: 11px;
            place-items: center;
            margin: 10px 0 30px;

            @media (min-width: 754px) {
                display: flex;
                margin: 24px 0 15px;
                column-gap: 5px;
            }
        }

        & h4 {
            font-weight: 400;
            font-size: 14px;
            letter-spacing: 0.048em;

            @media (min-width: 754px) {
                font-size: 20px;
                letter-spacing: 1px;
            }

            @media (min-width: 1280px) {
                font-size: 24px;
                letter-spacing: 1.2px;
                margin-bottom: 7px;
            }
        }

        & p {
            font-weight: 300;
            font-size: 12px;
            letter-spacing: 0.6px;

            @media (min-width: 754px) {
                letter-spacing: 1.6px;
            }

            @media (min-width: 1280px) {
                font-size: 16px;
                letter-spacing: 0;
            }
        }

        input,
        button {
            height: 40px;
            border-radius: 20px;
            width: 244px;
            text-transform: uppercase;
            border: 0;
            text-align: center;
            font-weight: 400;
            font-family: Oswald, sans-serif;


            @media (min-width: 754px) {
                height: 43px;
            }

            @media (min-width: 1280px) {
                height: 50px;
                border-radius: 25px;
            }
        }
        input {
            background: #D5CEE4;
            @media (min-width: 754px) {
                width: 301px;
                text-align: left;
                padding: 0 21px;
            }

            @media (min-width: 1280px) {
                width: 375px;
            }
        }

        input::placeholder {
            color: #ADA9B6;
            font-size: 12px;
            opacity: 1;

            @media (min-width: 1280px) {
                font-size: 14px;
            }
        }

        button {
            border: 0;
            background: var(--color-main);
            color: var(--color-white);
            font-size: 14px;

            @media (min-width: 754px) {
                width: 105px;
            }

            @media (min-width: 1280px) {
                width: 111px;
            }
        }
    }
`;

const Socials = styled.div`
    grid-area: socials;
    display: flex;
    justify-content: center;
    column-gap: 20px;

    @media (min-width: 1280px) {
        grid-column: 1 / span 2;
        margin: 25px 0;
    }
`;

const Bottom = styled.div`
    height: 80px;
    background-color: var(--color-main);
    grid-area: bottom;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 34px calc(var(--mobile-offset) * -1) 0;

    @media (min-width: 754px) {
        height: 63px;
        margin: 6px -86px 0;
    }

    @media (min-width: 1280px) {
        height: 80px;
        margin: 6px calc(var(--desktop-offset) * -1) 0;
        grid-column: 1 / span 2;
    }
`;

const UpperSection = styled.div`
    @media (min-width: 754px) {
        display: grid;
        grid-template-columns: 160px auto;
    }

    @media (min-width: 1280px) {
        grid-template-columns: auto;
    }
`;

const BottomSection = styled.div`
    @media (min-width: 754px) {
        display: flex;
        justify-content: center;
        gap: 102px;
    }

    @media (min-width: 1280px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        gap: 30px;
        padding: 0 85px;

        & .column {
            padding-left: 40px;
        }
    }
`

export {FooterRoot, Socials, Bottom, UpperSection, BottomSection}