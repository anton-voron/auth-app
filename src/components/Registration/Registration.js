import React, {Component} from 'react';
import {
	FirstName,
	LastName,
	Login,
	Email,
	Company,
	Password,
} from '../InputForms/';
import { withRouter } from 'react-router-dom';

class Registration extends Component {

	state = {
		userFirstName: '',
		userLastName: '',
		userLogin: '',
		userEmail: '',
		userCompany: '',
		userPassword: '',
		confirmPassword: '',
		error: {
				errorFirstName: false,
				errorLastName: false,
				errorLogin: false,
				errorEmail: false,
				errorPassword: false,
				errorConfirmPassword: false,
			}
	}

	onChange = (evt) => {
		const name = evt.target.name;
		const value = evt.target.value;
		this.setState({[name]:value},
									() => {this.onBlur(name, value)});
	}

	onBlur = (name, value) => {
		switch (name) {
			case 'userFirstName':{
							const validator = this.props.textValidator(value);
							const error = Object.assign({}, this.state.error);
							error.errorFirstName = validator;
							this.setState({error}) 
							break;
						};
			case 'userLastName':{
							const validator = this.props.textValidator(value);
							const error = Object.assign({}, this.state.error);
							error.errorLastName = validator;
							this.setState({error}) 
							break;
						};
			case 'userLogin':{			
							const validator = (value.length >= 4) ?  true :  'Login is too short';
							const error = Object.assign({}, this.state.error);
							error.errorLogin = validator;
							this.setState({error}) 
							break;
						};
			case 'userEmail':{
							const validator = this.props.emailValidator(value);
							const error = Object.assign({}, this.state.error);
							error.errorEmail = validator;
							this.setState({error}) 
							break;
						};
			case 'userPassword':{
							const validator = this.props.passwordValidator(value);
							const error = Object.assign({}, this.state.validator);
							error.errorPassword = validator;
							this.setState({error}) 
							break;
						};
			case 'confirmPassword':{
							const validator = this.props.passwordValidator(value);
							const error = Object.assign({}, this.state.validator);
							error.errorConfirmPassword = validator;
							this.setState({error}) 
							break;
						};
			default: {
				break;
			}
		}
	}

	submitReg = (evt) => {
		evt.preventDefault();
		const {error, ...fields} = this.state;
		const verdict = Object.keys(error).every(value => error[value] === true);
		const properties = Object.keys(fields).map(value => fields[value]);
		if(verdict) {
			const res = this.props.submitReg(...properties);
			if(res) {
				this.props.history.push('/vacancy')
			}
		} else {
			alert("You have to fill all fields");
		}
	}
	render() {
		const {userFirstName, userLastName, userLogin, userEmail, userCompany, userPassword, confirmPassword} = this.state;
		const {error:{errorFirstName, errorLastName, errorLogin, errorEmail, errorPassword, errorConfirmPassword}} = this.state;
		return (
			<section className="container wrapper-central section-size">
			<form className="bg-light col-md-8 wrapper-central"
				onSubmit = {this.submitReg}>
				<h2 className="title mb-3">Register a new user</h2>
				<div className="row justify-content-center">
					<FirstName 
						onChange = {this.onChange} 
						onBlur={this.onBlur}
						value={userFirstName}
						error={errorFirstName}/>

					<LastName 
						onChange = {this.onChange} 
						onBlur={this.onBlur}
						value={userLastName}
						error={errorLastName}/>
				    <Login 
				    	onChange = {this.onChange} 
						onBlur={this.onBlur}
						value={userLogin}
						error={errorLogin}/>
				    <Email 
				    	onChange = {this.onChange} 
						onBlur={this.onBlur}
						value={userEmail}
						error={errorEmail}/>
					<Company 
				    	onChange = {this.onChange} 
						onBlur={this.onBlur}
						value={userCompany}/>
				    <Password 
				    	name="userPassword" 
				    	onChange = {this.onChange} 
						onBlur={this.onBlur}
						value={userPassword}
						error={errorPassword}/>
				    <Password 
				    	name="confirmPassword" 
				    	onChange = {this.onChange} 
						onBlur={this.onBlur}
						value={confirmPassword}
						error={errorConfirmPassword}/>
	  			</div>
	  			<button type= "submit" className="btn btn-primary"
						onSubmit = {this.submitReg}> 
							Submit 
				</button>
  			</form>
  			</section>
		);
	}
}

export default withRouter(Registration);