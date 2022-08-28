import React from "react";
import styles from "./styles/Card.module.css";

const Card = (props) => {
    let badgeText = "";
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }
    
    return (
        <div className={styles["card"]}>
            {badgeText.length > 0 && <div className={styles["card-badge"]}>{badgeText}</div>}
            <div className={styles["card-image"]}>
                <img src={`/src/assets/${props.coverImg}`} />
            </div>
            <div className={styles["card-text"]}>
                <p className={styles["rating"]}><strong>{props.stats.rating}</strong> ({props.stats.reviewCount}) - {props.location}</p>
                <p>{props.title}</p>
                <p><strong>From ${props.price}</strong> / person</p>
            </div>
        </div>
    );
}

export default Card;