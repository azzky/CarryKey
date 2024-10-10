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
        padding: 22px 55px;
        display: grid;
        color: white;
        align-items: start;
        justify-items: center;
        gap: 0;
        grid-template-rows: repeat(6, max-content);
        min-height: 95vw;

        @media (min-width: 768px) {
            padding: 19px var(--tablet-offset);
        }

        @media (min-width: 1280px) {
            padding: 42px var(--desktop-offset);
        }
    }

    & .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        justify-self: stretch;
    }

    & img.logo {
        max-width: 83px;

        @media (min-width: 768px) {
            max-width: 117px;
        }

        @media (min-width: 1280px) {
            max-width: 148px;
        }
    }

    & a.logo {
        display: block;
    }

    & h1 {
        font-size: 36px;
        font-weight: 300;
        line-height: 53.35px;
        margin-top: 13px;

        @media (min-width: 768px) {
            font-size: 28px;
        }

        @media (min-width: 1280px) {
            font-size: 80px;
            margin-bottom: 30px;
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
        gap: 30px;
        margin-bottom: 33px;
        margin-top: 33px;

        @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }

        @media (min-width: 1280px) {
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
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
            line-height: 55px;
            text-align: center;
            width: 100%;
            background: linear-gradient(to top, black, transparent);

            @media (min-width: 1280px) {
                font-size: 20px;
                line-height: 90px;
            }
        }

        li {
            aspect-ratio: 1 / 1;
            border-radius: 10px;
            overflow: hidden;
            position: relative;
            background: rgba(0,0,0,.2);
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            cursor: pointer;

            @media (min-width: 768px) {
                aspect-ratio: initial;
            }

            > div {
                grid-column: 1;
                grid-row: 1;
                display: grid;
                place-items: end center;
                // padding: 15px;
            }
        }
    }

    & .popup {
        position: fixed;
        z-index: 999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(255,255,255,0.5);
        display: flex;
        flex-direction: column;
        // place-items: center;
        // grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
        column-gap: 40px;
        padding: 45px 55px;

        .gatsby-image-wrapper {
            border-top: 17px solid var(--color-secondary);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;

            @media (min-width: 768px) {
                border: 0;
                border-radius: 0;
            }

            @media (min-width: 1024px) {
                grid-area: image;
            }
        }

        button {
            position: absolute;
            color: white;
            top: 7%;
            right: 7%;
            cursor: pointer;
        }

        .description {
            font-size: 16px;
            background: var(--color-secondary);
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            padding: 17px 12px 30px;
            width: 100%;
            line-height: 19.62px;
            font-family: 'CG';

            @media (min-width: 768px) {
                padding-top: 22px;
                padding-left: 39px;
                padding-right: 39px;
            }

            @media (min-width: 1024px) {
                grid-area: description;
                padding: 0;
                margin-top: 22px;
            }

            p {
                margin-bottom: 10px;
            }
        }

        .button {
            max-width: 235px;
            background: var(--color-cta);
            text-transform: none;
            margin: 15px auto 0;

            @media (min-width: 768px) {
                max-width: 302px;
            }

            @media (min-width: 1024px) {
                grid-area: button;
                margin-left: 0;
            }
        }

        h2 {
            display: none;

            @media (min-width: 768px) {
                font-size: 36px;
                text-transform: initial;
                display: inline-block;
                padding: 0 39px;
                width: 100%;
                background: var(--color-secondary);
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                padding-top: 20px;
            }

            @media (min-width: 1024px) {
                grid-area: heading;
                padding: 0;
                font-size: 44px;
                margin-top: 73px;
                border-bottom: 1px solid var(--color-cta);
                height: max-content;
            }
        }

        .popup-content {
            @media (min-width: 768px) {
                // background: var(--color-secondary);
                max-width: 480px;
                border-radius: 10px;
            }

            @media (min-width: 1024px) {
                display: grid;
                grid-template-areas:
                    'header header'
                    'image heading'
                    'image description'
                    'image button';
                background: var(--color-secondary);
                padding: 0 45px 55px;
                gap: 20px 40px;
                max-width: 960px;
                grid-template-columns: 1fr 340px;
            }
        }

        .close-btn {
            color: var(--color-cta);

            @media (max-width: 1023px) {
                color: transparent;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                z-index: -1;
            }

            @media (min-width: 1024px) {
                
                position: initial;
                width: 20px;
                height: 20px;
                align-self: center;

                svg {
                    width: 20px;
                    height: 20px;
                }
            }
        }

        .popup-header {
            @media (min-width: 1024px) {
                grid-area: header;
                border-bottom: 1px solid var(--color-main);
                display: flex;
                align-items: center;
                justify-content: end;
                height: 60px;
            }
        }
  }
`
export { Wrapper }