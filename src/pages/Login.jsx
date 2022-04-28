import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginBox from "../components/Login/LoginBox";
import facade from "../apiFacade";

const Login = ({ loggedIn, setLoggedIn, assignRole, setUsername }) => {
	const init = { username: "", password: "" };
	const [loginCredentials, setLoginCredentials] = useState(init);

	const onChange = (evt) => {
		setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value });
	};

	const performLogin = () => {
		login(loginCredentials.username, loginCredentials.password);
	};

	const login = (user, pass) => {
		facade.login(user, pass, assignRole).then((res) => {
			setLoggedIn(true);
			setUsername(user);
			navigate("/");
		});
	};

	const navigate = useNavigate();

	return (
		<div>
			<LoginBox loggedIn={loggedIn} onChange={onChange} performLogin={performLogin} />
		</div>
	);
};

export default Login;

{
	/* <form onChange={onChange}>
				{!loggedIn ? (
					<div>
						<h2>Login</h2>
						<input placeholder="User Name" id="username" />
						<input placeholder="Password" id="password" />
						<button onClick={performLogin}>Login</button>
					</div>
				) : (
					<div>
						<h2>You are logged in as {username}</h2>
						<button onClick={performLogout}>Logout</button>
					</div>
				)}
			</form> */
}
