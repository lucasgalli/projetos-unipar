import React, { useState } from "react";
import { UrlViaCep } from "../config/config";

const BuscaEnderecos = () => {
	const [cep, setCep] = useState("");
	console.log(cep)
	const response = UrlViaCep.get(`${cep}/json/`).then(function (response) {
		console.log(response);
	});

	return (
		<>
			
			<input type="text" onChange={(e) => setCep(e.target.value)} />
		</>
	);
};

export default BuscaEnderecos;
