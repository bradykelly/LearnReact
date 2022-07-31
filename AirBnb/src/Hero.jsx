import React from "react";
import Group from "./assets/hero-group.png"

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-images">
                <img src={ Group } alt="airbnb photo group" />
            </div>
            <div className="hero-text">
                <h1>Online experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    );
}

export default Hero;