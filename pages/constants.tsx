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

export type userInfo = {
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
  weight_lost: number;
};

export const initialUserInfo: userInfo = {
  created_at: new Date(),
  first_name: "",
  last_name: "",
  username: "",
  password: "",
  dob: new Date(),
  about_me: "",
  inspiration: "",
  cal_goal: 0,
  day_streak: 0,
  last_login: new Date(),
  measurements: [],
  weight_lost: 0,
};

export type entryInfo = {
  created_at: Date;
  user_id: number;
  measurement: string;
  value: number;
  last_updated: Date;
};

export const initialEntryInfo: entryInfo = {
  created_at: new Date(),
  user_id: -1,
  measurement: "",
  value: 0,
  last_updated: new Date(),
};
