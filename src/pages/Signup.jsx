import React from "react";
import SignupBox from "../components/Signup/SignupBox";
import { useState } from "react";
import facade from "../apiFacade";

const Signup = () => {
	const init = { username: "", password: "" };
	const [signupCredentials, setSignupCredentials] = useState(init);
	const [responseText, setResponseText] = useState("");

	const onChange = (evt) => {
		setSignupCredentials({ ...signupCredentials, [evt.target.id]: evt.target.value });
	};

	const performSignup = (evt) => {
		signup(signupCredentials.username, signupCredentials.password);
	};

	const signup = (user, pass) => {
		facade.signup(user, pass, setResponseText);
	};

	return (
		<div>
			<SignupBox onChange={onChange} performSignup={performSignup} responseText={responseText} />
		</div>
	);
};

export default Signup;
