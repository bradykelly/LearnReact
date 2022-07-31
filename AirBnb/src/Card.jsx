import React from "react";
import katie from "./assets/katie-zaferes.png";

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-image"></div>
            <div className="card-text">
                <p className="rating"><strong>5.0</strong> (6) - USA</p>
                <p>Life lessons with Katie Zaferes</p>
                <p><strong>From $136</strong> / person</p>
            </div>
        </div>
    );
}

export default Card;