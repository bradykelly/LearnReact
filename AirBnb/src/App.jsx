import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero.jsx";
import Card from "./Card.jsx";
import data from "./data.js";
import styles from './styles/App.module.css';

const App = () => {
    const cards = data.map((card) => {
        return <Card
            key={card.id}
            item = {card}
        />
    });

    return (
        <div className={styles["container"]}>
            <NavBar />
            <section className={styles["cards-list"]}>
                {cards}
            </section>
        </div>
    )
}

export default App
