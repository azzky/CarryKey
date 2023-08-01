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
        </defs>
    </svg>
    
    </>
    )
};

export default SvgSprite;