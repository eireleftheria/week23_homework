import React, { useState } from "react";
import "../components/card.css";

const Card = ({ card, color }) => {
  const { title, cost, speed, info } = card;
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState(title);

  function getValue(event) {
    const newValue = event.target.value;
    setValue(newValue);
  }

  return (
    <div className={`card ${color}`}>
      <div className="title">{title}</div>
      <div className="cost">{cost}</div>
      <div className="speed">{speed}</div>
      <div className="info">{info}</div>
    </div>
  );
};
export default Card;
