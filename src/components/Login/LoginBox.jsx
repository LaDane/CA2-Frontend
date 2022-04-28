import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./LoginBox.css";

const LoginBox = ({ loggedIn, onChange, performLogin }) => {
	const [usernameInput, setUsernameInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");

	const onClick = (evt) => {
		evt.preventDefault();
		performLogin();
		setUsernameInput("");
		setPasswordInput("");
	};

	return (
		<div className="login-box">
			<div className="wrapper">
				<header>Login</header>
				<form onChange={onChange}>
					<div className="field email">
						<div className="input-area">
							<input
								type="text"
								placeholder="Username"
								id="username"
								value={usernameInput}
								onChange={(e) => {
									setUsernameInput(e.target.value);
								}}
							/>
							<i className="icon">
								<FaEnvelope />
							</i>
						</div>
					</div>
					<div className="field password">
						<div className="input-area">
							<input
								type="password"
								placeholder="Password"
								id="password"
								value={passwordInput}
								onChange={(e) => {
									setPasswordInput(e.target.value);
								}}
							/>
							<i className="icon">
								<FaLock />
							</i>
						</div>
					</div>
					<button className="login-btn" onClick={onClick}>
						Login
					</button>
					{/* <p className="status-text">{responseText}</p> */}
				</form>
			</div>
		</div>
	);
};

export default LoginBox;
