import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import LogIn from '../../containers/LogIn';
import Register from '../../containers/Register';

const Header = () => {
		return (
			<div>
				<h1>Backoffice</h1>
				<ul>
					<li>
						<Link to="/LogIn">Sign In</Link>
					</li>
					<li>
						<Link to="/Register">Sign Up</Link>
					</li>
				</ul>

			</div>
			)
}


export default Header;