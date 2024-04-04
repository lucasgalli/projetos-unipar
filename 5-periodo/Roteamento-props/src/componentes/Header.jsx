import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<Link to="/">Home</Link>
			<Link to="/add">Adicionar dados</Link>
			<Link to="/perfil">Perfil</Link>
			<Link to="/enderecos">Busca endereços</Link>
		</header>
	);
};

export default Header;
