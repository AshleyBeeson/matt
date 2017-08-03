import React from 'react';
import Bug from './Bug';
import BugTrackerStore from './store/BugTrackerStore';
import BugsList from './BugsList';

//the BugTracker will act as a single page, rendering a list of all bugs within it//
//it takes all bugs from the BugTrackerStore method (which returns the data from the bug.json file)//
//then passes this data down to the BugsList component sa a state//
export default class BugTracker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bugs: BugTrackerStore.getAllBugs(),
        };
    }

    render(){
    
        return(
            <div>
                <BugsList bugs={this.state.bugs} target={this.props.target}/>
            </div>
        );
    }
}