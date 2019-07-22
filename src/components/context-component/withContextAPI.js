import withLoginAPI from '../HOC/withLoginAPI.js';
import Registration from '../Registration/Registration.js';

const mapMethodsToRegistration = (loginAPI) => {
	return {
		submitReg: loginAPI.submitReg,
		textValidator: loginAPI.textValidator,
		loginValidator: loginAPI.loginValidator,
		passwordValidator: loginAPI.passwordValidator,
		emailValidator: loginAPI.emailValidator,
	}
}

const RegPage = withLoginAPI(mapMethodsToRegistration)(Registration);

export {
	RegPage
}