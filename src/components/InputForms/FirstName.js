import React from 'react';
import Input from '../Input/Input.js';

const FirstName = ({...rest}) => (
	<Input 
		name="userFirstName"
		label="First Name"
		type="text"
		symbol = "Name"
		required={true}
		{...rest} />
);
export default FirstName;