import React from "react";
import styles from "./styles/Entry.module.css";
import pin from "./assets/pin-drop.png"

const Entry = () => {
    return (
        <div className={styles["entry"]}>
            <img src="https://source.unsplash.com/WLxQvbMyfas" alt="location photo" />
            <div className={styles["text"]}>
                <div className={styles["location"]}>
                    <img src={pin} alt="pin-drop icon" />
                    <span>JAPAN</span>
                    <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on Google Maps</a>
                </div>
                <h2 className={styles["title"]}>Mount Fuji</h2>
                <div>
                    <span>12 Jan, 2021</span> - <span>24 Jan, 2021</span>
                </div>
                <p>
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
                    Mount Fuji is the single most popular tourist site in Japan, for both Japanese and 
                    foreign tourists.
                </p>
            </div>
        </div>
    )
}

export default Entry