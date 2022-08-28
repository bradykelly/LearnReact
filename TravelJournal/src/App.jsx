import React from "react";
import NavBar from "./NavBar";
import Entry from "./Entry"
import data from "./data.js";
import styles from './styles/App.module.css';

const App = () => {
    const cards = data.map((item) => {
        return (
            <li>
                <Entry
                    key={item.id}
                    {...item} />
                <hr />
            </li>
        )
    });

    return (
        <div className={styles["container"]}>
            <NavBar />
            <section className={styles["cards-list"]}>
                <ul>
                    {cards}
                </ul>
            </section>
        </div>
    )
}

export default App
