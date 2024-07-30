import React from "react";

type Props = {
  nutrition: {
    description: string;
    calorie: number;
    totalFat: number;
    saturatedFat: number;
    polyunsaturatedFat: number;
    nonSaturatedFat: number;
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
  const nutrition = props.nutrition;
  return (
    <>
      <div className="border-white border-[2px] w-full p-[15px] h-max-[500px] inline-block">
        <div className="flex justify-between">
          <div>
            <h1>Nutrition Facts</h1>
            <p>{nutrition.description}</p>
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
            <p>250g</p>
          </div>
        </div>

        <hr className="mx-[auto] w-[100%] bg-white" />

        <div className="my-[4px] mx-[10px] w-full gap-[15px] flex">
          <div className="w-[50%]">
            <div className="flex-row-global">
              <p>Calories</p>
              <p>{nutrition.calorie}</p>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="flex-row-global">
              <p>Calories</p>
              <p>{nutrition.calorie}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NutritionFacts;
