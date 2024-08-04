import { NextApiRequest, NextApiResponse } from "next";

import { userInfo } from "@/pages/api/protected/user/utils/user_utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    return await userInfo(req, res);
  } else {
    // Handle any other HTTP method
  }
}
