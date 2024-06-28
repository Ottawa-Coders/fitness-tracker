import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/supabase";

type ResponseData = {
  message: string;
};

const insertFood = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const newFood = JSON.parse(req.body);

  console.log(newFood);

  const { data, error } = await supabase
    .from("food")
    .insert([newFood])
    .select();

  if (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }

  return res.status(200).json({ message: "Food has been created" });
};

export { insertFood };
