import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/supabase";
import { authenticateToken } from "@/auth";

export type UserPayload = {
  userId: string;
  username: string;
}

const userInfo = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  console.log('in')
  authenticateToken(req, res, async (user: UserPayload) => {
    console.log(user)

  const { data, error } = await supabase
    .from("user")
    .select()
    .eq('id', user.userId);

  if (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error", userId: -1, token: ""});
  }

  console.log(data[0])
  return res
    .status(200)
    .json({ message: "Data retrieval successful" });
  })
};

export { userInfo };
