export default class LoginAPI {
	constructor () {
		this.state = {
			access: false,
			userFirstName: null,
			userLastName: null,
			userLogin: null,
			userEmail: null,
			userCompany: null,
			userPassword: null,
			companyDepartment: null,
			vacancy: null,
			userId: null,
		}
	};

	_userId = 0;

	_userData = [
		{	
			userFirstName: "Test",
			userLastName: "Test",
			userLogin: "Test",
			userEmail: "test@gmail.com",
			userCompany: "Test",
			userPassword: "tesT123$",
			companyDepartment: 'Front-end',
			vacancy: 'junior',
			userId: this._userId ++,
		}
	];


	textValidator = (input) => {
		const loginRegex = /(^[A-Za-z]{4,})$/;
		if(loginRegex.test(input)) {
			console.log('Sutiable');
			return true;
		} else {
			return 'To short, numbers and special characters are not allowed';
		}
	};

	passwordValidator = (input) => {
		const passwordRegex = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
		if(passwordRegex.test(input)) {
			console.log('Sutiable');
			return true;
		} else {
			return 'At least 6 characters: one number, one special character, Latin lowercase and uppercase letter.';
		}
	};

	emailValidator = (input) => {
		const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if(emailRegex.test(input)) {
			console.log('Sutiable');
			return true;
		} else {
			return 'Invalid email';
		}
	};

	submitReg = (newFirsrName, newLastName, newLogin, newEmail, newCompany, newPassword, confirmPassword) => {
		const userData = this._userData.find((user) => {
			return (user.userLogin === newLogin || user.userEmail === newEmail)
		});
		if(userData === undefined) {
			const nameValid = this.textValidator(newFirsrName);
			const surnameValid = this.textValidator(newLastName);
			const emailValid= this.emailValidator(newEmail);
			const passValid = this.passwordValidator(newPassword);

			if(nameValid === true && surnameValid === true && emailValid === true && passValid === true && newPassword === confirmPassword) {
				const newUser = {
					userFirstName: newFirsrName,
					userLastName: newLastName,
					userLogin: newLogin,
					userEmail: newEmail,
					userCompany: newCompany,
					userPassword: newPassword,
					companyDepartment: '',
					vacancy: '',
					userId: this._userId ++
					}
				this._userData.push(newUser);
				this.state = {
					access: true,
					...newUser,
				}
				console.log(this.state);
				alert("You have registered successfully");
				return true;
			} else if (newPassword !== confirmPassword){
				alert('Passwords do not match');
				return false;
			} else {
				alert('Invalid data');
				return false;
			}	
		} 
		 if(userData.userEmail === newEmail) {
			alert("This email has already been registered")
			return false;
		} 
		 if(userData.userLogin === newLogin) {
			alert("This login is taken by other user");
			return false;
		}
	};

	getJSON = () => {
		return JSON.parse(JsonData);
	};

	getDepartment = (department) => {
		const vacancyList = this.getJSON().departments[department];
		this.state=({
			...this.state,
			companyDepartment: department
		})
		console.log(this.state);
		return vacancyList;
	};

	getVacancy = (vacancy) => {
		this.state=({
			...this.state,
			vacancy
		})
		console.log(this.state);
	};

	onJobSubmit = () => {
		const idx = this._userData.findIndex((user) => {
			return user.userLogin === this.state.userLogin && user.userPassword === this.state.userPassword
		});
		if(idx!==-1) {
			this._userData[idx]={...this.state};
		}
		console.log(this._userData); 
	};

	getUserData = () => {
		return this.state
	};
	
	isLoggedIn = () => {
		return this.state.access;
	}

}

const JsonData = `{ 
	"departments": { 
		"Sales" : ["Sales Manager", "Account Manager" ],
		"Marketing" : ["Creative Manager", "Marketing Coordinator", "Content Writer" ],
		"Technology" : [ "Project Manager", "Software Developer", "PHP programmer", "Front End", "Quality Assurance" ] 
	} }`;