import React, { useState } from "react";

const Contador = () => {
	const [count, setCount] = useState(0);
	const [text, setText] = useState("");

	const incrementar = () => {
		setCount(count + 1);
	};

	const decrementar = () => {
		setCount(count - 1);
	};

	const showText = (event) => {
		setText(event.target.value);
	};

	return (
		<main>
			Contador:{count}
			<p>
				<button onClick={incrementar}>Incrementar</button>
				<button onClick={decrementar}>Decrementar</button>
			</p>
			<p>
				Digite algo:
				<input type="text" onChange={showText} />
				<p>O texto digitado é: {text}</p>
			</p>
		</main>
	);
};

export default Contador;
