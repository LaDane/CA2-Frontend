import React from "react";
// import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = ({ toggle, userRole, logout }) => {
	return (
		<>
			{(() => {
				if (userRole === "user") {
					return (
						<Nav>
							<NavLink to="/">
								<img className="logo-img" src={require("../../images/logo.png")} alt="Logo" />
							</NavLink>
							<Bars onClick={toggle} />
							<NavMenu>
								<NavLink to="/characters" activestyle="true">
									Characters
								</NavLink>
								<NavLink to="/character-sheet" activestyle="true">
									Character Sheet
								</NavLink>
								<NavLink to="/create-character" activestyle="true">
									Create Character
								</NavLink>
							</NavMenu>
							<NavBtn>
								<NavBtnLink to="/" onClick={logout}>
									Logout
								</NavBtnLink>
							</NavBtn>
						</Nav>
					);
				} else if (userRole === "admin") {
					return (
						<Nav>
							<NavLink to="/">
								<img className="logo-img" src={require("../../images/logo.png")} alt="Logo" />
							</NavLink>
							<Bars onClick={toggle} />
							<NavMenu>
								<NavLink to="/users" activestyle="true">
									Users
								</NavLink>
								<NavLink to="/characters" activestyle="true">
									Characters
								</NavLink>
							</NavMenu>
							<NavBtn>
								<NavBtnLink to="/" onClick={logout}>
									Logout
								</NavBtnLink>
							</NavBtn>
						</Nav>
					);
				} else {
					return (
						<Nav>
							<NavLink to="/">
								<img className="logo-img" src={require("../../images/logo.png")} alt="Logo" />
							</NavLink>
							<Bars onClick={toggle} />
							<NavMenu>
								<NavLink to="/about" activestyle="true">
									About
								</NavLink>
								<NavLink to="/backgrounds" activestyle="true">
									Backgrounds
								</NavLink>
								<NavLink to="/signup" activestyle="true">
									Signup
								</NavLink>
							</NavMenu>
							<NavBtn>
								<NavBtnLink to="/login">Login</NavBtnLink>
							</NavBtn>
						</Nav>
					);
				}
			})()}

			{/* <Nav>
				<NavLink to="/">
					<img className="logo-img" src={require("../../images/logo.png")} alt="Logo" />
				</NavLink>

				<Bars onClick={toggle} />

				<NavMenu>
					<NavLink to="/about" activestyle="true">
						About
					</NavLink>

					<NavLink to="/characters" activestyle="true">
						Characters
					</NavLink>
					<NavLink to="/character-sheet" activestyle="true">
						Character Sheet
					</NavLink>
					<NavLink to="/create-character" activestyle="true">
						Create Character
					</NavLink>

					<NavLink to="/signup" activestyle="true">
						Signup
					</NavLink>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="/login">Login</NavBtnLink>
				</NavBtn>
			</Nav> */}
		</>
	);
};

export default Navbar;

{
	/* <div>
<nav>
    <Link to="/">Welcome</Link> | <Link to="/login">Login</Link> | <Link to="/user">User</Link> | <Link to="/admin">Admin</Link> | <Link to="/data">Data</Link>
</nav>
<Outlet />
</div> */
}
