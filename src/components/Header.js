import React from "react"

function Header() {
    return(
        <header>
            <div>
            <img src="https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/258/2020/04/29145807/healthcare-symbol.jpg"/>
                <h1>Patient Tracker</h1>
            </div>
            <input id="search" type="text" placeholder="Search..."></input>
        </header>
    );
}

export default Header;