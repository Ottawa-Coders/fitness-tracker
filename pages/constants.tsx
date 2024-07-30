export type FDCFoodNutrient = {
  nutrientName: string;
  unitName: string;
  value: number;
}

export type FDCFood = {
  description: string;
  brandName: string;
  ingredients: string;
  packageWeight: string;
  foodNutrients: FDCFoodNutrient[];
}

export type FDCResponse = {
  foods: FDCFood[];
};

export type FDCResponseData = {
  results: FDCResponse
};