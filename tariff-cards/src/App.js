import React from "react";
import "./App.css";
import tariffData from "./data";
import Card from "./components/Card.jsx";

function App() {
  const titleColorClasses = ["title1", "title2", "title3", "title4"];
  const costColorClasses = ["cost1", "cost2", "cost3", "cost4"];

  return (
    <div className="card-container">
      {tariffData.map((tariff, index) => (
        <Card
          title={tariff.title}
          cost={tariff.cost}
          speed={tariff.speed}
          info={tariff.info}
          titleColorClass={titleColorClasses[index % titleColorClasses.length]}
          costColorClass={costColorClasses[index % costColorClasses.length]}
        />
      ))}
    </div>
  );
}

export default App;
