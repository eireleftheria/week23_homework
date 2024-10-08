import React, { useState } from "react";
import "../components/card.css";

const Card = ({ card, color }) => {
  const { title, cost, speed, info } = card;
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      style={{
        transform: isSelected ? "scale(1.1)" : "scale(1)",
        transition: "transform 0.3s ease-in-out",
      }}
      onClick={() => setIsSelected(!isSelected)}
      className={`card ${color}`}
    >
      <div className="title">{title}</div>
      <div className="cost">{cost}</div>
      <div className="speed">{speed}</div>
      <div className="info">{info}</div>
    </div>
  );
};
export default Card;
