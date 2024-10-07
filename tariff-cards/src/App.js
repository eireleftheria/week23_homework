import React from "react";
import "./components/card.css";
import tariffData from "./data";
import Card from "./components/Card.jsx";

function App() {
  function getColor(index) {
    switch (index) {
      case 0:
        return "firstCard";
      case 1:
        return "secondCard";
      case 2:
        return "thirdCard";
      case 3:
        return "fourthCard";
      default:
        return "defaultCard";
    }
  }

  return (
    <div className="App">
      {tariffData.map((tariff, index) => {
        return <Card color={getColor(index)} card={tariff} key={tariff.id} />;
      })}
    </div>
  );
}

export default App;
