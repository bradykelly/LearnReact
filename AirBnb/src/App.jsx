import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero.jsx";
import Card from "./Card.jsx";
import data from "./data.js";
import styles from './styles/App.module.css';

const App = () => {
    const cards = data.map((item) => {
        return <Card
            key={item.id}
            {...item}
        />
    });

    return (
        <div className={styles["container"]}>
            <NavBar />
            <Hero />
            <section className={styles["cards-list"]}>
                {cards}
            </section>
        </div>
    )
}

export default App
