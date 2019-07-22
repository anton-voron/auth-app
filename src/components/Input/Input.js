import React from 'react';

const Input = (props) => {
	const {name, label, type, symbol, value, onBlur, onChange, error, required} = props;
	let classNames = 'form-control';
	if(error === null ) {
 		classNames = 'form-control'
 	} else if(error === true) {
 		classNames += " is-valid";
 	}
 	else if(error) {
 		classNames += " is-invalid";
 	}
	return (
		<div className ="d-flex flex-column">
			<div className="input-group mb-3">
				<div className="input-group-prepend">
				   	<span className="input-group-text">{symbol}</span>
				 </div>
				<input 
					className = {classNames}

					name={name}
					placeholder={label}
					type={type}
					aria-label={label} 
	 
					onChange={onChange} 
					onBlur={onBlur}
					value={value}
					required = {required}
				/>
				
			</div>
			<div className="">
					{error}
			</div>
		</div>
	);
}

export default Input;