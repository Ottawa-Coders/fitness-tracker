import React from "react";

type Props = {
  nutrition: {
    description: string;
    unitName: string;
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

        <div className="my-[4px] mx-[10px] w-full gap-[15px] flex text-[15px]">
          <div className="w-[50%] flex flex-col gap-[5px]">
            <div className="flex-row-global">
              <p>Calories</p>
              <p>
                {nutrition.calorie} {nutrition.unitName}
              </p>
            </div>
            <div className="flex-row-global">
              <p>Total Fat</p>
              <p>
                {nutrition.totalFat} {nutrition.unitName}
              </p>
            </div>
            <div className="pl-[8px] text-[14px] text-[#B7B7B7] flex flex-col gap-[5px]">
              <div className="flex-row-global">
                <p>Saturated</p>
                <p>
                  {nutrition.saturatedFat} {nutrition.unitName}
                </p>
              </div>
              <div className="flex-row-global">
                <p>Polyunsaturated</p>
                <p>
                  {nutrition.polyunsaturatedFat} {nutrition.unitName}
                </p>
              </div>
              <div className="flex-row-global">
                <p>Monounsaturated</p>
                <p>
                  {nutrition.nonSaturatedFat} {nutrition.unitName}
                </p>
              </div>
              <div className="flex-row-global">
                <p>Trans</p>
                <p>
                  {nutrition.transFat} {nutrition.unitName}
                </p>
              </div>
            </div>
            <div className="flex-row-global">
              <p>Cholesterol</p>
              <p>
                {nutrition.cholesterol} {nutrition.unitName}
              </p>
            </div>

            <hr className="mx-[auto] w-[100%] bg-white mt-[18px]" />

            <div className="flex-row-global">
              <p>Vitamin A</p>
              <p>{nutrition.vitaminA} %</p>
            </div>
            <div className="flex-row-global">
              <p>Vitamin C</p>
              <p>{nutrition.vitaminC} %</p>
            </div>
            <div className="flex-row-global">
              <p>Vitamin D</p>
              <p>{nutrition.vitaminD} %</p>
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-[5px]">
            <div className="flex-row-global">
              <p>Sodium</p>
              <p>
                {nutrition.sodium} {nutrition.unitName}
              </p>
            </div>
            <div className="flex-row-global">
              <p>Potassium</p>
              <p>
                {nutrition.potassium} {nutrition.unitName}
              </p>
            </div>
            <div className="flex-row-global">
              <p>Total Carbs</p>
              <p>
                {nutrition.totalCarbs} {nutrition.unitName}
              </p>
            </div>
            <div className="pl-[8px] text-[14px] text-[#B7B7B7] flex flex-col gap-[5px]">
              <div className="flex-row-global">
                <p>Dietary Fiber</p>
                <p>
                  {nutrition.fiber} {nutrition.unitName}
                </p>
              </div>
              <div className="flex-row-global">
                <p>Sugars</p>
                <p>
                  {nutrition.sugar} {nutrition.unitName}
                </p>
              </div>
            </div>
            <div className="flex-row-global">
              <p>Protein</p>
              <p>
                {nutrition.protein} {nutrition.unitName}
              </p>
            </div>

            <hr className="mx-[auto] w-[100%] bg-white mt-[42px]" />
            <div className="flex-row-global">
              <p>Calcium</p>
              <p>{nutrition.calcium} %</p>
            </div>
            <div className="flex-row-global">
              <p>Iron</p>
              <p>{nutrition.iron} %</p>
            </div>
            <div className="flex-row-global">
              <p>Vitamin E</p>
              <p>{nutrition.vitaminE} %</p>
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
