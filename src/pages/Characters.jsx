import React, { useEffect, useState } from "react";
import facade from "../apiFacade";
import CharactersScreen from "../components/Characters/CharactersScreen";

const Characters = ({ username, setCharacterId }) => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		if (username !== "") {
			facade.getUserCharacters(username, setCharacters);
		}
	}, [username]);

	return (
		<>
			{(() => {
				if (username !== "") {
					return (
						<div>
							<CharactersScreen characters={characters} setCharacterId={setCharacterId} />
						</div>
					);
				} else {
					return (
						<div style={{ height: "100vh", background: "#006983", textAlign: "center", paddingTop: "100px" }}>
							<h3>You must be logged in to view this page</h3>
						</div>
					);
				}
			})()}
		</>
	);
};

export default Characters;
