import React from "react";
import styled from "styled-components";

const FooterComp = styled.footer`
    font-family: Montserrat;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #B9BDCF;
    margin-top: 150px;
`

const Footer = () => (
    <FooterComp>
        Milan Terhes @ DevChallenges.io
    </FooterComp>
)

export default Footer;