import React, { useState, useEffect } from "react";
import facade from "../../apiFacade";

const CSheet = ({ characterId }) => {
	const [character, setCharacter] = useState([]);

	useEffect(() => {
		facade.getAllBackgrounds(characterId, setCharacter);
	}, [characterId]);

	return (
		<div>
			<h3>Character Sheet</h3>
			<div>{character}</div>
		</div>
	);
};

export default CSheet;

// const characterObject = {
//     id: 0,
//     characterName: "",
//     characterLevel: 0,
//     characterXp: 0,
//     characterHp: 0,
//     characterArmor: 0,
//     characterAngles: 0,
//     userName: "",
//     backgroundDTO: {
//       id: 0,
//       "backgroundName": "Samarit",
//       "backgroundMorale": "Pragmatisk Ideolog",
//       "backgroundDescription": "Omvandrende Samaritter plejer tit deres erhverv i krigshærgede eller lovløse områder. Oftest er de tidligere læger fra mindre landsbyer, eller simple godhjertede sjæle der er drevet til at hjælpe deres næste.",
//       "backgroundImg": "https://cdn.discordapp.com/attachments/910894864265269318/966585559004885012/Samarit.png",
//       "backgroundAbilities": [
//         {
//           "id": 3,
//           "backgroundAbilityName": "Ræk mig den kniv…",
//           "backgroundAbilityDescription": "Samaritten kan altid udøve Seriøs Lægehjælp så længe de er i besiddelse af almene medicinale effekter, bandager, gazebind etc."
//         },
//         {
//           "id": 4,
//           "backgroundAbilityName": "Hvor gør det ondt?",
//           "backgroundAbilityDescription": "Samaritten kan, uden brug af Lægevidenskab, altid identificere eller opdage hvis en medspiller er forgiftet, syg eller er såret."
//         }
//       ]
//     },
//     "characterSkillDTO": {
//       "id": 2,
//       "strength": 1,
//       "endurance": 9,
//       "intelligence": 7,
//       "finesse": 10,
//       "perception": 6,
//       "charisma": 1,
//       "initiative": 1,
//       "nerves": 7,
//       "melee": 5,
//       "throwingString": 4,
//       "firearms": 10,
//       "sneak": 2,
//       "flatter": 5,
//       "lie": 4,
//       "intimidate": 7,
//       "trade": 2,
//       "repair": 5,
//       "traps": 5,
//       "survival": 2,
//       "crafting": 5,
//       "science": 5,
//       "alchemy": 10,
//       "medical": 4,
//       "history": 7
//     }
//   }
