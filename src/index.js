import React from "react";
import ReactDOM from "react-dom/client";

import "../src/index.css";
import data from "../src/data.js";

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
	const food = [];
	// const food = data;
	const numsFood = food.length;

	return (
		<main className="menu">
			<h2>Menu Kita</h2>
			{numsFood > 0 ? (
				<ul className="foods">
					{data.map((food) => (
						<Food item={food} />
					))}
				</ul>
			) : (
				<p>Warung Sudah Tutup</p>
			)}
		</main>
	);
}

function Food(props) {
	return (
		<>
			<img
				src={props.item.foto}
				alt={props.item.nama}
				width={100}
				height={80}
			/>
			<h2>{props.item.nama}</h2>
			<p>{props.item.deskripsi}</p>
			<span>{props.item.harga}</span>
		</>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const buka = 10;
	const tutup = 22;

	const isOpen = hour >= buka && hour <= tutup;

	if (isOpen) {
		return <FooterOpen buka={buka} tutup={tutup} />;
	} else {
		return <FooterClosed buka={buka} tutup={tutup} />;
	}
}

function FooterOpen(props) {
	return (
		<footer className="footer">
			<div className="order">
				<p>
					{new Date().getFullYear()} - Warung Mang Ujo - Buka Pukul:{" "}
					{props.buka}-{props.tutup}
				</p>
				<button className="btn">Order</button>
			</div>
		</footer>
	);
}

function FooterClosed(props) {
	return (
		<footer className="footer">
			<p>
				{new Date().getFullYear()} - Warung Mang Ujo - Buka Pukul: {props.buka}-
				{props.tutup}
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
