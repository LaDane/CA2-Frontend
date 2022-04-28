import React from "react";
import "./HomeScreen.css";

const HomeScreen = () => {
	return (
		<div className="homescreen">
			<div className="homescreen-logo">
				<img className="homescreen-img" src={require("../../images/logo.png")} alt="Logo" />
			</div>
			<div className="homescreen-title">
				<h1>Vandvejen's Online Karakter Værktøj</h1>
			</div>
		</div>
	);
};

export default HomeScreen;
