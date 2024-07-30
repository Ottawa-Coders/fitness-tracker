import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/supabase";
import { FDCResponse, FDCResponseData } from '@/pages/constants'

type Body = {
  searchTerm: string;
}

const searchFood = async (
  req: NextApiRequest,
  res: NextApiResponse<FDCResponseData>
) => {
  const FDC_API_KEY = process.env.FDC_API_KEY as string
  const requestBody:Body = JSON.parse(req.body);

  const body = {
    query: requestBody.searchTerm,
    pageSize: 2,
    pageNumber: 1,
    sortBy: "dataType.keyword",
    sortOrder: "asc"
  };

  let responseBody:FDCResponse = {foods: []}
  const response = await fetch("https://api.nal.usda.gov/fdc/v1/foods/search", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json', 
      "X-Api-Key" : FDC_API_KEY
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      responseBody = data as unknown as FDCResponse
    });

  return res.status(200).json({results: responseBody})
};

export { searchFood };
