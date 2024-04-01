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
			<div>
				<button onClick={incrementar}>Incrementar</button>
				<button onClick={decrementar}>Decrementar</button>
			</div>
			<div>
				Digite algo:
				<input type="text" onChange={showText} />
				<p>O texto digitado é: {text}</p>
			</div>
		</main>
	);
};

export default Contador;
