import { styled } from "styled-components";

const Wrapper = styled.div`
    ${({$columnNumber}) => $columnNumber > 1 && `
    display: grid;
    grid-template-columns: repeat(${$columnNumber}, 1fr);
    gap: 8px;
    justify-content: center;
    padding: 8px var(--mobile-offset) 0;

    @media (min-width: 754px) {
        grid-template-columns: repeat(${$columnNumber}, 280px);
        gap: 20px;
        padding: 20px 86px 0;
    }
    
    @media (min-width: 1280px) {
        margin: 20px auto 0;
        padding: 0;
    }
    `}

    & .item {
        margin-bottom: 8px;
        cursor: zoom-in;
        
        @media (min-width: 754px) {
            margin-bottom: 20px;
        }

        &:hover {
            box-shadow: 10px 8px 16px 0px rgba(0, 0, 0, 0.25);
        }
    }
`

export default Wrapper