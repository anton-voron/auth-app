import React, { Component } from  'react';

class Vacancy extends Component {

	state = {
		department: '',
		list: [],
		vacancy: ''
	};

	dataObj = this.props.getJSON().departments;
	department = Object.keys(this.dataObj).map((item) => {
		return (
			<option key={item.toString()} 
			value={item}>
				{item}
			</option>
		);
	})

	handleChange = (evt) => {
		this.setState({ department: evt.target.value})
	}

	vacancyUpdate = () => {
		const {department} = this.state;
		return this.dataObj[department].map((item) => {
			return (
				<option key={item.toString()} 
				value={item}>
					{item}
				</option>
			);
		});
	}

	componentDidUpdate() {
		const position = this.vacancyUpdate();
		this.setState({
			list: position
		})
	}


	render () {
		const {department, vacancy} = this.state;
		return (
			<section className="container">
				<select className="custom-select"
				 value={department}
				 onChange={this.handleChange}>
				  {this.department}
				</select>
				<select className="custom-select"
				 value={vacancy}
				 onChange={this.handleChange}>
				  {this.state.list}
				</select>
			</section>
		); 
	}
}

export default Vacancy;