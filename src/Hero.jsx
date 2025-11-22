import React from "react";
import "./Hero.css";
import hero from "./assets/hero.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const hakkimizda = () => {
    navigate("/Hakkimizda");
  };
  return (
    <div className="hero-wrapper">
      <div className="hero-two-column">
        <div className="hero-text">
          <h1>DİJİKOR SİGORTA</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, dolores nobis voluptatum quod asperiores id libero
            tenetur recusandae nesciunt, odio adipisci consequuntur doloremque
            doloribus beatae fugit perspiciatis accusamus dolorem at temporibus
            aliquid, voluptatem architecto earum?
          </p>
          <button className="hero-btn" onClick={hakkimizda}>
            <span className="daha-fazla">DAHA FAZLA</span>
          </button>
        </div>
        <img className="hero-img" src={hero} alt="Sigorta Şirketi Hero" />
      </div>
    </div>
  );
}

export default Hero;
