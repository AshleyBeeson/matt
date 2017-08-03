import React from 'react';

import Navbar from './Navbar';

//This header component contains the navbar, and is mounted above the children components within App.jsx//
export default class Header extends React.Component{

    render(){
        return(
            <div>
                <Navbar />            
            </div>
        );
    }
}