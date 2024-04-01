import React from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Rotas from "./config/routes";

const App = () => {
	return (
		<>
			<Header />
			<Rotas />
			<Footer />
		</>
	);
};

export default App;
