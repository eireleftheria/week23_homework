import React from "react";

const Card = ({
  title,
  cost,
  speed,
  info,
  titleColorClass,
  costColorClass,
}) => {
  return (
    <div className="card">
      <div className={`card-block ${titleColorClass}`}>
        <div className="titleColorClass">{title}</div>
      </div>
      <div className={`card-block ${costColorClass}`}>
        <div className="costColorClass">{cost}</div>
      </div>
      <div className="card-block speedInfo">
        <div>{speed}</div>
      </div>
      <div className="card-block infoBlock">
        <div>{info}</div>
      </div>
    </div>
  );
};

export default Card;
