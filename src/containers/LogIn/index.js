import React from 'react';

import Email from '../../components/trumail';
import Password from '../../components/password';
import Button from '../../components/button';

class LogIn extends React.Component{
	constructor(props){
		super(props);
		this.handleClick=this.handleClick.bind(this);
		this.state = {
			email:"bojana@gmail.com",
			password: "milosevic90",

		}
	}


	handleClick(e){
		e.preventDefault();
		// debugger;
		
		console.log(this.state.email);

	}
	render(){
		return(
			<div>
				<Email />
				<Password />
				<Button name='Sign in' onClick={this.handleClick}/>
			</div>
			);
	}
}



export default LogIn;