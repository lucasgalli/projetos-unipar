import React, { useState } from "react";
import { UrlViaCep } from "../config/config";

const BuscaEnderecos = () => {
	const [endereco, setEndereco] = useState({
		cep: "",
	});

	function buscaCep(e) {
		const cep = e.target.value;
		setEndereco({
			cep,
		});

		if (cep && cep.length === 8) {
			try {
				UrlViaCep.get(`${cep}/json/`).then(function (response) {
					const dados = response.data;
					if (!dados.erro) {
						console.log(dados);
						setEndereco({
							cep: cep,
							rua: dados.logradouro,
							bairro: dados.bairro,
							cidade: dados.localidade,
							estado: dados.uf,
						});
					}
				});
			} catch (error) {}
		}
	}

	return (
		<main>
			<h3>Digite o cep</h3>
			<input type="text" onChange={buscaCep} maxLength={8} />
			<div></div>
			<section>
				<h3></h3>
				<ul>
					<li>{endereco.cep}</li>
					<li>{endereco.rua}</li>
					<li>{endereco.bairro}</li>
					<li>{endereco.cidade}</li>
					<li>{endereco.estado}</li>
				</ul>
			</section>
		</main>
	);
};

export default BuscaEnderecos;
