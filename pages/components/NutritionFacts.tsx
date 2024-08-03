import React from "react";
import { FDCFood, FDCFoodNutrient } from "@/pages/constants"

type Props = {
  food: FDCFood
}

type Nutrients = {
  nutrition: {
    description: string;
    unitName: string;
    calorie: number;
    totalFat: number;
    saturatedFat: number;
    unsaturatedFat: number;
    transFat: number;
    cholesterol: number;
    sodium: number;
    potassium: number;
    totalCarbs: number;
    fiber: number;
    sugar: number;
    protein: number;
    vitaminA: number;
    vitaminC: number;
    vitaminD: number;
    vitaminE: number;
    calcium: number;
    iron: number;
  };
};

function NutritionFacts(props: Props) {
  const food = props.food

  const lowerCaseUnit = (unitName: string | undefined) => {
    const unitsNotToLower = new Set(["IU"])
    if (unitName) {
      return !(unitsNotToLower.has(unitName)) ? unitName.toLowerCase() : unitName
    }
    return ""
  }

  const retrieveNutrientByID = (food: FDCFood, id: number) => {
    const nutrients = food.foodNutrients

    var res = nutrients.find((nutrient) => (nutrient.nutrientId == id))
    return res
  }

  const undefinedToZero = (nutrient: FDCFoodNutrient | undefined) => {
    return nutrient ? nutrient.value : 0
  }

  const calculateUnsaturatedFat = (food: FDCFood) => {
    const totalFat = retrieveNutrientByID(food, 1004)
    const transFat = retrieveNutrientByID(food, 1257)
    const saturatedFat = retrieveNutrientByID(food, 1258)
    if (!totalFat) {
      return undefined
    }
    
    return {value: (totalFat.value - undefinedToZero(saturatedFat) - undefinedToZero(transFat)), unitName: totalFat.unitName}
  }

  const retrieveNutrientsFromFDCFood = (food: FDCFood) => {

    return {
      calorie: retrieveNutrientByID(food, 1008),
      totalFat: retrieveNutrientByID(food, 1004),
      saturatedFat: retrieveNutrientByID(food, 1258),
      unsaturatedFat: calculateUnsaturatedFat(food),
      transFat: retrieveNutrientByID(food, 1257),
      cholesterol: retrieveNutrientByID(food, 1253),
      sodium: retrieveNutrientByID(food, 1093),
      potassium: retrieveNutrientByID(food, 1092),
      totalCarbs: retrieveNutrientByID(food, 1005),
      fiber: retrieveNutrientByID(food, 1079),
      sugar: retrieveNutrientByID(food, 2000),
      protein: retrieveNutrientByID(food, 1003),
      vitaminA: retrieveNutrientByID(food, 1104),
      vitaminC: retrieveNutrientByID(food, 1162),
      vitaminD: retrieveNutrientByID(food, 1110),
      vitaminE: {value: undefined, unitName: ""},
      calcium: retrieveNutrientByID(food, 1087),
      iron: retrieveNutrientByID(food, 1089),
    }
  }
  const nutrition = retrieveNutrientsFromFDCFood(food)

  return (
    <>
      <div className="border-white border-[2px] w-full p-[15px] h-max-[500px] inline-block">
        <div className="flex justify-between">
          <div>
            <h1>Nutrition Facts</h1>
            <p>{food.description}</p>
          </div>
          <div>
            <button className="btn btn-primary">ADD TO DIARY</button>
          </div>
        </div>

        <div className="flex mt-[10px] mb-[20px]">
          <i className="bi bi-shield-check text-[#63D277] mr-[8px] text-[13px]"></i>
          <p className="w-auto font-semibold text-[13px]">Learn More</p>
        </div>

        <hr className="mx-[auto] w-[100%] bg-white" />

        <div className="flex-row-global py-[15px] ">
          <div className="flex items-center">
            <label htmlFor="servingSize" className="mr-[8px]">
              Servings:
            </label>
            <select className="form-control w-[100px]" id="servingSize">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="flex items-center">
            <h1 className="mr-[8px]">Total Amount: </h1>
            {/* need to multiplication */}
            <p>{food.packageWeight}</p>
          </div>
        </div>

        <hr className="mx-[auto] w-[100%] bg-white" />

        <div className="my-[4px] mx-[10px] w-full gap-[15px] flex text-[15px]">
          <div className="w-[50%] flex flex-col gap-[5px]">
            <div className="flex-row-global">
              <p>Calories</p>
              <p>
                {nutrition.calorie?.value} {lowerCaseUnit(nutrition.calorie?.unitName)}
              </p>
            </div>
            <div className="flex-row-global">
              <p>Total Fat</p>
              <p>
                {nutrition.totalFat?.value} {lowerCaseUnit(nutrition.totalFat?.unitName)}
              </p>
            </div>
            <div className="pl-[8px] text-[14px] text-[#B7B7B7] flex flex-col gap-[5px]">
              <div className="flex-row-global">
                <p>Saturated</p>
                <p>
                  {nutrition.saturatedFat?.value} {lowerCaseUnit(nutrition.saturatedFat?.unitName)}
                </p>
              </div>
              <div className="flex-row-global">
                <p>Unsaturated</p>
                <p>
                  {nutrition.unsaturatedFat?.value} {lowerCaseUnit(nutrition.unsaturatedFat?.unitName)}
                </p>
              </div>
              <div className="flex-row-global">
                <p>Trans</p>
                <p>
                  {nutrition.transFat?.value} {lowerCaseUnit(nutrition.transFat?.unitName)}
                </p>
              </div>
            </div>
            <div className="flex-row-global">
              <p>Cholesterol</p>
              <p>
                {nutrition.cholesterol?.value} {lowerCaseUnit(nutrition.cholesterol?.unitName)}
              </p>
            </div>

            <hr className="mx-[auto] w-[100%] bg-white mt-[43px]" />

            <div className="flex-row-global">
              <p>Vitamin A</p>
              <p>{nutrition.vitaminA?.value} {lowerCaseUnit(nutrition.vitaminA?.unitName)}</p>
            </div>
            <div className="flex-row-global">
              <p>Vitamin C</p>
              <p>{nutrition.vitaminC?.value} {lowerCaseUnit(nutrition.vitaminC?.unitName)}</p>
            </div>
            <div className="flex-row-global">
              <p>Vitamin D</p>
              <p>{nutrition.vitaminD?.value} {lowerCaseUnit(nutrition.vitaminD?.unitName)}</p>
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-[5px]">
            <div className="flex-row-global">
              <p>Sodium</p>
              <p>
                {nutrition.sodium?.value} {lowerCaseUnit(nutrition.sodium?.unitName)}
              </p>
            </div>
            <div className="flex-row-global">
              <p>Potassium</p>
              <p>
                {nutrition.potassium?.value} {lowerCaseUnit(nutrition.potassium?.unitName)}
              </p>
            </div>
            <div className="flex-row-global">
              <p>Total Carbs</p>
              <p>
                {nutrition.totalCarbs?.value} {lowerCaseUnit(nutrition.totalCarbs?.unitName)}
              </p>
            </div>
            <div className="pl-[8px] text-[14px] text-[#B7B7B7] flex flex-col gap-[5px]">
              <div className="flex-row-global">
                <p>Dietary Fiber</p>
                <p>
                  {nutrition.fiber?.value} {lowerCaseUnit(nutrition.fiber?.unitName)}
                </p>
              </div>
              <div className="flex-row-global">
                <p>Sugars</p>
                <p>
                  {nutrition.sugar?.value} {lowerCaseUnit(nutrition.sugar?.unitName)}
                </p>
              </div>
            </div>
            <div className="flex-row-global">
              <p>Protein</p>
              <p>
                {nutrition.protein?.value} {lowerCaseUnit(nutrition.protein?.unitName)}
              </p>
            </div>

            <hr className="mx-[auto] w-[100%] bg-white mt-[42px]" />
            <div className="flex-row-global">
              <p>Calcium</p>
              <p>{nutrition.calcium?.value} {lowerCaseUnit(nutrition.calcium?.unitName)}</p>
            </div>
            <div className="flex-row-global">
              <p>Iron</p>
              <p>{nutrition.iron?.value} {lowerCaseUnit(nutrition.iron?.unitName)}</p>
            </div>
            <div className="flex-row-global">
              <p>Vitamin E</p>
              <p>{nutrition.vitaminE?.value} {lowerCaseUnit(nutrition.vitaminE?.unitName)}</p>
            </div>
          </div>
        </div>

        <hr className="mx-[auto] w-[100%] bg-white my-[6px]" />
        <p className="text-[14px]">
          *Percent Daily Values are based on a 2000 calorie diet. Your daily
          values may be higher or lower depending on your calorie needs.
        </p>
      </div>
    </>
  );
}

export default NutritionFacts;
