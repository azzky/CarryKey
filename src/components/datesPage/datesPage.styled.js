import styled from "styled-components";

const Wrapper = styled.main`
    position: relative;

    & .hero {
        object-fit: cover;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    & .content {
        z-index: 1;
        position: relative;
        background: rgba(0,0,0,.4);
        padding: 12px 53px;
        display: grid;
        color: white;
        align-items: start;
        justify-items: center;
        gap: 0;
        grid-template-rows: repeat(6, max-content);
        min-height: 95vw;

        & > *:not(.logo) {
            max-width: 800px;
        }
    }

    & .avatar {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 2px solid var(--color-main);
    }

    & img.logo {
        max-width: 90px;
    }

    & a.logo {
        display: block;
        width: 100%;
    }

    & h1 {
        font-size: 20px;
        font-weight: 400;

        @media (min-width: 768px) {
            font-size: 28px;
        }
    }

    & .links {
        display: grid;
        gap: 14px;
        width: 100%;
        margin-top: 21px;
        margin-bottom: 24px;

        a {
            background: var(--color-main);
            display: block;
            position: relative;
            text-align: center;
            border-radius: 29px;
            line-height: 58px;
            border: 1px solid var(--color-main-hover);
        }

        .gatsby-image-wrapper {
            position: absolute;
            height: 48px;
            width: 48px;
            border-radius: 50%;
            top: 5px;
            left: 5px;
        }

        li:nth-child(2) {
            animation-name: bounce_small_infinite;
            transform-origin: center bottom;
            animation-duration: 4s;
            animation-fill-mode: both;
            animation-iteration-count: infinite;
        }

        @keyframes bounce_small_infinite {
            0%,
            10%,
            26.5%,
            40%,
            to {
                animation-timing-function:cubic-bezier(.215,.61,.355,1);
                transform:translateZ(0)
            }
            20%,
            21.5% {
                animation-timing-function:cubic-bezier(.755,.05,.855,.06);
                transform:translate3d(0,-10px,0)
            }
            35% {
                animation-timing-function:cubic-bezier(.755,.05,.855,.06);
                transform:translate3d(0,-10px,0)
            }
            42.5% {
                transform:translate3d(0,-2px,0)
            }
        }
    }

    & .grid {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr;
        gap: 15px;
        margin-bottom: 33px;
        margin-top: 33px;

        @media (min-width: 600px) {
            grid-template-columns: repeat(2, 1fr);
        }

        .gatsby-image-wrapper {
            object-fit: cover;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        h2 {
            color: inherit;
            // position: absolute;
            // left: 0;
            // top: 0;
            // width: 100%;
            // height: 100%;
            font-size: 16px;
            text-transform: none;
            // line-height: calc(50vw - 55px);
            text-align: center;

            @media (min-width: 600px) {
                // line-height: 270px;
                font-size: 24px;
            }
        }

        li {
            // aspect-ratio: 1 / 1;
            border-radius: 30px;
            overflow: hidden;
            position: relative;
            background: rgba(0,0,0,.2);
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            cursor: pointer;

            > div {
                grid-column: 1;
                grid-row: 1;
                display: grid;
                place-items: center;
            }
        }

        a {
            // position: absolute;
        }
    }

    & .popup {
        position: fixed;
        z-index: 999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.75);
        display: flex;
        // place-items: center;
        // grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
        color: white;
        column-gap: 40px;

        button {
            position: absolute;
            color: white;
            top: 7%;
            right: 7%;
            cursor: pointer;
        }

        .description {
        font-size: 22px;
            // width: 90%;
        }
  }
`
export { Wrapper }