import React from 'react';
import { NavLink } from 'react-router-dom';

function  NavBar() {
    return(
        <div className="nav">
            <NavLink exact to="/Tracker">Tracker</NavLink>
        </div>
    )
}

export default NavBar;