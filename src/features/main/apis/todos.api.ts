import type { DailyTodo, MonthlyTodoCount } from "@/entities";
import { type ApiResponse, BASE_URL } from "@/shared";

export const getTodosAPI = async (date?: string): Promise<ApiResponse<DailyTodo[]>> => {
  const url = date ? `${BASE_URL}/api/todos?date=${date}` : `${BASE_URL}/api/todos`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return response.json();
};

export const postTodoAPI = async (payload: { categoryName: string; todoDate: string; content: string }) => {
  const response = await fetch(`${BASE_URL}/api/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to create todo");
  }

  return response.json();
};

export const updateTodoAPI = async (todoId: number, isCompleted: boolean) => {
  const response = await fetch(`${BASE_URL}/api/todos/${todoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isCompleted }),
  });

  if (!response.ok) {
    throw new Error("Failed to update todo");
  }

  return response.json();
};

export const totalTodosAPI = async (month: string): Promise<ApiResponse<MonthlyTodoCount[]>> => {
  const response = await fetch(`${BASE_URL}/api/todos/monthly?month=${month}`);

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return response.json();
};
