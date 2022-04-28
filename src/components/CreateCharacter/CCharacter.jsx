import React, { useEffect, useState } from "react";
import { FaDiceD20 } from "react-icons/fa";
import facade from "../../apiFacade";
import "./CCharacter.css";

const CCharacter = ({ username }) => {
	const [backgrounds, setBackgrounds] = useState([]);

	const [background, setBackground] = useState(0);
	const [name, setName] = useState("");

	const [strength, setStrength] = useState(0);
	const [endurance, setEndurance] = useState(0);
	const [intelligence, setIntelligence] = useState(0);
	const [finesse, setFinesse] = useState(0);
	const [perception, setPerception] = useState(0);
	const [charisma, setCharisma] = useState(0);
	const [initiative, setInitiative] = useState(0);
	const [nerves, setNerves] = useState(0);

	const [melee, setMelee] = useState(0);
	const [throwingString, setThrowingString] = useState(0);
	const [firearms, setFirearms] = useState(0);
	const [sneak, setSneak] = useState(0);

	const [flatter, setFlatter] = useState(0);
	const [lie, setLie] = useState(0);
	const [intimidate, setIntimidate] = useState(0);
	const [trade, setTrade] = useState(0);

	const [repair, setRepair] = useState(0);
	const [traps, setTraps] = useState(0);
	const [survival, setSurvival] = useState(0);
	const [crafting, setCrafting] = useState(0);

	const [science, setScience] = useState(0);
	const [alchemy, setAlchemy] = useState(0);
	const [medical, setMedical] = useState(0);
	const [history, setHistory] = useState(0);

	useEffect(() => {
		facade.getAllBackgrounds(setBackgrounds);
	}, []);

	const rollDice = (evt, dice, setValue) => {
		evt.preventDefault();
		facade.getRoll(dice, setValue);
	};

	const getBackground = () => {
		let b = background;
		return parseInt(b);
	};

	const createCharacter = (evt) => {
		evt.preventDefault();
		const data = {
			characterName: name,
			characterLevel: 1,
			characterXp: 1,
			characterHp: 10,
			characterArmor: 0,
			characterAngles: 4,
			userName: username,
			backgroundDTO: {
				id: getBackground(),
			},
			characterSkillDTO: {
				strength: strength,
				endurance: endurance,
				intelligence: intelligence,
				finesse: finesse,
				perception: perception,
				charisma: charisma,
				initiative: initiative,
				nerves: nerves,
				melee: melee,
				throwingString: throwingString,
				firearms: firearms,
				sneak: sneak,
				flatter: flatter,
				lie: lie,
				intimidate: intimidate,
				trade: trade,
				repair: repair,
				traps: traps,
				survival: survival,
				crafting: crafting,
				science: science,
				alchemy: alchemy,
				medical: medical,
				history: history,
			},
		};
		facade.createCharacter(data);
		resetFields();
	};

	const resetFields = () => {
		setBackground(0);
		setName("");
		setStrength(0);
		setEndurance(0);
		setIntelligence(0);
		setFinesse(0);
		setPerception(0);
		setCharisma(0);
		setInitiative(0);
		setNerves(0);
		setMelee(0);
		setThrowingString(0);
		setFirearms(0);
		setSneak(0);
		setFlatter(0);
		setLie(0);
		setIntimidate(0);
		setTrade(0);
		setRepair(0);
		setTraps(0);
		setSurvival(0);
		setCrafting(0);
		setScience(0);
		setAlchemy(0);
		setMedical(0);
		setHistory(0);
	};

	return (
		<form>
			<div className="cchar">
				<div className="cchar-wrapper">
					<div className="cchar-container">
						<div className="cchar-title">
							<p className="cchar-title-text">
								<b>Character Creation</b>
							</p>
						</div>

						<div className="cchar-background-ddown">
							<select
								className="cchar-background-ddown-input"
								name="background"
								id="background"
								defaultValue={"DEFAULT"}
								onChange={(e) => {
									setBackground(e.target.value);
								}}
							>
								<option value="DEFAULT" disabled hidden>
									Vælg baggrund
								</option>
								{backgrounds.map((background) => (
									<option key={background.id} value={background.id}>
										{background.backgroundName}
									</option>
								))}
							</select>
						</div>
						<div className="cchar-name">
							<input
								className="cchar-name-input"
								type="text"
								id="name"
								name="name"
								placeholder="Karakter Navn"
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
						</div>

						<div className="cchar-komp">
							<p className="cchar-skill-title">
								<b>Kompetencer (D10)</b>
							</p>
						</div>

						<div className="cchar-strength">
							<p className="cchar-skill-label">Strength</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="strength"
								name="strength"
								value={strength}
								onChange={(e) => {
									setStrength(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d10", setStrength);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>
						<div className="cchar-endurance">
							<p className="cchar-skill-label">Udholdenhed</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="endurance"
								name="endurance"
								value={endurance}
								onChange={(e) => {
									setEndurance(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d10", setEndurance);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>
						<div className="cchar-intelligence">
							<p className="cchar-skill-label">Intelligens</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="intelligence"
								name="intelligence"
								value={intelligence}
								onChange={(e) => {
									setIntelligence(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d10", setIntelligence);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>
						<div className="cchar-finesse">
							<p className="cchar-skill-label">Finesse</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="finesse"
								name="finesse"
								value={finesse}
								onChange={(e) => {
									setFinesse(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d10", setFinesse);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>
						<div className="cchar-perception">
							<p className="cchar-skill-label">Perception</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="perception"
								name="perception"
								value={perception}
								onChange={(e) => {
									setPerception(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d10", setPerception);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>
						<div className="cchar-charisma">
							<p className="cchar-skill-label">Karisma</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="charisma"
								name="charisma"
								value={charisma}
								onChange={(e) => {
									setCharisma(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d10", setCharisma);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>
						<div className="cchar-initiative">
							<p className="cchar-skill-label">Initiativ</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="initiative"
								name="initiative"
								value={initiative}
								onChange={(e) => {
									setInitiative(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d10", setInitiative);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>
						<div className="cchar-nerves">
							<p className="cchar-skill-label">Nerver</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="nerves"
								name="nerves"
								value={nerves}
								onChange={(e) => {
									setNerves(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d10", setNerves);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>

						<div className="cchar-skills">
							<p className="cchar-skill-title">
								<b>Evner (D12)</b>
							</p>
						</div>

						<div className="cchar-fight-skills">
							<p className="cchar-skill-sub-title">
								<b>Kamp Evner</b>
							</p>
						</div>
						<div className="cchar-melee">
							<p className="cchar-skill-label">Nærkamp</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="melee"
								name="melee"
								value={melee}
								onChange={(e) => {
									setMelee(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d12", setMelee);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>
						<div className="cchar-throwing-string">
							<p className="cchar-skill-label">Kaste/Strenge</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="throwing-string"
								name="throwing-string"
								value={throwingString}
								onChange={(e) => {
									setThrowingString(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d12", setThrowingString);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>
						<div className="cchar-firearms">
							<p className="cchar-skill-label">Skydevåben</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="firearms"
								name="firearms"
								value={firearms}
								onChange={(e) => {
									setFirearms(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d12", setFirearms);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>
						<div className="cchar-sneak">
							<p className="cchar-skill-label">Snig</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="sneak"
								name="sneak"
								value={sneak}
								onChange={(e) => {
									setSneak(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d12", setSneak);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>

						<div className="cchar-social-skills">
							<p className="cchar-skill-sub-title">
								<b>Sociale Evner</b>
							</p>
						</div>
						<div className="cchar-flatter">
							<p className="cchar-skill-label">Smigre</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="flatter"
								name="flatter"
								value={flatter}
								onChange={(e) => {
									setFlatter(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d12", setFlatter);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>
						<div className="cchar-lie">
							<p className="cchar-skill-label">Løgn</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="lie"
								name="lie"
								value={lie}
								onChange={(e) => {
									setLie(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d12", setLie);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>
						<div className="cchar-intimidate">
							<p className="cchar-skill-label">Intimidere</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="intimidate"
								name="intimidate"
								value={intimidate}
								onChange={(e) => {
									setIntimidate(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d12", setIntimidate);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>
						<div className="cchar-trade">
							<p className="cchar-skill-label">Handel</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="trade"
								name="trade"
								value={trade}
								onChange={(e) => {
									setTrade(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d12", setTrade);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>

						<div className="cchar-profession-skills">
							<p className="cchar-skill-sub-title">
								<b>Professions Evner</b>
							</p>
						</div>
						<div className="cchar-repair">
							<p className="cchar-skill-label">Reparation</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="repair"
								name="repair"
								value={repair}
								onChange={(e) => {
									setRepair(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d12", setRepair);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>
						<div className="cchar-traps">
							<p className="cchar-skill-label">Fælder</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="traps"
								name="traps"
								value={traps}
								onChange={(e) => {
									setTraps(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d12", setTraps);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>
						<div className="cchar-survival">
							<p className="cchar-skill-label">Overlevelse</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="survival"
								name="survival"
								value={survival}
								onChange={(e) => {
									setSurvival(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d12", setSurvival);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>
						<div className="cchar-crafting">
							<p className="cchar-skill-label">Håndværk</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="crafting"
								name="crafting"
								value={crafting}
								onChange={(e) => {
									setCrafting(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d12", setCrafting);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>

						<div className="cchar-esoteric-skills">
							<p className="cchar-skill-sub-title">
								<b>Esoteriske Evner</b>
							</p>
						</div>
						<div className="cchar-science">
							<p className="cchar-skill-label">Videnskab</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="science"
								name="science"
								value={science}
								onChange={(e) => {
									setScience(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d12", setScience);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>
						<div className="cchar-alchemy">
							<p className="cchar-skill-label">Healing/Alkymi</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="alchemy"
								name="alchemy"
								value={alchemy}
								onChange={(e) => {
									setAlchemy(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d12", setAlchemy);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>
						<div className="cchar-medical">
							<p className="cchar-skill-label">Lægevidenskab</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="medical"
								name="medical"
								value={medical}
								onChange={(e) => {
									setMedical(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d12", setMedical);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>
						<div className="cchar-history">
							<p className="cchar-skill-label">Historie</p>
							<input
								className="cchar-skill-input"
								type="number"
								id="history"
								name="history"
								value={history}
								onChange={(e) => {
									setHistory(e.target.value);
								}}
							/>
							<br />
							<button
								className="cchar-dice-btn"
								onClick={(e) => {
									rollDice(e, "d12", setHistory);
								}}
							>
								<p className="cchar-dice-icon">
									<FaDiceD20 />
								</p>
							</button>
						</div>

						<button
							className="cchar-create-btn"
							onClick={(e) => {
								createCharacter(e);
							}}
						>
							Create
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default CCharacter;
