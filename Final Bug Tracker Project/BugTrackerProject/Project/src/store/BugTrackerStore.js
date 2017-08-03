import { EventEmitter } from 'events';

import bugJSON from '../data/bugs.json';



class BugTrackerStore extends EventEmitter{
    constructor(){
        super();
        this.allBugs = bugJSON.bugs;
        this.bugSummaries = this.generateBugSummaries();
        this.filteredBugs = [];
    }
    
    getAllBugs(){
        return this.allBugs;
    }
    
    generateBugSummaries(){
        let summarySet = new Set([]);
        let bugList = this.allBugs;
        
        for(let i = 0; i < bugList.length; i++){
            summarySet.add(bugList[i].summary);
        }
        let summaryArray = Array.from(summarySet);
        console.log(summaryArray);
        return summaryArray;
    }
    
    getBugSummaries(){
        return this.bugSummaries;
    }
    
}

const bugTrackerStore = new BugTrackerStore();
export default bugTrackerStore;