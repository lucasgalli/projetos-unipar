import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<Link to="/">Home</Link>
			<Link to="/about">Sobre</Link>
			<Link to="/perfil">Perfil</Link>
		</header>
	);
};

export default Header;
