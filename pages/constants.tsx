export type FDCFoodNutrient = {
  nutrientId: number;
  nutrientName: string;
  unitName: string;
  value: number;
};

export type FDCFood = {
  description: string;
  brandName: string;
  ingredients: string;
  packageWeight: string;
  foodNutrients: FDCFoodNutrient[];
};

export type FDCResponse = {
  foods: FDCFood[];
};

export type FDCResponseData = {
  results: FDCResponse;
};

export type userUpdate = {
  created_at: Date;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  dob: Date;
  about_me: string;
  inspiration: string;
  cal_goal: number;
  day_streak: number;
  last_login: Date;
  measurements: string[];
};
