import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx"


// Объект для вывода
const root = document.querySelector("#root")
	? document.querySelector("#root")
	: document.querySelector(".wrapper");

const elem = (
	<div>
		<h2>Hellow World</h2>
		<input type="text" placeholder="Type here" />
		<button />
	</div>
)


// Main rendering
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		{elem}
	</React.StrictMode>
);
