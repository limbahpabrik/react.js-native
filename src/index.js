import React from "react";
import ReactDOM from "react-dom/client";

import "../src/index.css";

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<>
			<h1>Warung Mang Ujo</h1>
		</>
	);
}

function Menu() {
	return (
		<main className="menu">
			<Food />
		</main>
	);
}

function Food() {
	return (
		<>
			<h2>Nasi Goreng</h2>
		</>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const buka = 10;
	const tutup = 22;

	if (hour < buka || hour > tutup) {
		alert("Warung Tutup");
	} else {
		alert("Warung Buka");
	}

	return (
		<footer>
			<p>
				{new Date().getFullYear()}-Mang Ujo
				<br />
				Buka dari pukul: {buka}-{tutup}
			</p>
		</footer>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
