import { NextApiRequest, NextApiResponse } from "next";

import { insertUser } from "@/pages/api/user/utils/user_utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return await insertUser(req, res);
  } else {
    // Handle any other HTTP method
  }
}
