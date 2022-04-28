import React from "react";
import CSheet from "../components/CharacterSheet/CSheet";

const CharacterSheet = ({ characterId }) => {
	return (
		<div>
			<CSheet characterId={characterId} />
		</div>
	);
};

export default CharacterSheet;
