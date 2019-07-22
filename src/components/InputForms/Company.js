import React from 'react';
import Input from '../Input/Input.js';

const Company = ({...rest}) => (
	<Input
		name = "userCompany" 
		label="Company"
		type="text"
		symbol = "LLC"
		{...rest} />
);
export default Company;