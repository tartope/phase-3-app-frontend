import React from "react"

function Header({ handleSearch }) {

    function handleChange(event) {
        event.preventDefault();
        const searchText = event.target.value;
        handleSearch(searchText);

    }

    return(
        <header>
            <div>
            <img id="headerimg" src="https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/258/2020/04/29145807/healthcare-symbol.jpg" alt="emrimg"/>
                <h1>Patient Tracker</h1>
            </div>
            <input onChange={handleChange} id="search" type="text" placeholder="Search..."></input>
        </header>
    );
}

export default Header;