import React, { useState } from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Contador from "./componentes/Contador";

const App = () => {
	const [darkMode, setDarkMode] = useState(false);

	const alteraDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className={darkMode ? "modo-escuro" : ""}>
			<Header />
			<Contador />
			Alterar cor fundo
			<button onClick={alteraDarkMode}>Alterar</button>
			<Footer />
		</div>
	);
};

export default App;
