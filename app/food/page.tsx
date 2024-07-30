"use client";

import React, { useState } from "react";
import Image from "next/image";
import NavHeader from "../../pages/components/NavHeader/NavHeader";
import { FOOD_SECONDARY_TAB } from "../constants";
import ResultBox from "@/pages/components/ResultBox";

import NutritionFacts from "@/pages/components/NutritionFacts";

export default function Home() {
  const [results, setResults] = useState([
    {
      name: "Banana",
      calorie: "114",
      size: "medium",
    },
    {
      name: "Apple",
      calorie: "150",
      size: "medium",
    },
    {
      name: "Pear",
      calorie: "200",
      size: "medium",
    },
  ]);

  const [nutrition, setNutrition] = useState({
    description: "Banana",
    calorie: 114,
    totalFat: 0,
    saturatedFat: 0.13,
    polyunsaturatedFat: 0.083,
    nonSaturatedFat: 0.03,
    transFat: 0,
    cholesterol: 0,
    sodium: 50,
    potassium: 384.68,
    totalCarbs: 26.78,
    fiber: 2.006,
    sugar: 18.644,
    protein: 0.873,
    vitaminA: 0,
    vitaminC: 24.45,
    vitaminD: 0,
    vitaminE: 0,
    calcium: 0.59,
    iron: 0,
  });

  return (
    <>
      <NavHeader
        primary="/food"
        secondary="/food"
        secondaryTabs={FOOD_SECONDARY_TAB}
      />
      <main>
        <div className="w-full overflow-hidden flex">
          <div className="w-[40%] text-white">
            Matching Foods
            <ResultBox results={results} />
          </div>
          <div className="w-[55%] text-white">
            <NutritionFacts nutrition={nutrition} />
          </div>
        </div>
      </main>
    </>
  );
}
