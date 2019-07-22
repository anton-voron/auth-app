import React from 'react';
import Input from '../Input/Input.js';

const Email = ({...rest}) => (
	<Input 
		name="userEmail"
		label="Email"
		type="text"
		symbol = "@example.com"
		required={true}
		{...rest} />
);
export default Email;