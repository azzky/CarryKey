import { styled } from "styled-components";

const Nav = styled.div`
    display: flex;

    & h4 {
        font-weight: 400;
        font-size: 24px;
        text-transform: uppercase;

        @media (min-width: 754px) {
            letter-spacing: 1.2px;
            margin-bottom: 15px;
        }
    }

    & svg {
        margin-left: 14px;
        margin-top: 9px;

        @media (min-width: 754px) {
            display: none;
        }
    }

    & + ul {
        @media (min-width: 754px) {
            line-height: 29px;
            font-size: 14px;
            letter-spacing: 0.7px;
            font-weight: 300;
        }
    }
`;

export default Nav;