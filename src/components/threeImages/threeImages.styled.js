import { styled } from "styled-components";

const ImagesBlock = styled.div`
    position: relative;
    max-width: 245px;
    margin: 0 auto;
    padding-bottom: 106px;
    
    @media (min-width: 754px) {
        max-width: 5px;
        margin-top: 9px;
    }

    @media (min-width: 754px) {
        margin-top: 74px;
        max-width: 10px;
    }

    & img {
        object-fit: cover;

        &:nth-child(1) {
            @media (min-width: 754px) {
                border: 8px solid var(--color-white);
                box-sizing: content-box;
            }
        }

        &:nth-child(2) {
            object-position: top;
            position: absolute;
            left: 1.5rem;
            top: 11.25rem;

            @media (min-width: 754px) {
                rotate: 8deg;
                left: -197px;
                top: 28px;
                z-index: -1;
            }

            @media (min-width: 1280px) {
                left: -227px;
                top: -26px;
            }
        }

        &:nth-child(3) {
            position: absolute;
            left: 8.44rem;
            top: 13.06rem;

            @media (min-width: 754px) {
                display: none;
            }
        }
    }
`;

export default ImagesBlock