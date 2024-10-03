import { styled } from "styled-components";

const ToTopWrapper = styled.div`
    position: fixed;
    right: 45px;
    bottom: 0;
    z-index: 9;
    opacity: ${props=>props.$isVisible ? '1' : '0'};
    transition: opacity 0.3s ease-in-out;
    animation-name: bounce_small_infinite;
    transform-origin: center bottom;
    animation-duration: 4s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;

    & svg {
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
`;

export default ToTopWrapper;