import type { DailyTodo } from "@/entities";
import { type ApiResponse, BASE_URL } from "@/shared";

export const getTodosAPI = async (date?: string): Promise<ApiResponse<DailyTodo[]>> => {
  const url = date ? `${BASE_URL}/api/todos?date=${date}` : `${BASE_URL}/api/todos`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return response.json();
};

export const postTodoAPI = async (todoData: string) => {
  const response = await fetch(`${BASE_URL}/api/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoData),
  });

  if (!response.ok) {
    throw new Error("Failed to create todo");
  }

  return response.json();
};
