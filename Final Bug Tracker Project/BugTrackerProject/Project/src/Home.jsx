import React from 'react';

//This is the main page of the application//
export default class Home extends React.Component{
    
    render(){
        
        return(
            <div>
                <h1>Home Page:</h1>
                    <p>Welcome to my Bug Tracker application. The purpose of this app is to pull data relating to software Bugs you may be facing and render them to a dynamic display component on this single page application.</p>    
                <h4> I hope you like it!</h4>
                    <div className="navbar-header Nav-Logo col-sm-2">
                        <iframe src="https://giphy.com/embed/qm2CRlXb0gEx2" width="660" height="300" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                    </div>
            </div>
        );
    }
}