"use client";

import React, { useState } from "react";
import Image from "next/image";
import NavHeader from "../../pages/components/NavHeader/NavHeader";
import { FOOD_SECONDARY_TAB } from "../constants";
import ResultBox from "@/pages/components/ResultBox";

import NutritionFacts from "@/pages/components/NutritionFacts";
import { FDCFood, FDCFoodNutrient, FDCResponse } from "@/pages/constants";

export default function Home() {
  const res: FDCResponse = {
    foods: [
      {
        description: "CHEESE",
        brandName: "S.J. FALBO",
        ingredients: "PARMESAN AND ROMANO CHEESE. MADE FROM PASTEURIZED COW'S AND SHEEP'S MILK, CULTURE, SALT, AND ENZYMES. MICROCELLULOSE ADDED TO PREVENT CAKING.",
        packageWeight: "227 g/8 oz",
        // servingSizeUnit: "g",
        // servingSize: 5,
        foodNutrients: [
            {
                nutrientId: 1003,
                nutrientName: "Protein",
                unitName: "G",
                value: 60,
            },
            {
                nutrientId: 1004,
                nutrientName: "Total lipid (fat)",
                unitName: "G",
                value: 40,
            },
            {
                nutrientId: 1005,
                nutrientName: "Carbohydrate, by difference",
                unitName: "G",
                value: 40,
            },
            {
                nutrientId: 1008,
                nutrientName: "Energy",
                unitName: "KCAL",
                value: 500,
            },
            {
                nutrientId: 2000,
                nutrientName: "Total Sugars",
                unitName: "G",
                value: 0,
            },
            {
                nutrientId: 1079,
                nutrientName: "Fiber, total dietary",
                unitName: "G",
                value: 0,
            },
            {
                nutrientId: 1087,
                nutrientName: "Calcium, Ca",
                unitName: "MG",
                value: 1200,
            },
            {
                nutrientId: 1089,
                nutrientName: "Iron, Fe",
                unitName: "MG",
                value: 0,
            },
            {
                nutrientId: 1093,
                nutrientName: "Sodium, Na",
                unitName: "MG",
                value: 2000,
            },
            {
                nutrientId: 1104,
                nutrientName: "Vitamin A, IU",
                unitName: "IU",
                value: 2000,
            },
            {
                nutrientId: 1162,
                nutrientName: "Vitamin C, total ascorbic acid",
                unitName: "MG",
                value: 0,
            },
            {
                nutrientId: 1253,
                nutrientName: "Cholesterol",
                unitName: "MG",
                value: 100,
            },
            {
                nutrientId: 1257,
                nutrientName: "Fatty acids, total trans",
                unitName: "G",
                value: 0,
            },
            {
                nutrientId: 1258,
                nutrientName: "Fatty acids, total saturated",
                unitName: "G",
                value: 30,
            },
            {
              nutrientId: 1110,
              nutrientName: "Vitamin D (D2 + D3), International Units",
              unitName: "IU",
              value: 25,
            },
            {
              nutrientId: 1092,
              nutrientName: "Potassium, K",
              unitName: "MG",
              value: 117,
            }
        ],
    },
    ],
  };

  const results: FDCFood[] = res.foods

  const [nutrition, setNutrition] = useState({
    description: "Banana",
    unitName: "g",
    calorie: 114,
    totalFat: 0.33,
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
        <div className="w-full overflow-hidden flex pl-[200px]">
          <div className="w-[20%] text-white mr-[50px]">
            Matching Foods
            <ResultBox 
              results = {results} 
            />
          </div>
          <div className="w-[35%] text-white">
            <NutritionFacts food={results[0]} />
          </div>
        </div>
      </main>
    </>
  );
}
