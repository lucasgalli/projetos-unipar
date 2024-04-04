import React from "react";
import Button from "../componentes/Button";
import ButtonStyled from "../style-components/ButtonStyled";
import Info from "../componentes/Info";

const Perfil = () => {
	const handleClick = () => {
		alert("funcionou!");
	};

	return (
		<main>
			<Info
				titulo="Informações"
				descricao="Essa é a disciplina de programação web"
			/>
			<br />
			Clique no botão abaixo
			<br />
			<Button tipo="primary" titulo="Salvar" />
			<ButtonStyled onClick={handleClick} />
		</main>
	);
};

export default Perfil;
