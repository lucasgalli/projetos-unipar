import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import AdicionaDados from "../pages/AdicionaDados";
import Perfil from "../pages/Perfil";
import BuscaEnderecos from "../pages/BuscaEnderecos";

function Rotas() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/add" element={<AdicionaDados />}></Route>
			<Route path="/perfil" element={<Perfil />}></Route>
			<Route path="/enderecos" element={<BuscaEnderecos />}></Route>
		</Routes>
	);
}

export default Rotas;
