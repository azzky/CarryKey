import React from "react"

const SvgSprite = () => {
    const styles = {
        display: 'none'
    };
    return (
    <><svg xmlns="http://www.w3.org/2000/svg" style={styles}>
        <defs>
            <path id="youtube" d="M27.5826 13.2624C27.4688 12.8243 27.2455 12.4248 26.9352 12.1038C26.625 11.7829 26.2386 11.5517 25.8148 11.4336C24.2545 11 18 11 18 11C18 11 11.7455 11 10.1853 11.4313C9.76121 11.5491 9.37461 11.7801 9.0643 12.1011C8.75399 12.4221 8.53089 12.8218 8.41741 13.26C8 14.8744 8 18.2414 8 18.2414C8 18.2414 8 21.6084 8.41741 23.2204C8.64732 24.1106 9.32589 24.8117 10.1853 25.0492C11.7455 25.4828 18 25.4828 18 25.4828C18 25.4828 24.2545 25.4828 25.8148 25.0492C26.6763 24.8117 27.3527 24.1106 27.5826 23.2204C28 21.6084 28 18.2414 28 18.2414C28 18.2414 28 14.8744 27.5826 13.2624ZM16.0134 21.3317V15.1511L21.1919 18.2183L16.0134 21.3317Z"/>
            <path id="tiktok" d="M23.8674 10.4575C22.9954 9.50068 22.515 8.27194 22.5153 7H18.574V22.203C18.5436 23.0258 18.1822 23.805 17.566 24.3768C16.9498 24.9485 16.1268 25.2681 15.2704 25.2682C13.4592 25.2682 11.9541 23.846 11.9541 22.0805C11.9541 19.9717 14.0714 18.3901 16.2526 19.0399V15.1655C11.852 14.6015 8 17.8874 8 22.0805C8 26.1632 11.5204 29.069 15.2577 29.069C19.2628 29.069 22.5153 25.9426 22.5153 22.0805V14.3686C24.1135 15.4719 26.0323 16.0638 28 16.0606V12.272C28 12.272 25.6021 12.3824 23.8674 10.4575Z"/>
            <path id="instagram" d="M13.38 7H22.62C26.14 7 29 9.86 29 13.38V22.62C29 24.3121 28.3279 25.9349 27.1314 27.1314C25.9349 28.3279 24.3121 29 22.62 29H13.38C9.86 29 7 26.14 7 22.62V13.38C7 11.6879 7.67218 10.0651 8.86866 8.86866C10.0651 7.67218 11.6879 7 13.38 7ZM13.16 9.2C12.1097 9.2 11.1025 9.61721 10.3599 10.3599C9.61721 11.1025 9.2 12.1097 9.2 13.16V22.84C9.2 25.029 10.971 26.8 13.16 26.8H22.84C23.8902 26.8 24.8975 26.3828 25.6401 25.6401C26.3828 24.8975 26.8 23.8902 26.8 22.84V13.16C26.8 10.971 25.029 9.2 22.84 9.2H13.16ZM23.775 10.85C24.1397 10.85 24.4894 10.9949 24.7472 11.2527C25.0051 11.5106 25.15 11.8603 25.15 12.225C25.15 12.5897 25.0051 12.9394 24.7472 13.1973C24.4894 13.4551 24.1397 13.6 23.775 13.6C23.4103 13.6 23.0606 13.4551 22.8028 13.1973C22.5449 12.9394 22.4 12.5897 22.4 12.225C22.4 11.8603 22.5449 11.5106 22.8028 11.2527C23.0606 10.9949 23.4103 10.85 23.775 10.85ZM18 12.5C19.4587 12.5 20.8576 13.0795 21.8891 14.1109C22.9206 15.1424 23.5 16.5413 23.5 18C23.5 19.4587 22.9206 20.8576 21.8891 21.8891C20.8576 22.9206 19.4587 23.5 18 23.5C16.5413 23.5 15.1424 22.9206 14.1109 21.8891C13.0795 20.8576 12.5 19.4587 12.5 18C12.5 16.5413 13.0795 15.1424 14.1109 14.1109C15.1424 13.0795 16.5413 12.5 18 12.5ZM18 14.7C17.1248 14.7 16.2854 15.0477 15.6666 15.6666C15.0477 16.2854 14.7 17.1248 14.7 18C14.7 18.8752 15.0477 19.7146 15.6666 20.3334C16.2854 20.9523 17.1248 21.3 18 21.3C18.8752 21.3 19.7146 20.9523 20.3334 20.3334C20.9523 19.7146 21.3 18.8752 21.3 18C21.3 17.1248 20.9523 16.2854 20.3334 15.6666C19.7146 15.0477 18.8752 14.7 18 14.7Z"/>
            <path id="facebook" d="M22.082 20.5155L22.808 15.8455H18.2691V12.8152C18.2691 11.5374 18.9032 10.2919 20.936 10.2919H23V6.31582C23 6.31582 21.1272 6 19.3363 6C15.598 6 13.155 8.23665 13.155 12.2856V15.8446H9V20.5147H13.155V31.804C13.9885 31.9328 14.8425 32 15.7121 32C16.5816 32 17.4356 31.9328 18.2691 31.804V20.5155H22.082Z"/>
            <path id="arrowDown" d="M5 11L5 1M5 11L1 6.71429M5 11L9 6.71429" stroke="#904A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="basket">
                <path d="M4.28438 1C5.57672 1 6.69152 1.78045 6.99438 2.89762L7.75151 5.68793H27.2123C28.0739 5.68793 28.8728 6.03248 29.4028 6.63544C29.9354 7.23579 30.1234 8.00841 29.9197 8.75232L27.6301 17.1102C27.3246 18.2248 26.2124 19 24.9227 19H12.4588C11.169 19 10.0568 18.2222 9.75137 17.1102L8.95247 14.1972L8.93942 14.145L6.62364 5.69055H6.64714L5.95267 3.12471C5.7673 2.43562 5.08067 1.95534 4.28438 1.95534H1V1H4.28438ZM10.7905 16.8805C10.9784 17.567 11.6651 18.0447 12.4588 18.0447H24.9201C25.7138 18.0447 26.4004 17.5644 26.5884 16.8805L28.878 8.52262C29.0033 8.06323 28.8885 7.58817 28.5595 7.21752C28.2306 6.84687 27.7397 6.63544 27.2097 6.63544H8.00475L9.42241 11.8663H23.3901V12.8164H9.68088L9.99418 13.9701L10.7905 16.8805Z" fill="currentColor"/>
                <path d="M12.4988 20C13.8781 20 15 21.1214 15 22.5C15 23.8786 13.8781 25 12.4988 25C11.1194 25 10 23.8761 10 22.5C10 21.1214 11.1194 20 12.4988 20ZM12.4988 24.0884C13.3758 24.0884 14.0905 23.3741 14.0905 22.4975C14.0905 21.6209 13.3758 20.9066 12.4988 20.9066C11.6217 20.9066 10.907 21.6209 10.907 22.4975C10.9095 23.3766 11.6217 24.0884 12.4988 24.0884Z" fill="currentColor"/>
                <path d="M25.5 20C26.8786 20 28 21.1214 28 22.5C28 23.8786 26.8786 25 25.5 25C24.1214 25 23 23.8761 23 22.5C23 21.1214 24.1214 20 25.5 20ZM25.5 24.0884C26.3766 24.0884 27.0909 23.3741 27.0909 22.4975C27.0909 21.6209 26.3766 20.9066 25.5 20.9066C24.6234 20.9066 23.9091 21.6209 23.9091 22.4975C23.9091 23.3766 24.6234 24.0884 25.5 24.0884Z" fill="currentColor"/>
                <path d="M4.28438 1C5.57672 1 6.69152 1.78045 6.99438 2.89762L7.75151 5.68793H27.2123C28.0739 5.68793 28.8728 6.03248 29.4028 6.63544C29.9354 7.23579 30.1234 8.00841 29.9197 8.75232L27.6301 17.1102C27.3246 18.2248 26.2124 19 24.9227 19H12.4588C11.169 19 10.0568 18.2222 9.75137 17.1102L8.95247 14.1972L8.93942 14.145L6.62364 5.69055H6.64714L5.95267 3.12471C5.7673 2.43562 5.08067 1.95534 4.28438 1.95534H1V1H4.28438ZM10.7905 16.8805C10.9784 17.567 11.6651 18.0447 12.4588 18.0447H24.9201C25.7138 18.0447 26.4004 17.5644 26.5884 16.8805L28.878 8.52262C29.0033 8.06323 28.8885 7.58817 28.5595 7.21752C28.2306 6.84687 27.7397 6.63544 27.2097 6.63544H8.00475L9.42241 11.8663H23.3901V12.8164H9.68088L9.99418 13.9701L10.7905 16.8805Z" stroke="currentColor"/>
                <path d="M12.4988 20C13.8781 20 15 21.1214 15 22.5C15 23.8786 13.8781 25 12.4988 25C11.1194 25 10 23.8761 10 22.5C10 21.1214 11.1194 20 12.4988 20ZM12.4988 24.0884C13.3758 24.0884 14.0905 23.3741 14.0905 22.4975C14.0905 21.6209 13.3758 20.9066 12.4988 20.9066C11.6217 20.9066 10.907 21.6209 10.907 22.4975C10.9095 23.3766 11.6217 24.0884 12.4988 24.0884Z" stroke="currentColor"/>
                <path d="M25.5 20C26.8786 20 28 21.1214 28 22.5C28 23.8786 26.8786 25 25.5 25C24.1214 25 23 23.8761 23 22.5C23 21.1214 24.1214 20 25.5 20ZM25.5 24.0884C26.3766 24.0884 27.0909 23.3741 27.0909 22.4975C27.0909 21.6209 26.3766 20.9066 25.5 20.9066C24.6234 20.9066 23.9091 21.6209 23.9091 22.4975C23.9091 23.3766 24.6234 24.0884 25.5 24.0884Z" stroke="currentColor"/>
            </g>
            <path id="search" d="M25 25L17 17M1 10.3333C1 11.559 1.24141 12.7727 1.71046 13.905C2.1795 15.0374 2.86699 16.0663 3.73367 16.933C4.60035 17.7997 5.62925 18.4872 6.76162 18.9562C7.89399 19.4253 9.10766 19.6667 10.3333 19.6667C11.559 19.6667 12.7727 19.4253 13.905 18.9562C15.0374 18.4872 16.0663 17.7997 16.933 16.933C17.7997 16.0663 18.4872 15.0374 18.9562 13.905C19.4253 12.7727 19.6667 11.559 19.6667 10.3333C19.6667 9.10766 19.4253 7.89399 18.9562 6.76162C18.4872 5.62925 17.7997 4.60035 16.933 3.73367C16.0663 2.86699 15.0374 2.1795 13.905 1.71046C12.7727 1.24141 11.559 1 10.3333 1C9.10766 1 7.89399 1.24141 6.76162 1.71046C5.62925 2.1795 4.60035 2.86699 3.73367 3.73367C2.86699 4.60035 2.1795 5.62925 1.71046 6.76162C1.24141 7.89399 1 9.10766 1 10.3333Z" stroke="#CECDCF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="close" d="M14.7802 13.719C14.8499 13.7887 14.9052 13.8714 14.9429 13.9625C14.9806 14.0535 15 14.1511 15 14.2496C15 14.3482 14.9806 14.4457 14.9429 14.5368C14.9052 14.6278 14.8499 14.7105 14.7802 14.7802C14.7105 14.8499 14.6278 14.9052 14.5368 14.9429C14.4457 14.9806 14.3482 15 14.2496 15C14.1511 15 14.0535 14.9806 13.9625 14.9429C13.8714 14.9052 13.7887 14.8499 13.719 14.7802L7.5 8.56025L1.28097 14.7802C1.14025 14.9209 0.949387 15 0.750375 15C0.551363 15 0.360502 14.9209 0.21978 14.7802C0.0790571 14.6395 3.923e-09 14.4486 0 14.2496C-3.923e-09 14.0506 0.0790571 13.8598 0.21978 13.719L6.43975 7.5L0.21978 1.28097C0.0790571 1.14025 -1.48275e-09 0.949387 0 0.750375C1.48275e-09 0.551363 0.0790571 0.360502 0.21978 0.21978C0.360502 0.0790571 0.551363 1.48275e-09 0.750375 0C0.949387 -1.48275e-09 1.14025 0.0790571 1.28097 0.21978L7.5 6.43975L13.719 0.21978C13.8598 0.0790571 14.0506 -3.923e-09 14.2496 0C14.4486 3.923e-09 14.6395 0.0790571 14.7802 0.21978C14.9209 0.360502 15 0.551363 15 0.750375C15 0.949387 14.9209 1.14025 14.7802 1.28097L8.56025 7.5L14.7802 13.719Z" fill="currentColor"/>
            <path id="arrowDiagonal" d="M13.7071 14.7472C14.2594 14.7481 14.7078 14.301 14.7086 13.7487L14.7222 4.74875C14.7231 4.19646 14.2761 3.74807 13.7238 3.74723C13.1715 3.74639 12.7231 4.19343 12.7223 4.74571L12.7101 12.7457L4.71012 12.7336C4.15784 12.7327 3.70944 13.1798 3.70861 13.732C3.70777 14.2843 4.1548 14.7327 4.70709 14.7336L13.7071 14.7472ZM0.291821 1.70603L13.0004 14.4533L14.4168 13.0412L1.70818 0.293967L0.291821 1.70603Z" fill="currentColor"/>
            <path id="bin" d="M3.02273 0C2.39973 0 1.89923 0.500019 1.89923 1.10453V1.23883H0.636364C0.461045 1.23883 0.318182 1.37682 0.318182 1.54616V1.85348H0V2.46813H0.636364V7.07802C0.636364 7.58357 1.0675 8 1.59091 8H5.40909C5.9325 8 6.36364 7.58357 6.36364 7.07802V2.46813H7V1.85348H6.68182V1.54616C6.68182 1.37682 6.53895 1.23883 6.36364 1.23883H5.10077V1.10422C5.10077 0.500019 4.60027 0 3.97727 0H3.02273ZM3.02273 0.633706H3.97727C4.23309 0.633706 4.44468 0.835312 4.44468 1.10422V1.23883H2.555V1.10422C2.555 0.835312 2.76659 0.634013 3.02241 0.634013L3.02273 0.633706ZM1.27273 2.46813H2.90341C2.94286 2.47213 2.982 2.47766 3.02273 2.47766H3.97727C4.018 2.47766 4.05682 2.47213 4.09659 2.46813H5.72727V7.07802C5.72727 7.25105 5.58823 7.38535 5.40909 7.38535H1.59091C1.41177 7.38535 1.27273 7.25105 1.27273 7.07802V2.46813ZM1.90909 3.08279V6.7707H2.54545V3.08279H1.90909ZM3.18182 3.08279V6.7707H3.81818V3.08279H3.18182ZM4.45455 3.08279V6.7707H5.09091V3.08279H4.45455Z" fill="currentColor"/>
            <g id="edit">
                <path d="M7.33333 4C7.33333 3.91159 7.36845 3.82681 7.43096 3.7643C7.49348 3.70179 7.57826 3.66667 7.66667 3.66667C7.75507 3.66667 7.83986 3.70179 7.90237 3.7643C7.96488 3.82681 8 3.91159 8 4V7.66667C8 7.75507 7.96488 7.83986 7.90237 7.90237C7.83986 7.96488 7.75507 8 7.66667 8H0.333333C0.244928 8 0.160143 7.96488 0.0976311 7.90237C0.035119 7.83986 0 7.75507 0 7.66667V0.333333C0 0.244928 0.035119 0.160143 0.0976311 0.0976311C0.160143 0.035119 0.244928 0 0.333333 0H4C4.08841 0 4.17319 0.035119 4.2357 0.0976311C4.29821 0.160143 4.33333 0.244928 4.33333 0.333333C4.33333 0.421739 4.29821 0.506523 4.2357 0.569036C4.17319 0.631548 4.08841 0.666667 4 0.666667H0.666667V7.33333H7.33333V4Z" fill="currentColor"/>
                <path d="M3.66989 4.32945L4.17735 4.25687L7.29468 1.13996C7.32405 1.11159 7.34748 1.07765 7.3636 1.04013C7.37972 1.0026 7.3882 0.962242 7.38856 0.921403C7.38891 0.880564 7.38113 0.840064 7.36567 0.802265C7.3502 0.764466 7.32737 0.730125 7.29849 0.701246C7.26961 0.672368 7.23527 0.64953 7.19748 0.634065C7.15968 0.6186 7.11918 0.610818 7.07835 0.611173C7.03751 0.611528 6.99715 0.620013 6.95963 0.636132C6.92211 0.652251 6.88817 0.675683 6.8598 0.705059L3.74186 3.82196L3.66928 4.32945H3.66989ZM7.72955 0.269541C7.81529 0.35523 7.88331 0.456975 7.92971 0.568961C7.97612 0.680948 8 0.800981 8 0.922202C8 1.04342 7.97612 1.16346 7.92971 1.27544C7.88331 1.38743 7.81529 1.48917 7.72955 1.57486L4.54026 4.76435C4.49323 4.81156 4.43214 4.84221 4.36619 4.8517L3.35127 4.99688C3.30397 5.00367 3.25574 4.99935 3.2104 4.98425C3.16507 4.96916 3.12387 4.94371 3.09008 4.90991C3.05629 4.87612 3.03084 4.83493 3.01575 4.78958C3.00065 4.74424 2.99633 4.69601 3.00312 4.64871L3.14829 3.63373C3.15761 3.56785 3.18804 3.50676 3.23502 3.45965L6.42493 0.270156C6.59795 0.0971753 6.83258 0 7.07724 0C7.32189 0 7.55653 0.0971753 7.72955 0.270156V0.269541Z" fill="currentColor"/>
            </g>
            <path id="filter" d="M17 2.5631C17 2.01601 17 1.74247 16.89 1.53341C16.7945 1.34966 16.6419 1.2002 16.454 1.10649C16.24 1 15.96 1 15.4 1H2.6C2.04 1 1.76 1 1.546 1.10649C1.35785 1.20015 1.20487 1.34959 1.109 1.53341C1 1.74247 1 2.01601 1 2.5631V3.2831C1 3.52245 1 3.64163 1.028 3.75398C1.05249 3.854 1.09299 3.94962 1.148 4.03729C1.209 4.13499 1.296 4.21998 1.468 4.38899L6.531 9.33424C6.704 9.50325 6.791 9.58824 6.852 9.68594C6.907 9.77386 6.948 9.8696 6.972 9.96925C7 10.0806 7 10.1988 7 10.4323V15.0786C7 15.9159 7 16.335 7.18 16.587C7.25809 16.696 7.35816 16.7883 7.47406 16.8582C7.58996 16.9281 7.71925 16.9741 7.854 16.9934C8.165 17.0384 8.549 16.8518 9.315 16.4766L10.115 16.0858C10.437 15.9295 10.597 15.8514 10.714 15.7341C10.8178 15.6306 10.8967 15.5058 10.945 15.3688C11 15.2144 11 15.0386 11 14.6878V10.4401C11 10.2008 11 10.0816 11.028 9.96925C11.0525 9.86922 11.093 9.7736 11.148 9.68594C11.208 9.58824 11.295 9.50423 11.465 9.33815L11.469 9.33424L16.532 4.38899C16.704 4.21998 16.79 4.13499 16.852 4.03729C16.9071 3.94966 16.9476 3.85403 16.972 3.75398C17 3.64359 17 3.5244 17 3.29091V2.5631Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="numbers" d="M2.32258 9V2.25H0V0H4.64516V9H2.32258ZM7.74193 9V5.25C7.74193 4.825 7.89058 4.4685 8.18787 4.1805C8.48516 3.8925 8.85264 3.749 9.29032 3.75H12.3871V2.25H7.74193V0H13.1613C13.6 0 13.968 0.144 14.2653 0.432C14.5626 0.72 14.7107 1.076 14.7097 1.5V3.75C14.7097 4.175 14.561 4.5315 14.2637 4.8195C13.9664 5.1075 13.599 5.251 13.1613 5.25H10.0645V6.75H14.7097V9H7.74193ZM17.0323 9V6.75H21.6774V5.25H18.5806V3.75H21.6774V2.25H17.0323V0H22.4516C22.8903 0 23.2583 0.144 23.5556 0.432C23.8529 0.72 24.001 1.076 24 1.5V7.5C24 7.925 23.8513 8.2815 23.5541 8.5695C23.2568 8.8575 22.8893 9.00099 22.4516 9H17.0323Z" fill="currentColor"/> 
            <path id="hand" d="M15 5.83333C15.0001 5.52437 14.9332 5.21925 14.8044 4.9401C14.6755 4.66094 14.4879 4.41473 14.255 4.2193C14.0221 4.02387 13.7498 3.88411 13.4578 3.81015C13.1659 3.73619 12.8616 3.72987 12.567 3.79167V3.33333C12.5672 3.012 12.495 2.69498 12.3561 2.40706C12.2173 2.11914 12.0155 1.86813 11.7665 1.67365C11.5176 1.47918 11.2282 1.34651 10.9211 1.28603C10.614 1.22554 10.2974 1.23888 9.9961 1.325C9.84668 0.934958 9.58662 0.60007 9.24966 0.363797C8.9127 0.127523 8.5144 0.000774618 8.10646 0C7.10892 0 6.2817 0.741667 6.11139 1.71667C5.81517 1.64933 5.50802 1.65116 5.21257 1.72202C4.91713 1.79288 4.64093 1.93097 4.40433 2.1261C4.16774 2.32123 3.97677 2.56843 3.84551 2.84948C3.71426 3.13053 3.64605 3.43826 3.64594 3.75V8.65833C3.37019 8.4 3.02957 8.20833 2.65651 8.10833L2.03204 7.93333C1.3589 7.74167 0.653328 8.00833 0.255936 8.625C-0.0522461 9.1 -0.0684661 9.71667 0.134285 10.25L2.21046 15.6083C2.71166 16.9048 3.5804 18.0167 4.70401 18.7998C5.82762 19.5829 7.15429 20.001 8.51196 20C12.0966 20 15 17.0167 15 13.3333V5.83333ZM13.378 13.3333C13.378 16.0917 11.1964 18.3333 8.51196 18.3333C6.39524 18.3333 4.49749 17.0083 3.71893 14.9917L1.61031 9.54167L2.04015 9.65833C2.41321 9.75833 2.71328 10.0417 2.85115 10.4083L3.64594 12.5H5.26794V3.75C5.26794 3.51667 5.44637 3.33333 5.67345 3.33333C5.90053 3.33333 6.07895 3.51667 6.07895 3.75V10H7.70096V2.08333C7.70096 1.85 7.87938 1.66667 8.10646 1.66667C8.33354 1.66667 8.51196 1.85 8.51196 2.08333V10H10.134V3.33333C10.134 3.1 10.3124 2.91667 10.5395 2.91667C10.7666 2.91667 10.945 3.1 10.945 3.33333V10H12.567V5.83333C12.567 5.6 12.7454 5.41667 12.9725 5.41667C13.1996 5.41667 13.378 5.6 13.378 5.83333V13.3333Z" fill="currentColor"/>
            <g id="clock">
                <path d="M1 9.5C1 11.1811 1.49852 12.8245 2.43251 14.2223C3.3665 15.6202 4.69402 16.7096 6.24719 17.353C7.80036 17.9963 9.50942 18.1646 11.1583 17.8367C12.8071 17.5087 14.3217 16.6992 15.5104 15.5104C16.6991 14.3217 17.5087 12.8071 17.8367 11.1583C18.1646 9.50943 17.9963 7.80036 17.353 6.24719C16.7096 4.69402 15.6202 3.3665 14.2223 2.43251C12.8245 1.49852 11.1811 1.00001 9.5 1.00001C7.06504 0.997311 4.72292 1.93416 2.96154 3.61539" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.7 1L3 3.6506L5.8 4.31325M10 4.9759V10.2771L6.36 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <path id="" d="M14.7086 27.4886C22.68 27.4886 27.0514 20.88 27.0514 15.1457V14.58C27.9 13.9629 28.6457 13.1914 29.2114 12.3171C28.44 12.6514 27.5914 12.8829 26.7171 13.0114C27.6171 12.4714 28.3114 11.6229 28.62 10.62C27.7714 11.1086 26.8457 11.4686 25.8686 11.6743C25.0714 10.8257 23.94 10.3114 22.7057 10.3114C20.3143 10.3114 18.36 12.2657 18.36 14.6571C18.36 14.9914 18.3857 15.3257 18.4886 15.6343C14.8886 15.4543 11.6743 13.7314 9.54001 11.1086C9.18001 11.7514 8.94858 12.4971 8.94858 13.2943C8.94858 14.7857 9.72001 16.1229 10.8771 16.8943C10.1571 16.8943 9.48858 16.6886 8.92287 16.3543V16.4057C8.92287 18.5143 10.4143 20.2629 12.3943 20.6743C12.0343 20.7771 11.6486 20.8286 11.2629 20.8286C10.98 20.8286 10.7229 20.8029 10.44 20.7514C10.98 22.4743 12.6 23.7343 14.4771 23.76C12.9857 24.9171 11.1086 25.6114 9.07715 25.6114C8.71715 25.6114 8.38287 25.6114 8.04858 25.56C9.95144 26.7943 12.24 27.5143 14.6829 27.5143"/>
            <path id="paypalicon" d="M7.11562 8.58348C7.11562 9.04643 6.74514 9.39933 6.27535 9.39933C5.92396 9.39933 5.66424 9.20201 5.66424 8.83013C5.66424 8.36719 6.02708 7.99531 6.49306 7.99531C6.84826 7.99531 7.11562 8.21161 7.11562 8.58348ZM3.07465 6.74308H2.89514C2.83785 6.74308 2.78056 6.78103 2.77292 6.84554L2.60868 7.85871L2.92188 7.84732C3.34201 7.84732 3.66667 7.7904 3.74306 7.30848C3.8309 6.8 3.50625 6.74308 3.07465 6.74308ZM13.9219 6.74308H13.75C13.6812 6.74308 13.6354 6.78103 13.6278 6.84554L13.4674 7.85871L13.7729 7.84732C14.2694 7.84732 14.6132 7.73348 14.6132 7.16429C14.6094 6.76205 14.2465 6.74308 13.9219 6.74308ZM22 1.82143V15.1786C22 16.1842 21.1788 17 20.1667 17H1.83333C0.821181 17 0 16.1842 0 15.1786V1.82143C0 0.815848 0.821181 0 1.83333 0H20.1667C21.1788 0 22 0.815848 22 1.82143ZM4.90035 6.95937C4.90035 6.1625 4.2816 5.89687 3.575 5.89687H2.04722C1.95174 5.89687 1.85625 5.97277 1.84861 6.07522L1.22222 9.94955C1.21076 10.0254 1.26806 10.1013 1.34444 10.1013H2.07014C2.17326 10.1013 2.26875 9.99129 2.28021 9.88505L2.45208 8.87567C2.49028 8.60246 2.95625 8.69732 3.13958 8.69732C4.23194 8.69732 4.90035 8.05223 4.90035 6.95937ZM8.11632 7.2933H7.39062C7.24549 7.2933 7.23785 7.50201 7.23021 7.60446C7.00868 7.28192 6.68785 7.225 6.325 7.225C5.38924 7.225 4.675 8.04085 4.675 8.94018C4.675 9.68013 5.14097 10.1621 5.88576 10.1621C6.22951 10.1621 6.65729 9.97612 6.89792 9.71049C6.87882 9.76741 6.85972 9.88884 6.85972 9.94576C6.85972 10.033 6.89792 10.0975 6.98194 10.0975H7.63889C7.74201 10.0975 7.82986 9.9875 7.84896 9.88125L8.23854 7.4413C8.25 7.3692 8.19271 7.2933 8.11632 7.2933ZM9.66319 11.0083L12.0962 7.49442C12.1153 7.47545 12.1153 7.45647 12.1153 7.42991C12.1153 7.3654 12.058 7.2971 11.9931 7.2971H11.2597C11.1948 7.2971 11.126 7.33504 11.0878 7.39196L10.0757 8.87187L9.65556 7.44888C9.625 7.3654 9.54097 7.2971 9.44549 7.2971H8.73125C8.66632 7.2971 8.60903 7.3654 8.60903 7.42991C8.60903 7.47545 9.35382 9.58527 9.41875 9.78638C9.31563 9.93058 8.63576 10.8717 8.63576 10.9855C8.63576 11.0538 8.69306 11.1069 8.75799 11.1069H9.49132C9.56007 11.1031 9.625 11.0652 9.66319 11.0083ZM15.7476 6.95937C15.7476 6.1625 15.1288 5.89687 14.4222 5.89687H12.9059C12.8028 5.89687 12.7073 5.97277 12.6958 6.07522L12.0771 9.94576C12.0694 10.0217 12.1267 10.0975 12.1993 10.0975H12.9823C13.0587 10.0975 13.116 10.0406 13.1351 9.97612L13.3069 8.87567C13.3451 8.60246 13.8111 8.69732 13.9944 8.69732C15.0792 8.69732 15.7476 8.05223 15.7476 6.95937ZM18.9635 7.2933H18.2378C18.0927 7.2933 18.0851 7.50201 18.0736 7.60446C17.8635 7.28192 17.5389 7.225 17.1684 7.225C16.2326 7.225 15.5184 8.04085 15.5184 8.94018C15.5184 9.68013 15.9844 10.1621 16.7292 10.1621C17.0844 10.1621 17.5122 9.97612 17.7413 9.71049C17.7299 9.76741 17.7031 9.88884 17.7031 9.94576C17.7031 10.033 17.7413 10.0975 17.8253 10.0975H18.4861C18.5892 10.0975 18.6771 9.9875 18.6962 9.88125L19.0858 7.4413C19.0972 7.3692 19.0399 7.2933 18.9635 7.2933ZM20.7778 6.02969C20.7778 5.95379 20.7205 5.89687 20.6556 5.89687H19.949C19.8917 5.89687 19.8344 5.94241 19.8267 5.99933L19.208 9.94576L19.1965 9.96473C19.1965 10.033 19.2538 10.0975 19.3302 10.0975H19.9604C20.0559 10.0975 20.1514 9.9875 20.159 9.88125L20.7778 6.04107V6.02969ZM17.3403 7.99531C16.8743 7.99531 16.5115 8.36339 16.5115 8.83013C16.5115 9.19821 16.7788 9.39933 17.1302 9.39933C17.5885 9.39933 17.959 9.05022 17.959 8.58348C17.9628 8.21161 17.6955 7.99531 17.3403 7.99531Z" fill="currentColor"/> 
            <path id="patreon" d="M17.9998 8.00018C12.4768 8.00018 8 12.477 8 17.9999V27.9949H10.3213V17.9999C10.3213 13.7595 13.7593 10.3213 17.9999 10.3213C22.2405 10.3213 25.6785 13.7593 25.6785 17.9999C25.6785 22.1211 22.4309 25.4831 18.3556 25.6689C17.0608 25.6583 15.9568 25.4482 15.4733 25.1507V21.8505C16.195 22.323 17.0581 22.5985 17.9851 22.5985C20.5205 22.5985 22.5757 20.5433 22.5757 18.0079C22.5757 15.4724 20.5205 13.4162 17.9851 13.4162C15.4497 13.4162 13.3945 15.4725 13.3945 18.0079V27.9951C14.9096 27.9937 16.5191 27.9972 18.0002 27.9951C23.5232 27.9951 28 23.5227 28 18.0001C27.9996 12.4768 23.5223 8.00018 17.9998 8.00018Z"/>
            <g id="twitter">
                <path d="M19.8621 16.6425L19.1045 15.5414L13.9135 8H8.02307L15.8335 19.3486L16.5912 20.4485L22.1097 28.466H28.0002L19.8621 16.6425ZM22.8098 27.1334L17.4892 19.4031L16.7316 18.3027L10.5576 9.33241H13.2133L18.2062 16.5868L18.9639 17.6872L25.4655 27.1333L22.8098 27.1334Z"/>
                <path d="M16.7316 18.3027L17.4892 19.4031L16.5912 20.4485L9.69944 28.4659H8L15.8335 19.3486L16.7316 18.3027Z"/>
                <path d="M27.2909 8L19.8621 16.6425L18.9639 17.6872L18.2062 16.5868L19.1045 15.5414L24.1366 9.68429L25.5914 8H27.2909Z"/>
            </g>
            <g id="totop">
                <path d="M38.7361 77.7147L67.8348 48.6161" stroke="#904A9A" strokeWidth="10.2507" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M96.9334 77.7147L67.8347 48.6161" stroke="#904A9A" strokeWidth="10.2507" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M130 68C130 33.7583 102.242 6 68 6C33.7583 6 6 33.7583 6 68C6 102.242 33.7583 130 68 130C102.242 130 130 102.242 130 68Z" stroke="#904A9A" strokeWidth="10.912" strokeMiterlimit="10"/>
            </g>
        </defs>
    </svg>
    
    </>
    )
};

export default SvgSprite;