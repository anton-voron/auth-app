import withLoginAPI from '../HOC/withLoginAPI.js';
import Registration from '../Registration/Registration.js';
import Vacancy from '../Vacancy/Vacancy.js';

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
	}
}

const RegPage = withLoginAPI(mapMethodsToRegistration)(Registration);
const VacPage = withLoginAPI(mapMethodsToVacancy)(Vacancy);

export {
	RegPage,
	VacPage
}