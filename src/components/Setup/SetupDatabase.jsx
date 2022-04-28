import React, { useState } from "react";
import facade from "../../apiFacade";

const SetupDatabase = () => {
	const [responseText, setResponseText] = useState("");

	const onClick = (evt) => {
		evt.preventDefault();
		facade.setupDatabase(setResponseText);
	};

	return (
		<div>
			<h3>
				<b>Setup Database</b>
			</h3>
			<br /> <br />
			<button onClick={onClick}>Setup</button>
			<br />
			<p>{responseText}</p>
		</div>
	);
};

export default SetupDatabase;
