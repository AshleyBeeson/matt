import React from 'react';

import Action from './Action';
import BugTrackerStore from './store/BugTrackerStore';

//the Bug component will be rendered multiple times within the BugTracker component, representing each case of a Bug//
export default class Bug extends React.Component{

    
    render(){
    //the information relating to each individual bug is rendered into a table for layout purposes. The Action component will be rendered as an array for relevant actions relating to each specific bug//
        return(
            <div id={this.props.issueId}>
                <h2>Bug: ID #{this.props.id}</h2>
                <pre>
                    <table>
                        <tbody>
                            <tr>
                                <td><p>IssueId: {this.props.issueId}</p></td>
                                <td><p>Date Created: {this.props.dateCreated}</p></td>
                            </tr>    
                            <tr>
                                <td><p>Summary: {this.props.summary}</p></td>
                            </tr>
                            <tr>
                                <td><p>Description: {this.props.description}</p></td>
                            </tr>
                            <tr>
                                <td><p>Priority: {this.props.highPriority}</p></td>
                                <td><p>Severity: {this.props.severity}</p></td>
                            </tr>
                            <tr>
                                <td><p>Reporter: {this.props.reporter}</p></td>
                                <td><p>Assigned User: {this.props.assignedUser}</p></td>
                            </tr>
                            <tr>
                                <td><p>Status: {this.props.status}</p></td>
                            </tr>
                            <tr>
                                <td><p>Actions:{this.props.actions}></p></td>
                            </tr>
                        </tbody>
                    </table>
                </pre>
            </div>
        );
    }
}