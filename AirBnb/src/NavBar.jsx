import React from "react";
import Logo from "./assets/airbnb-logo.png";

const NavBar = () => {
    return (
      <nav>
          <img src={Logo} alt="airbnb logo" />
      </nav>
    );
}

export default NavBar;