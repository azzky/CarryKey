import { styled } from "styled-components";

const LangSwitcherWrapper = styled.div`
    position: relative;
    width: 40px;
    display: flex;

    img {
        width: 100%;
        height: auto;
        display: block;
    }
`;

const LangSwitcherDropdown = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;

    li {
        margin-top: 5px;
    }
`;

export { LangSwitcherWrapper, LangSwitcherDropdown };