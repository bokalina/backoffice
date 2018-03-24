import React from 'react';

import Email from '../../components/trumail';
import Password from '../../components/password';
import Username from '../../components/username';
import Button from '../../components/button';

class Register extends React.Component{
	constructor(props){
		super(props);
		this.handleClick=this.handleClick.bind(this);
		this.state = {
			username:""
			email:""
			password:""
		}
	}

	handleClick(e){
		e.preventDefault();
		// debugger;
		console.log("click");

	}

	componentDidMount(){
		fetch('https://cors.io/?https://trumail.io/json/abc@gmail.com')
    .then(
        response => response.json()
    )
    .then(
        myJson => {
            console.log(myJson)
        }
    )
    .catch(
        error => console.error(error)
    );
	}
	render(){
		return(
			<div>
				<Username />
				<Email />
				<Password />
				<Button name='Sign Up' onClick={this.handleClick}/>
			</div>
			);
	}
}

export default Register;