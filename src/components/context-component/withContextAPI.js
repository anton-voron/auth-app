import React from 'react';

import {withLoginAPI, withChildFunction, HocLoggedIn} from '../HOC/';
import Registration from '../Registration/Registration.js';
import Vacancy from '../Vacancy/Vacancy.js';
import UserData, { Record } from '../UserData/UserData.js';

const mapMethodsToRegistration = (loginAPI) => {
	return {
		submitReg: loginAPI.submitReg,
		textValidator: loginAPI.textValidator,
		loginValidator: loginAPI.loginValidator,
		passwordValidator: loginAPI.passwordValidator,
		emailValidator: loginAPI.emailValidator,
	}
}

const mapMethodsToVacancy = (loginAPI) => {
	return {
		getJSON: loginAPI.getJSON,
		getDepartment: loginAPI.getDepartment,
		getVacancy: loginAPI.getVacancy,
		onJobSubmit: loginAPI.onJobSubmit,
		getUserData: loginAPI.getUserData
	}
}

const mapMethodsToUser = (loginAPI) => {
	return {
		getUserData: loginAPI.getUserData,
		isLoggedIn: loginAPI.isLoggedIn
	}
}


const personRender = () => { 
					return ([
                      <Record field = "userFirstName"  label="Name" />, 
                      <Record field = "userLogin"  label="Login" />,
                      <Record field = "userEmail"  label="Email" />,
                      <Record field = "userCompany"  label="Company" />,
                      <Record field = "companyDepartment"  label="Department" />,
                      <Record field = "vacancy"  label="Job Title" />
                     ]);
				};

const RegPage = withLoginAPI(mapMethodsToRegistration)(Registration);
const VacPage = withLoginAPI(mapMethodsToVacancy)(Vacancy);
const UserPage = withLoginAPI(mapMethodsToUser)
								 (withChildFunction (
								 	(UserData), personRender())
							 	 );

export {
	RegPage,
	VacPage,
	UserPage
}