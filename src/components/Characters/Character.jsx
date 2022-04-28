import React from "react";
import { useNavigate } from "react-router-dom";
import "./Character.css";

const Character = ({ character, setCharacterId }) => {
	const onClick = (id) => {
		console.log(id);
		setCharacterId(id);
		navigate("/character-sheet");
	};

	const navigate = useNavigate();

	return (
		<div>
			<br />
			<div className="character-container">
				<div className="character-img">
					<img id="background-img" src={character["backgroundDTO"]["backgroundImg"]} alt="Character" />
				</div>

				<div id="character-name">
					<p className="character-label">Character Name</p>
					<h4 className="character-text">{character.characterName}</h4>
				</div>
				<div id="character-background">
					<p className="character-label">Background</p>
					<h4 className="character-text">{character.backgroundDTO.backgroundName}</h4>
				</div>
				<div id="character-morale">
					<p className="character-label">Morale</p>
					<h4 className="character-text">{character.backgroundDTO.backgroundMorale}</h4>
				</div>
				<div id="character-angles">
					<p className="character-label">Guardian Angles</p>
					<h4 className="character-text">{character.characterAngles}</h4>
				</div>

				<div id="character-hp">
					<p className="character-label">Health Points</p>
					<h4 className="character-text">{character.characterHp}</h4>
				</div>
				<div id="character-armor">
					<p className="character-label">Armor</p>
					<h4 className="character-text">{character.characterArmor}</h4>
				</div>
				<div id="character-level">
					<p className="character-label">Level</p>
					<h4 className="character-text">{character.characterLevel}</h4>
				</div>
				<div id="character-xp">
					<p className="character-label">Experience</p>
					<h4 className="character-text">{character.characterXp}</h4>
				</div>
				<div className="character-btn-container">
					<button
						className="character-btn"
						onClick={(e) => {
							onClick(e, character.id);
						}}
					>
						Character Sheet
					</button>
				</div>
			</div>
		</div>
	);
};

export default Character;
