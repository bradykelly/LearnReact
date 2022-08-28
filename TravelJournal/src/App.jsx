import React from "react";
import NavBar from "./NavBar";
import data from "./data.js";
import styles from './styles/App.module.css';

const App = () => {
    // const cards = data.map((item) => {
    //     return <Card
    //         key={item.id}
    //         {...item}
    //     />
    // });

    return (
        <div className={styles["container"]}>
            <NavBar />
            <section className={styles["cards-list"]}>
                {/*{cards}*/}
            </section>
        </div>
    )
}

export default App