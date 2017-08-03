import React from 'react';
import BugTrackerStore from './store/BugTrackerStore';


//this is the layout for the filter checkbox//
//the onChange prop calls the onToggle method which changes the state: isChecked on the checkbox //
//it defines the "not-isChecked" state due to latency in the program with changing the isChecked state, and calls the method handleCheckboxChange, passing the values of the label and it's current isChecked status//
export default class FilterBySummaryComponent extends React.Component{

	constructor(){
		super();
		this.state = {
			isChecked: false
		};
	}

	onToggleSummary(){

		this.setState({isChecked: !(this.state.isChecked)})
		let filterLabel = this.props.label;
		let curCheck = !(this.state.isChecked);

		if(curCheck == true){
			this.props.handleCheckboxChange(filterLabel, true);	
		}
		if(curCheck == false){
			this.props.handleCheckboxChange(filterLabel, false);
		}

	}

	render(){
		return(
			<div className="checkbox">
				<label>
					<input
						type="checkbox"
						value={this.props.label}
						checked={this.state.isChecked}
						onChange={this.onToggleSummary.bind(this)} id={this.props.id}
					/>
                    {this.props.label}
				</label>
			</div>
		);
	}

}