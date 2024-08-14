import { userInfo } from "@/pages/constants";

export const fetchUser = async (date: Date, userId: number) => {
  try {
    const response = await fetch(`/api/entries/routes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ created_at: date, user_id: userId }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return { data: null };
  }
};

export const updateUser = async (body: userInfo) => {
  try {
    const response = await fetch(`/api/entries/routes`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating user:", error);
    return { data: null };
  }
};
