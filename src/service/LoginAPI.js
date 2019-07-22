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
			userId: null,
		}
	}

	_userId = 0;

	_userData = [
		{
			userLogin: "test",
			userEmail: "test@gmail.com",
			userPassword: "tesT123$",
			userId: this._userId ++
		},
		{
			userLogin: "User",
			userEmail: "user@gmail.com",
			userPassword: "userPass1!",
			userId: this._userId ++
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
	}

	submitReg = (newFirsrName, newLastName, newLogin, newEmail, newCompany, newPassword, confirmPassword) => {
		const userData = this._userData.find((user) => {
			if (user.userLogin === newLogin || user.userEmail === newEmail) {
				return user
			}	
		});
		if(userData === undefined) {
			const nameValid = this.textValidator(newFirsrName);
			const surnameValid = this.textValidator(newLastName);
			const emailValid= this.emailValidator(newEmail);
			const passValid = this.passwordValidator(newPassword);

			if( nameValid === true && surnameValid === true && emailValid === true && passValid === true && newPassword === confirmPassword) {
				const newUser = {
					userFirstName: newFirsrName,
					userLastName: newLastName,
					userLogin: newLogin,
					userEmail: newEmail,
					userCompany: newCompany,
					userPassword: newPassword,
					userId: this._userId ++
					}
				alert("You have registered successfully");
				this._userData.push(newUser);
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


	onLogin = (inputLogin, inputPassword) => {
		const userData = this._userData.find((user) => {
			if (user.userLogin === inputLogin && user.userPassword === inputPassword) {
				return user
			}
		})

		if (userData) {
			this.state = {
				access: true,
				...userData,
			}
			console.log(this.state)
		} else { 
			alert("Invalid Data")
			return false 
		}	
	};


	isLoggedIn = () => {
		return this.state.access;
	};

	getUserData = () => {
		console.log(this.state.userLogin);
		return this.state;
	};

}
