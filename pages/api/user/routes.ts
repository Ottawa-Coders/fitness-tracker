import { NextApiRequest, NextApiResponse } from "next";

import {
  insertUser,
  updateUser,
  getUserInfo,
} from "@/pages/api/user/utils/user_utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return await insertUser(req, res);
  } else if (req.method === "PUT") {
    return await updateUser(req, res);
  } else if (req.method === "GET") {
    return await getUserInfo(req, res);
  } else {
    // Handle any other HTTP method
  }
}
