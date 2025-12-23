import { useQuery } from "@tanstack/react-query";

import { getTodosAPI, totalTodosAPI } from "../apis";
import { TODO_QUERY_KEYS } from "../constants";

export const useGetTodos = (date?: string) => {
  return useQuery({
    queryKey: TODO_QUERY_KEYS.todos.list(date ?? ""),
    queryFn: () => getTodosAPI(date ?? ""),
    enabled: Boolean(date),
  });
};

export const useGetTotalTodos = (month: string) => {
  return useQuery({
    queryKey: TODO_QUERY_KEYS.todos.total(month),
    queryFn: () => totalTodosAPI(month),
  });
};
