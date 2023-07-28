import { styled } from "styled-components";

const Wrapper = styled.div`
    & h2 {
        font-size: 44px;
        font-weight: 400;
    }

    & .heading {
        max-width: var(--desktop-width);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: end;
        text-transform: uppercase;
        margin-bottom: 56px;
        
        a {
            font-size: 16px;
            display: flex;
            column-gap: 9px;
            align-items: center;
        }
    }

    & .button {
        position: absolute;
        bottom: 15px;
        left: 28px;
    }

    & .slick-slider {
        margin: 20px 0;
    }

    & .slick-slide {
        margin: 0 10px;
        width: 242px !important;
    }

    & .item {
        position: relative;
        border-radius: 10px;
        overflow: hidden;
    }

    & img {
        object-fit: cover;
        display: block;
        width: 242px;
        height: 363px;
    }
`
export default Wrapper