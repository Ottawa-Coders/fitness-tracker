import { NextApiRequest, NextApiResponse } from "next";

import {
  insertEntry,
  updateEntry,
  getEntryInfo,
  delEntry,
} from "@/pages/api/entries/utils/entries_utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return await insertEntry(req, res);
  } else if (req.method === "PUT") {
    return await updateEntry(req, res);
  } else if (req.method === "GET") {
    return await getEntryInfo(req, res);
  } else if (req.method === "DELETE") {
    return await delEntry(req, res);
  } else {
    // Handle any other HTTP method
  }
}
