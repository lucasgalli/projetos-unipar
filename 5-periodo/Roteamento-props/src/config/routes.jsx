import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Perfil from "../pages/Perfil";

function Rotas() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />}></Route>
			<Route path="/perfil" element={<Perfil />}></Route>
		</Routes>
	);
}

export default Rotas;
