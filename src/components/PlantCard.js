import React, { useState } from "react";

function PlantCard({ plant, onRemovePlant }) {
  const [isInStock, setIsInStock] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleRemove = () => {
    onRemovePlant(plant.id);
  };

  const toggleStock = () => {
    setIsInStock(!isInStock);
  };

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className="primary" onClick={toggleStock}>
        In Stock
      </button>
      {!isInStock && (
        <button
          onClick={handleRemove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? "Delete?" : "Out of Stock"}
        </button>
      )}
    </li>
  );
}

export default PlantCard;
