import React, { useEffect, useState } from "react";
import facade from "../apiFacade";
import BGrounds from "../components/Backgrounds/BGrounds";

const Backgrounds = () => {
	const [backgrounds, setBackgrounds] = useState([]);

	useEffect(() => {
		facade.getAllBackgrounds(setBackgrounds);
	}, []);

	return (
		<div className="Backgrounds" style={{ background: "#006983" }}>
			<BGrounds backgrounds={backgrounds} />
		</div>
	);
};

export default Backgrounds;
