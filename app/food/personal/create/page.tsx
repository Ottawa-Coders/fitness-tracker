"use client";
import React, { useState } from "react";
import Image from "next/image";
import NavHeader from "@/pages/components/NavHeader/NavHeader";
import { FOOD_SECONDARY_TAB } from "@/app/constants";

import ResultBox from "@/pages/components/ResultBox";
import Link from "next/link";

import styles from "./page.module.css";

export default function Home() {
  const [formValues, setFormValues] = useState({
    name: "",
    servingSize: "",
    servingUnit: "",
    calories: "",
    protein: "",
  });

  const [invalidValues, setInvalidValues] = useState({
    isNameInvalid: false,
    isServingSizeInvalid: false,
    isServingUnitInvalid: false,
    isCaloriesInvalid: false,
  });

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value);
    console.log(typeof value);
    if (invalidValues.isNameInvalid == true && name == "name" && value != "") {
      setInvalidValues((prevValues) => ({
        ...prevValues,
        isNameInvalid: false,
      }));
    }

    if (
      invalidValues.isServingSizeInvalid == true &&
      name == "servingSize" &&
      value != ""
    ) {
      setInvalidValues((prevValues) => ({
        ...prevValues,
        isServingSizeInvalid: false,
      }));
    }

    if (
      invalidValues.isServingUnitInvalid == true &&
      name == "servingUnit" &&
      value != ""
    ) {
      setInvalidValues((prevValues) => ({
        ...prevValues,
        isServingUnitInvalid: false,
      }));
    }

    if (
      invalidValues.isCaloriesInvalid == true &&
      name == "calories" &&
      value != ""
    ) {
      setInvalidValues((prevValues) => ({
        ...prevValues,
        isCaloriesInvalid: false,
      }));
    }

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value, // Update the specific text input field's value
    }));
  };

  const submitPersonalFood = async () => {
    const nameInvalid = formValues.name === "";
    const servingSizeInvalid = formValues.servingSize === "";
    const servingUnitInvalid = formValues.servingUnit === "";
    const caloriesInvalid = formValues.calories === "";

    setInvalidValues((prevValues) => ({
      ...prevValues,
      isNameInvalid: nameInvalid,
      isServingSizeInvalid: servingSizeInvalid,
      isServingUnitInvalid: servingUnitInvalid,
      isCaloriesInvalid: caloriesInvalid,
    }));

    const requiredBody = {
      name: formValues.name,
      servingSize: Number(formValues.servingSize),
      servingUnit: formValues.servingUnit,
      calories: Number(formValues.calories),
    };

    const body = formValues.protein
      ? { ...requiredBody, protein: Number(formValues.protein) }
      : requiredBody;

    if (
      !(
        nameInvalid ||
        servingSizeInvalid ||
        servingUnitInvalid ||
        caloriesInvalid
      )
    ) {
      const response = await fetch("/api/food/create/routes", {
        method: "POST",
        body: JSON.stringify(body),
      });
    }
  };

  return (
    <>
      <NavHeader
        primary="/food"
        secondary="/food/personal"
        secondaryTabs={FOOD_SECONDARY_TAB}
      />
      <main>
        <div className={styles.createFoodContainer}>
          <div className={styles.foodHeaderContainer}>
            <h1>Create Your Own Food</h1>
            <Link href="/food/personal" className={styles.backLink}>
              BACK
            </Link>
          </div>

          <div className={styles.foodFieldContainer}>
            <div className={styles.inputContainer}>
              <div className={styles.foodName}>
                <label>Name</label>
                <input
                  type="text"
                  className={`${
                    invalidValues.isNameInvalid ? styles.isInvalid : ""
                  }`}
                  id="name"
                  name="name"
                  onChange={handleTextChange}
                  required
                />
              </div>
              <label
                className={
                  !invalidValues.isNameInvalid
                    ? styles.hiddenMessage
                    : styles.invalidMessage
                }
              >
                Please insert a name for your food
              </label>
            </div>

            <h1>Nutrition</h1>
            <hr></hr>
            <div className={styles.inputContainer}>
              <div className={styles.foodServingSize}>
                <label>Serving Size</label>
                <input
                  className={`${
                    invalidValues.isServingSizeInvalid ? styles.isInvalid : ""
                  }`}
                  id="servingSize"
                  name="servingSize"
                  type="number"
                  placeholder="Value"
                  onChange={handleTextChange}
                  required
                />
                <input
                  className={`${
                    invalidValues.isServingUnitInvalid ? styles.isInvalid : ""
                  }`}
                  id="servingUnit"
                  name="servingUnit"
                  type="text"
                  placeholder="Unit"
                  onChange={handleTextChange}
                  required
                />
              </div>
              <label
                className={
                  !invalidValues.isServingSizeInvalid &&
                  !invalidValues.isServingUnitInvalid
                    ? styles.hiddenMessage
                    : styles.invalidMessage
                }
              >
                Please fill out the measurements
              </label>
            </div>
            <hr></hr>
            <div className={styles.foodNutrition}>
              <div className={styles.foodNutritionLeft}>
                <div className={styles.foodNutritionEntry}>
                  <label>Calories</label>
                  <input
                    className={`${
                      invalidValues.isCaloriesInvalid ? styles.isInvalid : ""
                    }`}
                    id="calories"
                    name="calories"
                    type="numeric"
                    placeholder="kcal"
                    onChange={handleTextChange}
                    required
                  />
                </div>
                <label
                  className={
                    !invalidValues.isCaloriesInvalid
                      ? styles.hiddenMessage
                      : styles.invalidMessageNutrients
                  }
                >
                  Please insert a calorie value
                </label>
              </div>
              <div className={styles.foodNutritionRight}>
                <div className={styles.foodNutritionEntry}>
                  <label>Protein</label>
                  <input
                    id="protein"
                    name="protein"
                    type="numeric"
                    placeholder="g"
                    onChange={handleTextChange}
                  />
                </div>
              </div>
            </div>
            <button className={styles.submit} onClick={submitPersonalFood}>
              SUBMIT
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
