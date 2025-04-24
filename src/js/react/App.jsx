import React from "react";
import Header from "./components/Header.jsx";
import Card from "./components/Card/Card.jsx";
import Driwer from "./components/Driwer.jsx";
import { arr } from "./data.js";
const App = () => {

	const deistvie = () => {
		console.log(123);
	}
	return (
		<>
			<Driwer />
			<Header />
			<main>

			</main>
		</>
	)

};

export default App