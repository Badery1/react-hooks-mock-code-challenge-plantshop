import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onRemovePlant }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.name}
          plant={plant}
          onRemovePlant={onRemovePlant}
        />
      ))}
    </ul>
  );
}

export default PlantList;
