import React from "react";
import styles from './styles/NavBar.module.css';
import world from "./assets/world.png";

const NavBar = () => {
    return (
        <nav>
            <div className={styles["title"]}>
                <img src={world} alt="world icon" />
                <span>my travel journal</span>
            </div>
        </nav>
    );
}

export default NavBar;