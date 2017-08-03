import React from 'react';

import Home from './Home';
import BugTracker from './BugTracker';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

export default class App extends React.Component{
    
    render(){
        
        return(
            <div>
                <Header />
                <div id="domMain">
                    <main>
                        {this.props.children}
                    </main>
                </div>
                <Footer />
            </div>
        );
    }
}