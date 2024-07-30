import { NextApiRequest, NextApiResponse } from "next";

import { searchFood } from "@/pages/api/food/search/fdc/utils/search_utils"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Access-Control-Allow-Headers', 'x-api-key');
  
  if (req.method === "POST") {
    return await searchFood(req, res)
  }
}
