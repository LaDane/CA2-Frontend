import Navbar from "./components/Navbar/Navbar";
import "./styling/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Admin from "./pages/old/Admin";
// import User from "./pages/User";
// import Welcome from "./pages/Welcome";
// import Data from "./pages/Data";
import { useEffect, useState } from "react";
import facade from "./apiFacade";

import Home from "./pages/Home";
import About from "./pages/About";
import Backgrounds from "./pages/Backgrounds";

import Login from "./pages/Login";
import Characters from "./pages/Characters";
import CharacterSheet from "./pages/CharacterSheet";
import CreateCharacter from "./pages/CreateCharacter";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import Sidebar from "./components/Sidebar/Sidebar";
import Setup from "./pages/Setup";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [userRole, setUserRole] = useState("");
	const [username, setUsername] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [characterId, setCharacterId] = useState(0);

	// Login / Logout
	const logout = () => {
		facade.logout();
		setLoggedIn(false);
		setUserRole("");
		setUsername("");
		setCharacterId(0);
	};

	// Role
	const assignRole = (returnedRole) => {
		setUserRole(returnedRole);
	};

	// Navbar hamburger menu
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="App">
			<Router basename="/dnd">
				<Sidebar isOpen={isOpen} toggle={toggle} />
				<Navbar toggle={toggle} userRole={userRole} logout={logout} />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/backgrounds" element={<Backgrounds />} />

					<Route path="/characters" element={<Characters username={username} setCharacterId={setCharacterId} />} />
					<Route path="/character-sheet" element={<CharacterSheet characterId={characterId} />} />
					<Route path="/create-character" element={<CreateCharacter username={username} />} />

					<Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} assignRole={assignRole} setUsername={setUsername} />} />
					<Route path="/signup" element={<Signup />} />

					<Route path="/users" element={<Users />} />

					<Route path="/setup" element={<Setup />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
