import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const HocLoggedIn = (View) => {
	return class extends Component {

		state = {
			access: false,
		}

		componentDidMount() {
			this.update()
		}
		
		update = () => {
			const res = this.props.getUserData();
			if (res) {
				this.setState({
					...res
				})
			}
			
		}

		componentDidUpdate(prevProps) {
	      if(this.props.getUserData !== prevProps.getUserData) {
	        this.updateData();
	      }
	    }

		render () {
			const {access} = this.state;
			console.log(access);
			if(!access) {
				return <Redirect to="/" />
			}

			return <View {...this.props}/>;
		};
	};
};

export default HocLoggedIn;