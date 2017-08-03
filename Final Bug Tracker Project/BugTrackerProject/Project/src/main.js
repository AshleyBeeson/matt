import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './Home';
import BugTracker from './BugTracker';
import AddBugs from './AddBugs';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/BugTracker' component={BugTracker}/>
            <Route path='/AddBugs' component={AddBugs}/>
        </Route>
    </Router>
    , document.querySelector('#app')
); 