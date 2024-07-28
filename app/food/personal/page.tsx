"use client";
import React, { useState } from "react";
import Image from "next/image";
import NavHeader from "../../../pages/components/NavHeader/NavHeader";
import { FOOD_SECONDARY_TAB } from "@/app/constants";
import Link from "next/link";

import ResultBox from "@/pages/components/ResultBox/ResultBox";

import styles from "./page.module.css";

export default function Home() {
  const [results, setResults] = useState(["a", "b"]);
  const handleSearchChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    const body = {
      searchTerm: value,
    };

    //do some search
    const response = await fetch("/api/food/search/routes", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        setResults([...data.results]);
      });
  };
  return (
    <>
      <NavHeader
        primary="/food"
        secondary="/food/personal"
        secondaryTabs={FOOD_SECONDARY_TAB}
      />
      <main>
        <div className={styles.personalFoodContainer}>
          <div className={styles.createFoodContainer}>
            <h1>Your Personal Foods</h1>
            <Link
              href="/food/personal/create"
              className={styles.createFoodLink}
            >
              CREATE FOOD
            </Link>
          </div>
          <div className={styles.searchContainer}>
            <h2>Search your personal foods by name</h2>
            <input
              id="search"
              name="search"
              type="text"
              placeholder="Search"
              onChange={handleSearchChange}
            />
            <h1>Foods:</h1>
            <ResultBox results={results} />
          </div>
        </div>
      </main>
    </>
  );
}
