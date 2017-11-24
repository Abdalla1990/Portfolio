import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{
    
        render(){
            return (
    
                <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/about">About</NavLink>
                </div>
            )
        }
    }
    
    export default Header;