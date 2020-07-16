import React from "react";
import styled from "styled-components";

const HeaderComp = styled.header`
    font-family: Poppins;
    font-size: 24px;
    line-height: 36px;
    font-weight: 300;
    .bold {
        font-weight: bold;
    }
`

const Header = () => (
    <HeaderComp>
        <span className="bold">Github</span> Jobs
    </HeaderComp>
)

export default Header;