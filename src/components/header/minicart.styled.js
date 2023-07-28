import { styled } from "styled-components";

const MiniCartWrapper = styled.div`
    position: relative;

    & p {
        position: absolute;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        font-size: 8px;
        background-color: var(--color-secondary);
        color: var(--color-cta);
        text-align: center;
        bottom: 0;
        right: -5px;
    }

    & svg {
        color: var(--color-white);
    }
`;

export default MiniCartWrapper;