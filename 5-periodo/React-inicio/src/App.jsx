import React, { useState } from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Contador from "./componentes/Contador";
import Cookies from "js-cookie";

const App = () => {
	const [darkMode, setDarkMode] = useState(
		Cookies.get("dark-mode") === "true" ? true : false
	);

	const alteraDarkMode = () => {
		setDarkMode(!darkMode);

		if (darkMode) {
			Cookies.set("dark-mode", false);
		} else {
			Cookies.set("dark-mode", true);
		}
	};

	return (
		<div className={`main ${darkMode ? "modo-escuro" : ""}`}>
			<Header />
			<Contador />
			Alterar cor fundo
			<button onClick={alteraDarkMode}>Alterar</button>
			<Footer />
		</div>
	);
};

export default App;
