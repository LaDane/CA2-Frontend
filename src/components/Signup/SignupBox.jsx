import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./SignupBox.css";

const SignupBox = ({ onChange, performSignup, responseText }) => {
	const [usernameInput, setUsernameInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");

	const onClick = (evt) => {
		evt.preventDefault();
		performSignup();
		setUsernameInput("");
		setPasswordInput("");
	};

	return (
		<div className="signup-box">
			<div className="wrapper">
				<header>Signup</header>
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
					<button className="signup-btn" onClick={onClick}>
						Signup
					</button>
					<p className="status-text">{responseText}</p>
				</form>
			</div>
		</div>
	);
};

export default SignupBox;
