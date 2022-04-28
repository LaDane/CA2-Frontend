import React from "react";
import Character from "./Character";
import "./CharacterScreen.css";

const CharactersScreen = ({ characters, setCharacterId }) => {
	return (
		<div className="charactersscreen-container">
			<br />
			{characters.map((character) => {
				return <Character key={character.id} character={character} setCharacterId={setCharacterId} />;
			})}
		</div>
	);
};

export default CharactersScreen;
