import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	background-color: blue;
	color: #fff;

	&:hover {
		background-color: green;
	}
`;

const Button = ({ onClick }) => {
	return <StyledButton onClick={onClick}>button styled</StyledButton>;
};

export default Button;
