import React from "react"

function Header() {
    return(
        <header>
            <div>
                <img src="./images/hypnocil-logo.png"/>
                <h1>Patient Tracker</h1>
            </div>
            <input id="search" type="text" placeholder="Search..."></input>
        </header>
    );
}

export default Header;