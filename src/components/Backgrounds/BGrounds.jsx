import React from "react";
import BGround from "./BGround";
import "./BGrounds.css";

const BGrounds = ({ backgrounds }) => {
	return (
		<div className="container">
			{backgrounds.map((bground) => {
				return <BGround key={bground.id} bground={bground} />;
			})}
		</div>
	);
};

export default BGrounds;
