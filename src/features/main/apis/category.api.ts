import { BASE_URL } from "@/shared";

export const postCategoryAPI = async (categoryName: string) => {
  const response = await fetch(`${BASE_URL}/api/todos/groups`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categoryName),
  });

  if (!response.ok) {
    throw new Error("Failed to create todo");
  }

  return response.json();
};
