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
            image={card.coverImg}
            rating={card.stats.rating}
            reviews={card.stats.reviewCount}
            location={card.location}
            blurb={card.title}
            price={card.price} />
    });

    return (
        <div className={styles["container"]}>
            <NavBar />
            {cards}
        </div>
    )
}

export default App
