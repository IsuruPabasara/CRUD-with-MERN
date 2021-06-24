import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AuthOptions from '../Auth/AuthOptions';

class Header extends Component {
   
    render() { 
        return ( 

            <header className="header">
                <AuthOptions />
                <br></br>
            </header>
         );
    }
}
 
export default Header;