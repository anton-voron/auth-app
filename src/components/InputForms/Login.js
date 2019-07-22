import React from 'react';
import Input from '../Input/Input.js';

const Login = ({...rest}) => (
	<Input 
		name="userLogin"
		label="Login"
		type="text"
		symbol = "@"
		required={true}
		{...rest} />
);
export default Login;