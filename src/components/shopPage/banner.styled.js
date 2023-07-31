import { styled } from "styled-components";

const BannerWrapper = styled.li`
    grid-column-end: span 2;
    margin-bottom: 30px;

    & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;

export default BannerWrapper