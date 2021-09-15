import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';

async function loginUser(credentials) {
	return fetch('http://localhost:3000/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(credentials)
	})
		.then(data => data.json())
}

export default function Login({ setToken }) {
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = async e => {
		e.preventDefault();
		const token = await loginUser({
			username,
			password
		});
		setToken(token);
	}

	return (
		<section>
			
		<div className="login-wrapper">
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<label>
					<p>Username</p>
					<input type="text" onChange={e => setUserName(e.target.value)} />
				</label>
				<label>
					<p>Password</p>
					<input type="password" onChange={e => setPassword(e.target.value)} />
				</label>
				<div>
					<br></br>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
		</section>
	);
}

Login.propTypes = {
	setToken: PropTypes.func.isRequired
};