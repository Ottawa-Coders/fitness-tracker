import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/supabase";
import { NextResponse } from "next/server";

const insertUser = async (req: NextApiRequest) => {
  const { username, email, password } = req.body; // Assuming JSON body

  const newUser = {
    username,
    email,
    password,
  };

  console.log(newUser);

  const { data, error } = await supabase
    .from("user")
    .insert([newUser])
    .select();

  if (error) {
    return NextResponse.json(
      {
        error: "Failed to create new user",
        details: error.message,
      },
      { status: 500 }
    );
  }

  return NextResponse.json(
    {
      data: data,
    },
    { status: 200 }
  );
};

export { insertUser };
