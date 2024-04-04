import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
	padding: 15px 0;
	background-color: rgb(0, 57, 86);
	color: #fff;
	text-align: center;
`;

const Footer = () => {
	return <StyledFooter>&copy; Prof. Lucas</StyledFooter>;
};

export default Footer;
