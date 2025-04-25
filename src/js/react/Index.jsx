import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app.jsx";
// import App from "./App.jsx"
import "./index.css";

// Объект для вывода
const root = document.querySelector("#root")
	? document.querySelector("#root")
	: document.querySelector(".wrapper");


// Main rendering
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode >
);
