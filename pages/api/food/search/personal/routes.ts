import { NextApiRequest, NextApiResponse } from "next";

import { searchFood } from "@/pages/api/food/search/personal/utils/search_utils"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return await searchFood(req, res)
  }
}
