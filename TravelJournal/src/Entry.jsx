import React from "react";
import styles from "./styles/Entry.module.css";
import pin from "./assets/pin-drop.png"

const Entry = (props) => {
    return (
        <div className={styles["entry"]}>
            <img src={props.imageUrl} alt="location photo" />
            <div className={styles["text"]}>
                <div className={styles["location"]}>
                    <img src={pin} alt="pin-drop icon" />
                    <span>{props.location}</span>
                    <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on Google Maps</a>
                </div>
                <h2 className={styles["title"]}>{props.title}</h2>
                <div className={styles["period"]}>
                    <span>{props.startDate}</span> - <span>{props.endDate}</span>
                </div>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default Entry