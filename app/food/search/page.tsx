"use client";

import React, { useState } from "react";
import Image from "next/image";
import NavHeader from "../../../pages/components/NavHeader/NavHeader";
import { FOOD_SECONDARY_TAB } from "@/app/constants";
import { FDCFood, FDCResponseData } from "@/pages/constants";

import ResultBox from "@/pages/components/ResultBox";

import styles from "./page.module.css";

export default function Home() {
  const [results, setResults] = useState([] as FDCFood[]);
  const handleSearchChange = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      const body = {
        searchTerm: (event.target as HTMLInputElement).value,
      };

      //do some search
      const response = await fetch("/api/food/search/fdc/routes", {
        method: "POST",
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((data) => {
          let res = data as unknown as FDCResponseData;
          const searchResults = res.results.foods;
          console.log(searchResults)
          setResults([...searchResults]);
        });
    }
  };
  return (
    <>
      <NavHeader
        primary="/food"
        secondary="/food/search"
        secondaryTabs={FOOD_SECONDARY_TAB}
      />
      <main>
        <div className={styles.globalFoodContainer}>
          <div className={styles.createFoodContainer}>
            <h1>Food Database</h1>
          </div>
          <div className={styles.searchContainer}>
            <h2>Search foods by name</h2>
            <input
              id="search"
              name="search"
              type="text"
              placeholder="Search"
              onKeyUp={handleSearchChange}
            />
            <h1>Foods:</h1>
            <ResultBox results = {results} />
          </div>
        </div>
      </main>
    </>
  );
}
