import React from "react";
import styles from "./styles/Card.module.css";

const Card = (props) => {
    let badgeText = "";
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE";
    }
    
    return (
        <div className={styles["card"]}>
            {badgeText.length > 0 && <div className={styles["card-badge"]}>{badgeText}</div>}
            <div className={styles["card-image"]}>
                <img src={`/src/assets/${props.item.coverImg}`} />
            </div>
            <div className={styles["card-text"]}>
                <p className={styles["rating"]}><strong>{props.item.stats.rating}</strong> ({props.item.stats.reviewCount}) - {props.item.location}</p>
                <p>{props.item.title}</p>
                <p><strong>From ${props.item.price}</strong> / person</p>
            </div>
        </div>
    );
}

export default Card;