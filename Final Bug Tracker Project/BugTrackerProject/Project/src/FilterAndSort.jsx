import React from 'react';
import BugTrackerStore from './store/BugTrackerStore';
import FilterBySummaryComponent from './FilterBySummaryComponent';
import BugsList from './BugsList';

//first the componentWillMount will run the generateSummaryComponent() function..//
//this will pull the array of summaries from the BugTrackerStore method and set this component state to an array of those summaries//
//the summaries will then be added to the requiredSummaryComponents array as FilterBySummary components, complete with labels, keys and handleToggle functions. this array is saved tot he state//
//due to the fact the bugs.json test file shows two identical comments of "Issues cannot be duplicated", the rendering of checkboxes can be shown to be working due to there only being one checkbox for both of these instances//
//the handleCheckboxChange function will call the onToggleSummary function, should the checkbox status change (as defined in the FilterBySummaryComponent), passing in the value of the checkbox (the label) and it's current checkState from the child component via it's ontToggleSummary function//
export default class FilterAndSort extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            summaries: [],
            summary_objects: [],
        }
    }
	
	componentWillMount() {
        this.generateSummaryComponent();
    }
    
    onToggleSummary(label){
        let currentSummaries = this.state.summaries;
        let updatedSummaries = [];
        let labelFound = false;
        console.log("current: " + currentSummaries);
        for(let i = 0; i < currentSummaries.length; i++){
            if(currentSummaries[i] != label){
                updatedSummaries.push(currentSummaries[i]);
            }
            else if(currentSummaries[i] == label){
                labelFound = true;
            }
        }
        if (labelFound == false){
             updatedSummaries.push(label);   
        }
        console.log("updated summaries list: " + updatedSummaries);
        
        this.setState({ summaries: updatedSummaries});
        this.props.onCheckFilter(updatedSummaries);
    }
    
	

   generateSummaryComponent(){
       let requiredSummaryComponents = [];
       let summaryArray = BugTrackerStore.getBugSummaries();
       this.setState({ summaries: summaryArray });

       for(let i = 0; i < summaryArray.length; i++){
           requiredSummaryComponents.push(
                <FilterBySummaryComponent label={summaryArray[i]} key={summaryArray[i]}  handleCheckboxChange={this.onToggleSummary.bind(this)} id={summaryArray[i]}/>
           );
       }
       this.setState({summary_objects: requiredSummaryComponents});
   }

	
    render(){
        return(
            <div className="filterAndSort">
                <table>
                    <tbody>
                        <tr>
                            <td>                
                                <h2>Filter by Summary: </h2>
                                {this.state.summary_objects}
                            </td>
                        </tr>
                    </tbody>
                </table>
			</div>
        );
    }
}