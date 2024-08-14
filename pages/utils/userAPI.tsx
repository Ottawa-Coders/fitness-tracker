import { userInfo } from "@/pages/constants";

export const fetchUser = async (id: number) => {
  try {
    const response = await fetch(`/api/user/routes?id=${id}`);
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

export const updateUser = async (body: userInfo, userId: number) => {
  try {
    const response = await fetch(`/api/user/routes?id=${userId}`, {
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
