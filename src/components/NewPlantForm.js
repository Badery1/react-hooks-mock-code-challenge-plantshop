import React from "react";

function NewPlantForm({ onAddPlant }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlant = {
      name: e.target.name.value,
      image: e.target.image.value,
      price: parseFloat(e.target.price.value),
      inStock: true,
    };
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((addedPlant) => {
        onAddPlant(addedPlant);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    e.target.reset();
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
