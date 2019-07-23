import React, { Component } from  'react';
import { withRouter } from 'react-router-dom';

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
		this.props.getDepartment(value)
	}

	handleChangeVacancy = (evt) => {
		const value = evt.target.value;
		this.setState({ vacancy: value})
		this.props.getVacancy(value);
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

	nextStep = () => {
		this.props.onJobSubmit();
		this.props.history.push('/user-page')
	}

	render () {
		const {dataJSON, department, vacancyData, vacancy} = this.state;
		const departmentList = this.optionWrapper(Object.keys(dataJSON));
		const vacancyList = this.optionWrapper(vacancyData);
		return (
			<section className="container wrapper-central section-size">
				<div className="col-md-12 bg-light p-3 wrapper-central">
					<h2> Choose your specialization </h2>
					<select className="custom-select mb-3"
					 value={department}
					 onChange={this.handleChangeDepartment}>
					  {departmentList}
					</select>
					<select className="custom-select mb-3"
					 value={vacancy}
					 onChange={this.handleChangeVacancy}>
					  {vacancyList}
					</select>
					<button type= "submit" className="btn btn-primary"
						onClick = {this.nextStep}> 
						Next Step 
					</button>
				</div>
			</section>
		); 
	}
}

export default withRouter(Vacancy);