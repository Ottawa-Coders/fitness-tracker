import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/supabase";

type ResponseData = {
  results: any[]
};

type Body = {
  searchTerm: string;
}

const searchFood = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const body:Body = JSON.parse(req.body);

  console.log(body);

  const { data, error } = await supabase
    .from('food')
    .select()
    .like('name', '%' + body.searchTerm + "%")

  console.log(data)

  if (error) {
    console.log(error);
    return res.status(500);
  }

  return res.status(200).json({results: data});
};

export { searchFood };
