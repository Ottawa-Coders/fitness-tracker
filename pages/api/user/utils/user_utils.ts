import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/supabase";

type ResponseData = {
  message: string;
};

const insertUser = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const newUser = JSON.parse(req.body);

  console.log(newUser);

  const { data, error } = await supabase
    .from("user")
    .insert([newUser])
    .select();

  if (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }

  return res.status(200).json({ message: "User has been created" });
};

export { insertUser };
