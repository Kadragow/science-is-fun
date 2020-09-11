import React from "react";

const Navbar = () => {
    return(
        <header>
            <div className="nav">
                <h1>Układ okresowy</h1>
                <ul className="navigation">
                    <li><a href="#">Ekran główny</a> </li>
                    <li><a href="#">Zgadywanka</a> </li>
                    <li><a href="#">coś tam jeszcze</a> </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;