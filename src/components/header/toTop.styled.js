import { styled } from "styled-components";

const ToTopWrapper = styled.div`
    position: fixed;
    right: 45px;
    bottom: 0;
    z-index: 9;
    opacity: ${props=>props.$isVisible ? '1' : '0'};
    transition: opacity 0.3s ease-in-out;

    & svg {
        width: 40px;
        height: 40px;
        box-shadow: 5px 4px 8px 0px rgba(0, 0, 0, 0.25);
        border-radius: 50%;
        cursor: pointer;
    }
`;

export default ToTopWrapper;