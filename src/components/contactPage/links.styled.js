import { styled } from "styled-components"

const Wrapper = styled.div`
    padding: 24px 54px;
    display: grid;
    gap: 32px;

    @media (min-width: 754px) {
        padding: 24px 11.5vw;
        gap: 21px;
    }

    @media (min-width: 1280px) {
        padding: 0;
        gap: 32px;
    }
    
    & p {
        font-size: 24px;
        letter-spacing: 1.2px;
        text-transform: uppercase;
    }

    & a {
        color: var(--color-cta);
        font-size: 1rem;
        text-decoration: underline;
    }
`

export default Wrapper