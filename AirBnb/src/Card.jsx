import React from "react";
import styles from "./styles/Card.module.css";

const Card = (props) => {
    return (
        <div className={styles["card"]}>
            <div className={styles["card-image"]}>
                <img src={`/src/assets/${props.image}`} />
            </div>
            <div className={styles["card-text"]}>
                <p className={styles["rating"]}><strong>{props.rating}</strong> ({props.reviews}) - {props.location}</p>
                <p>{props.blurb}</p>
                <p><strong>From ${props.price}</strong> / person</p>
            </div>
        </div>
    );
}

export default Card;