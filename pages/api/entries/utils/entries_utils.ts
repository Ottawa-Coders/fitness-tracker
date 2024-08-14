import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/supabase";

type StandardResponseData = {
  message: string;
};

// body required is just JSON string with everything
const insertEntry = async (
  req: NextApiRequest,
  res: NextApiResponse<StandardResponseData>
) => {
  const newEntry = JSON.parse(req.body);

  console.log(newEntry);

  const { data, error } = await supabase
    .from("entries")
    .insert([newEntry])
    .select();

  if (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }

  return res.status(200).json({ message: "Entry has has been created" });
};

// body required is just JSON string with everything
const updateEntry = async (
  req: NextApiRequest,
  res: NextApiResponse<StandardResponseData>
) => {
  const updateInfo = JSON.parse(req.body) as {
    user_id: string;
    measurement: string;
    value: number;
    last_updated: string;
    created_at: Date;
  };

  const { data, error } = await supabase
    .from("entries")
    .update(updateInfo)
    .eq("created_at", updateInfo.created_at)
    .eq("user_id", updateInfo.user_id)
    .select();

  if (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }

  return res.status(200).json({ message: "Entry has been updated" });
};

// body required is just JSON string with created at and user_id
const getEntryInfo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const body = JSON.parse(req.body) as {
      created_at: string; // Assuming ISO 8601 string for date
      user_id: number;
    };

    const createdAtISO = new Date(body.created_at).toISOString();

    const { data, error } = await supabase
      .from("entries")
      .select()
      .eq("created_at", createdAtISO)
      .eq("user_id", body.user_id);

    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Server error", data: null });
    }

    return res
      .status(200)
      .json({ message: "Data retrieval successful", data: data });
  } catch (error) {
    console.error("Error in get function:", error);
    return res.status(500).json({ message: "Server error", data: null });
  }
};

// body required is just JSON string with created at and user_id
const delEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const body = JSON.parse(req.body) as {
      created_at: string; // Assuming ISO 8601 string for date
      user_id: number;
    };

    const createdAtISO = new Date(body.created_at).toISOString();

    const { data, error } = await supabase
      .from("entries")
      .delete()
      .eq("created_at", createdAtISO)
      .eq("user_id", body.user_id);

    if (error) {
      console.error("Error deleting record:", error);
      return res.status(500).json({ message: "Server error" });
    }

    return res
      .status(200)
      .json({ message: "Record deleted successfully", data });
  } catch (error) {
    console.error("Error in delete function:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export { insertEntry, updateEntry, getEntryInfo, delEntry };
