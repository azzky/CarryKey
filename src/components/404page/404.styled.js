import styled from "styled-components";

const Content = styled.div`
    display: grid;
    align-items: center;
    margin-bottom: 20vw;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 50%);
        max-width: 1024px;
        margin: 0 auto 5vw;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        grid-row: 2;

        @media (min-width: 768px) {
            grid-row: 1;
        }
    }

    .text {
        font-family: CG;
        text-align: center;
        margin-top: 10vw;

        @media (min-width: 768px) {
            padding-bottom: 23vw;
            padding-left: 5vw;
            text-align: start;
            margin-top: 0;
        }

        h1 {
            text-transform: uppercase;
        }

        p,a {
            font-size: 20px;
        }

        a {
            text-decoration: underline;
        }
    }
`

export default Content