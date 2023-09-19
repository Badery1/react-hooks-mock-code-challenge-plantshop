import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  const handleRemovePlant = (plantId) => {
    fetch(`http://localhost:6001/plants/${plantId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setPlants((prevPlants) =>
            prevPlants.filter((plant) => plant.id !== plantId)
          );
        } else {
          throw new Error("You cant delete this fool");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const addPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search onSearchChange={handleSearchChange} />
      <PlantList plants={filteredPlants} onRemovePlant={handleRemovePlant} />
    </main>
  );
}

export default PlantPage;
