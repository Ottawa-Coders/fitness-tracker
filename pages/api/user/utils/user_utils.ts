import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/supabase";

type InsertResponseData = {
  message: string;
  id: number;
};

type StandardResponseData = {
  message: string;
};

const insertUser = async (
  req: NextApiRequest,
  res: NextApiResponse<InsertResponseData>
) => {
  const newUser = JSON.parse(req.body);

  const { data, error } = await supabase
    .from("user")
    .insert([newUser])
    .select();

  if (error) {
    console.log(error);
    return res.status(500).json({ message: "server error", id: -1 });
  }

  return res
    .status(200)
    .json({ message: "User has been created", id: data[0].id });
};

const updateUser = async (
  req: NextApiRequest,
  res: NextApiResponse<StandardResponseData>
) => {
  const updateInfo = req.body;
  const { id: userId } = req.query;

  const { data, error } = await supabase
    .from("user")
    .update(updateInfo)
    .eq("id", userId)
    .select();

  if (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }

  return res.status(200).json({ message: "User has been updated" });
};

// test get user info without auth (specifically just used for testing will be replaced by auth ltr)
const getUserInfo = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id: userId } = req.query;

  const { data, error } = await supabase.from("user").select().eq("id", userId);

  if (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error", data: null });
  }

  return res
    .status(200)
    .json({ message: "Data retrieval successful", data: data });
};

export { insertUser, updateUser, getUserInfo };
