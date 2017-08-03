import React from 'react';

export default class AddBugs extends React.Component{

	onAddAnotherAction(){
        System.out.println("sorry, not working yet!");
    }
    
    render(){
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

        return(
        <div className="container">
        <h1>Edit Bugs:</h1>
              <form className="form-horizontal">
                <div className="form-group">
                  <label className="control-label col-sm-2">ID:</label>
                  <div className="col-sm-10">
                      <input type="id" className="form-control" id="id" placeholder="Enter id" name="id"></input>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Issue ID:</label>
                  <div className="col-sm-10">
                      <input type="issueId" className="form-control" id="issueId" placeholder="Enter Issue Id" name="issueId"></input>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Date Created:</label>
                  <div className="col-sm-10">
                      <input type="id" className="form-control" id="dateCreated" placeholder="Enter Date Created" name="dateCreated"></input>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Summary:</label>
                  <div className="col-sm-10">
                      <input type="summary" className="form-control" id="summary" placeholder="Enter Summary" name="summary"></input>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Description:</label>
                  <div className="col-sm-10">
                      <input type="description" className="form-control" id="description" placeholder="Enter Description" name="description"></input>
                  </div>
                </div>     
                <div className="form-group">
                  <label className="control-label col-sm-2">High Priority:</label>
                  <div className="col-sm-10">
                      <input type="highPriority" className="form-control" id="highPriority" placeholder="Enter Priority Level" name="highPriority"></input>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Severity:</label>
                  <div className="col-sm-10">
                      <input type="highPriority" className="form-control" id="severity" placeholder="Enter Severity Level" name="severity"></input>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Reporter:</label>
                  <div className="col-sm-10">
                      <input type="reporter" className="form-control" id="reporter" placeholder="Enter Reporter" name="reporter"></input>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Assigned User:</label>
                  <div className="col-sm-10">
                      <input type="assignedUser" className="form-control" id="assignedUser" placeholder="Enter Assigned User" name="assignedUser"></input>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Actions:</label>
                  <div className="col-sm-10">
                      <input type="actions" className="form-control" id="assignedUser" placeholder="Enter Actions" name="actions"></input>
                  </div>
                </div>
                <div className="form-group">        
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">Submit</button>
                  </div>
                </div>
                <div className="form-group">        
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="addAnotherAction" className="btn btn-default" onClick={this.onAddAnotherAction.bind(this)}>Add Another Action</button>
                  </div>
                </div>
              </form>
        </div>
        );
    }
}