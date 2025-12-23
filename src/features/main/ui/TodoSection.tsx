import { useState } from "react";

import { Box, Flex } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";

import { useSelectedDate } from "@/entities";

import { postTodoAPI, updateTodoAPI } from "../apis";
import { Category, TodoList } from "../components";
import { TodoListSkeleton } from "../components";
import { TODO_QUERY_KEYS } from "../constants";
import { useGetTodos } from "../hooks";

export const TodoSection = () => {
  const { selectedDate } = useSelectedDate();

  const requestDate = selectedDate ?? dayjs().format("YYYY-MM-DD");

  const { data: todoData, isLoading } = useGetTodos(requestDate);

  const [activeInputId, setActiveInputId] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState("");

  const queryClient = useQueryClient();

  const invalidateTodos = () => {
    queryClient.invalidateQueries({ queryKey: TODO_QUERY_KEYS.todos.list(requestDate) });
  };

  const { mutate: createTodoMutate } = useMutation({
    mutationFn: (variables: { categoryName: string; content: string }) =>
      postTodoAPI({ categoryName: variables.categoryName, todoDate: requestDate, content: variables.content }),
    onSuccess: invalidateTodos,
  });

  const { mutate: updateTodoMutate } = useMutation({
    mutationFn: ({ todoId, isCompleted }: { todoId: number; isCompleted: boolean }) =>
      updateTodoAPI(todoId, isCompleted),
    onSuccess: invalidateTodos,
  });

  const createTodo = (categoryName: string) => {
    if (!inputValue.trim()) return;

    createTodoMutate({ categoryName, content: inputValue });
    setInputValue("");
  };

  const toggleTodoStatus = (todoId: number, isCompleted: boolean) => {
    updateTodoMutate({ todoId, isCompleted: !isCompleted });
  };

  return (
    <Flex w="35%" flexDir="column" p={5} maxH="full" overflowY="auto">
      <Category />
      <Flex flexDir="column" gap={5}>
        {isLoading ? (
          <>
            <TodoListSkeleton />
            <TodoListSkeleton />
          </>
        ) : (
          (todoData?.data ?? []).map((daily) => (
            <Box key={daily.date}>
              <Flex flexDir="column" gap={3}>
                {(daily.categories ?? []).map((category) => (
                  <TodoList
                    key={category.categoryId}
                    category={category}
                    activeInputId={activeInputId}
                    setActiveInputId={setActiveInputId}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    createTodo={createTodo}
                    toggleTodoStatus={toggleTodoStatus}
                  />
                ))}
              </Flex>
            </Box>
          ))
        )}
      </Flex>
    </Flex>
  );
};
