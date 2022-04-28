import React from "react";
import "./BGround.css";

const BGround = ({ bground }) => {
	return (
		<div className="bground-container">
			<h3 className="b-name">{bground.backgroundName}</h3>
			<h4 className="b-morale">{bground.backgroundMorale}</h4>
			<h4 className="b-desc">{bground.backgroundDescription}</h4>
			<div className="img-container">
				<img className="img" src={bground.backgroundImg} alt="backgound img" />
			</div>
		</div>
	);
};

export default BGround;
