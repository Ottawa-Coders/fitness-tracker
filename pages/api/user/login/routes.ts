import { NextApiRequest, NextApiResponse } from "next";

import { loginUser } from "@/pages/api/user/login/utils/user_utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return await loginUser(req, res);
  } else {
    // Handle any other HTTP method
  }
}
