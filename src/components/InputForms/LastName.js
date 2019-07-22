import React from 'react';
import Input from '../Input/Input.js';

const LastName = ({...rest}) => (
	<Input 
		name="userLastName"
		label="Last Name"
		type="text"
		symbol = "Surname"
		required={true}
		{...rest} />
);
export default LastName;