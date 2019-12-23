import React from "react";
import "./app.css";
import planets from "./data";

const App: React.FC = () => {
  const totalHeight = planets.reduce(
    (acc, currentPlanet) => acc + Number(currentPlanet.radius),
    0
  );

  return (
    <div id="universe">
      {planets.map(planet => {
        return (
          <div
            id={planet.name}
            key={planet.name}
            className="planet"
            style={{
              backgroundColor: planet.color,
              height: `${(Number(planet.radius) / totalHeight) * 100}%`
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default App;
