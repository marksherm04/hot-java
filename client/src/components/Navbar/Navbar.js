import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import hotJavaDark from './hotJavaDark.jpg';


const Navbar = () => {
	const logout = event => {
		event.preventDefault();
		Auth.logout();
	};

	return (
		<header className="bg-secondary mb-4 py-2 flex-row align-center">
			<div className="container flex-row justify-space-between-lg justify-center align-center">

				<Link to="/">
					<div className="logo">
						<img src={hotJavaDark} alt="Hot Java Logo" />
					</div>
				</Link>
				<nav className="text-center">
					{Auth.loggedIn() ? (
						<>
							<Link to="/profile">My Bevs</Link>
							<a href="/" onClick={logout}>
								Logout
							</a>
						</>
					) : (
						<>
							<Link to="/login">Login</Link>
							<Link to="/signup">Signup</Link>
						</>
					)}
				</nav>
			</div>
		</header>
	);
};

export default Navbar;