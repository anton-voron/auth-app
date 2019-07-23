import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const HocLoggedIn = (View) => {
	return class extends Component {

		render () {
			const access = this.props.isLoggedIn();
			console.log(access);
			if(!access) {
				return <Redirect to="/" />
			}

			return <View {...this.props}/>;
		};
	};
};

export default HocLoggedIn;