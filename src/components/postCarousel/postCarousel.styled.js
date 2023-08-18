import { styled } from "styled-components";

const Wrapper = styled.div`
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

    & .slide {
        margin: 0 8px;
        width: 152px !important;
        padding-bottom: 11px;

        @media (min-width: 754px) {
            margin: 0 10px;
            width: 242px !important;
            padding-bottom: 20px;
        }
    }

    & .slider-frame {
        width: 130.13vw !important;
        margin: 0 -5vw;

        @media (min-width: 754px) {
            width: 139vw !important;
            margin: 0 -5vw;
        }
        @media (min-width: 1280px) {
            width: 110vw !important;
            margin: 0 -5vw;
        }

        &.row1 {
            margin-left: -12.6vw;

            @media (min-width: 754px) {
                margin-left: -10.6vw;
            }
            @media (min-width: 1280px) {
                margin-left: -0.6vw;
            }
        }

        &.row2 {
            margin-left: -23vw;

            @media (min-width: 754px) {
                margin-left: -21.6vw;
            }
            @media (min-width: 1280px) {
                margin-left: -7vw;
            }
        }
    }

    & .slider-list {
        margin-bottom: 16px;

        @media (min-width: 754px) {
            margin-bottom: 20px;
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