import React from 'react';

import { Link } from 'react-router';

//This Navbar component will render the links to both the Home page and the BugTracker page.//
export default class Navbar extends React.Component{

    render(){
        return(
            <nav className="navbar-inverse navbar-static-top Navbar">
                <div className="container-fluid">
                    <div className="navbar-header Nav-Logo col-sm-2">

                    </div>
                    <ul className="nav col-sm-5">
                        <li>
                            <Link to="/" className="col-sm-3 menu-btn" id="homeButton">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/BugTracker" className="col-sm-3 menu-btn" id="bugTrackerButton">
                                BugTracker
                            </Link>
                        </li>
                        <li>
                            <Link to="/AddBugs" className="col-sm-3 menu-btn" id="addBugsButton">
                                Add Bugs
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}