import React from 'react';

import bugs from './data/bugs.json';
//the Action component will form part of the Bug component, which will return an array of Actions//
export default class Action extends React.Component{
//a table has been used for a neater layout of components//
        
    createActions(bugActions){
        console.log("createActions method called!");
        let allActions = [];
            for(let j = 0; j < bugActions.length; j++){
                let currentActionUser = bugActions[j].user;
                let currentActionDateCreated = bugActions[j].dateCreated;
                let currentActionAction = bugActions[j].action;
                allActions.push(
                    <Action key={j} user={currentActionUser} dateCreated={currentActionDateCreated} action={currentActionAction} />
                );
            }
        return allActions;
    }
    
    

    render(){
        return(
            <div>
                <table>
                  <tr>
                    <td>user: </td>
                  </tr>
                  <tr>
                      <td>dateCreated: </td> 
                  </tr>
                  <tr>
                    <td>Action: </td>  
                  </tr>
                </table>
            </div>
        );
    }
}