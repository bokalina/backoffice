import React, { Component } from 'react';

const Button = (props) => {
	return(
		<div>
			<button type="submit" onClick={props.onClick} >{props.name}</button>
		</div>
	);
}

export default Button;