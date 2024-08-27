import React from "react";
import "./AnimatedCard.css"; 
import cocacola_logo from "./cocacola_logo.png"
import cocacola from "./cocacola.png"

const AnimatedCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="card">
        <div className="circle" style={{ "--clr": "#f40103" }}>
          <img src={cocacola_logo} alt="Coca Cola Logo" className="logo" />
        </div>
        <div className="content">
          <h2>cocacola</h2>
          <p>
          Coca-Cola, or Coke, is a carbonated soft drink with a cola flavor manufactured by the Coca-Cola Company. In 2013, Coke products were sold in over 200 countries worldwide.
          </p>
          <a href="#">Explore more</a>
        </div>
        <img src={cocacola} alt="Coca Cola" className="product_img" />
      </div>
    </div>
  );
};

export default AnimatedCard;
