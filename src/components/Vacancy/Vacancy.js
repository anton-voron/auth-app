import React, { Component } from  'react';

class Vacancy extends Component {

	state = {
		dataJSON: '',
		department: '',
		vacancyData: [],
		vacancy: ''
	};
	
	componentDidMount() {
		this.setState({
			dataJSON: this.props.getJSON().departments
		})
	}

	handleChangeDepartment = (evt) => {
		const value = evt.target.value;
		this.setState({ department: value,
						vacancyData: this.state.dataJSON[value]})
	}

	handleChangeVacancy = (evt) => {
		const value = evt.target.value;
		this.setState({ vacancy: value})
	}

    optionWrapper = (data) => {
    	return data.map((item) => {
			return (
				<option key={item.toString()} 
				value={item}>
					{item}
				</option>
			)
		})
	}

	render () {
		const {dataJSON, department, vacancyData, vacancy} = this.state;
		const departmentList = this.optionWrapper(Object.keys(dataJSON));
		const vacancyList = this.optionWrapper(vacancyData);
		return (
			<section className="container">
				<select className="custom-select"
				 value={department}
				 onChange={this.handleChangeDepartment}>
				  {departmentList}
				</select>
				<select className="custom-select"
				 value={vacancy}
				 onChange={this.handleChangeVacancy}>
				  {vacancyList}
				</select>
			</section>
		); 
	}
}

export default Vacancy;