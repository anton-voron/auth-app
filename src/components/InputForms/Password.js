import React from 'react';
import Input from '../Input/Input.js';

const Login = ({...rest}) => (
	<Input 
		label="Password"
		type="password"
		symbol = "*****"
		required={true}
		{...rest} />
);
export default Login;