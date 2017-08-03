import React from 'react';
import Bug from './Bug';
import FilterAndSort from './FilterAndSort';

//this component will return a full list of bugs as an array. this array will render bug components onto the BugTracker page//
//it takes data from the bug.json file as a prop from the parent component, BugTracker//
//then creates an array: bugArray from this data//
//finally, it creates an array of <Bug>'s and passes in the data from the array of bug data (from the json file)//
//it runs a separate function createActions to generate the array of actions for each Bug instance//
export default class BugsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            renderArray: [],
            fullArrayOfComponents: [],
        }
        this.updateBugsList = this.updateBugsList.bind(this);
    }

    componentWillMount(){
        this.renderInitialBugs();
    }
    
    renderInitialBugs(){
        let bugArray = this.props.bugs;
		let array = [];
		
		for(let i = 0; i < bugArray.length; i++){
            
            let eachBugActions = this.createActions(bugArray[i].actions);
            
			array.push(
				<Bug key={i} id={bugArray[i].id} issueId={bugArray[i].issueId} dateCreated={bugArray[i].dateCreated} summary={bugArray[i].summary} description={bugArray[i].description} highPriority={bugArray[i].highPriority} severity={bugArray[i].severity} reporter={bugArray[i].reporter} assignedUser={bugArray[i].assignedUser} status={bugArray[i].status} actions={eachBugActions} />
			);
		}
        this.setState({ renderArray: array});
        this.setState({ fullArrayOfComponents: array});
    }
    
    createActions(bugActions){
        let allActions = [];
            for(let j = 0; j < bugActions.length; j++){
                let currentActionUser = bugActions[j].user;
                let currentActionDateCreated = bugActions[j].dateCreated;
                let currentActionAction = bugActions[j].action;
                allActions.push(
                    currentActionUser,
                    "-",
                    currentActionDateCreated,
                    "-",
                    currentActionAction,
                    " |next action-->| "
                );
            }
        return allActions;
    }

    updateBugsList(updatedSummaries){
        let updatedRenderArray = [];
        let currentRenderArray = this.state.fullArrayOfComponents;
        
        for(let i = 0; i < currentRenderArray.length; i++){
            let currentComponentSummary = currentRenderArray[i].props.summary;
            for(let j = 0; j < updatedSummaries.length; j++){
                if(updatedSummaries[j] == currentComponentSummary){
                    updatedRenderArray.push(currentRenderArray[i]);
                }
            }
            console.log(updatedRenderArray);
        }
        this.setState({ renderArray: updatedRenderArray});
    }
    
	render() {
 
		return(
			<div>
                <FilterAndSort onCheckFilter={this.updateBugsList}/>
				{this.state.renderArray}
			</div>
		);
	}	
}