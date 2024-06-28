import { NextApiRequest, NextApiResponse } from "next";

import { insertFood } from "@/pages/api/food/create/utils/food_utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return await insertFood(req, res);
  }
  else {
    
  }
}
