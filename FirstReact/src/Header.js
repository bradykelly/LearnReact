import React from "react";
import logo from "./logo.svg";
import "./index.css";

const Header = () => {
    return (
        <header>
            <nav className="nav">
                <img className="logo" src={ logo } alt={ "react logo" } />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>                
            </nav>
            <h1>Page about reasons I like react</h1>
        </header>
    )
}

export default Header;