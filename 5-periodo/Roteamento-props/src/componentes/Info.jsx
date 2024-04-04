import React from "react";

const Info = (props) => {
	return (
		<>
			<h2>{props.titulo}</h2>
			<p>{props.descricao}</p>
		</>
	);
};

export default Info;
