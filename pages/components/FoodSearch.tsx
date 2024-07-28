"use client";

import { useState } from "react";
import axios from "axios";

const FoodSearch = () => {
  const [foodName, setFoodName] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/fatsecret`, {
        params: { food_name: foodName },
      });
      setResults(response.data.foods.food);
      setError(null);
    } catch (err) {
      setError("Error fetching data from FatSecret API");
      setResults([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
        placeholder="Search for food"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      <ul>
        {results.map((food) => (
          <li key={food.food_id}>{food.food_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FoodSearch;
