import React from "react";
import "./AboutScreen.css";

const AboutScreen = () => {
	return (
		<div className="aboutscreen-container">
			<div className="aboutscreen-title">
				<h1>
					<u>About</u>
				</h1>
			</div>
			<div className="aboutscreen-text">
				<p>Denne hjemmeside er lavet til en skole opgave (CA2) hvor vi skulle lave vores egen template som kan bruges til semester projektet.</p>
				<br />
				<p>Der er blevet taget udgangspunkt i en udleveret startcode som jeg har bygget videre på, da vi skulle bruge vores template til at lave et konkret projekt</p>
				<br />
				<p>Jeg valgte at bygge en digitaliseret version af et brætspil som jeg spiller med nogle kammerater.</p>
			</div>
		</div>
	);
};

export default AboutScreen;
