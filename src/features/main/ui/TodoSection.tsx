import { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { FiCheck, FiPlus } from "react-icons/fi";
import { PiFlowerFill } from "react-icons/pi";

import { Box, Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";

import { useSelectedDate } from "@/entities";

import { postTodoAPI, updateTodoAPI } from "../apis";
import { Category } from "../components";
import { TODO_QUERY_KEYS } from "../constants";
import { useGetTodos } from "../hooks";

export const TodoSection = () => {
  const queryClient = useQueryClient();
  const { selectedDate } = useSelectedDate();
  const requestDate = selectedDate ?? dayjs().format("YYYY-MM-DD");

  const { data: todoData } = useGetTodos(requestDate);

  const [activeInputId, setActiveInputId] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState("");

  const { mutate: createTodoMutate } = useMutation({
    mutationFn: (variables: { categoryName: string; content: string }) =>
      postTodoAPI({ categoryName: variables.categoryName, todoDate: requestDate, content: variables.content }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: requestDate ? TODO_QUERY_KEYS.todos.list(requestDate) : TODO_QUERY_KEYS.todos.all,
      });
    },
  });

  const { mutate: updateTodoMutate } = useMutation({
    mutationFn: ({ todoId, isCompleted }: { todoId: number; isCompleted: boolean }) =>
      updateTodoAPI(todoId, isCompleted),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: requestDate ? TODO_QUERY_KEYS.todos.list(requestDate) : TODO_QUERY_KEYS.todos.all,
      });
    },
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
        {(todoData?.data ?? []).map((daily) => (
          <Box key={daily.date}>
            <Flex flexDir="column" gap={3}>
              {(daily.categories ?? []).map((category) => (
                <Flex key={category.categoryId} flexDir="column" gap={2}>
                  <Button
                    w="fit-content"
                    px={2}
                    bg="neutral.200"
                    rounded="full"
                    size="sm"
                    colorScheme="primary"
                    onClick={() => setActiveInputId(activeInputId === category.categoryId ? null : category.categoryId)}
                  >
                    <Flex px={1} gap={2} alignItems="center">
                      <Icon color="gray.400" as={FaUserFriends} />
                      <Text color="red.500" fontSize="sm" fontWeight="bold">
                        {category.name}
                      </Text>
                    </Flex>
                    <Flex bg="neutral.0" rounded="full" w={5} h={5} alignItems="center" justifyContent="center" ml={2}>
                      <Icon color="black" as={FiPlus} />
                    </Flex>
                  </Button>

                  {(category.todos ?? []).map((todo) => (
                    <Flex key={todo.todosId} p={2} alignItems="center" gap={3}>
                      <Box cursor="pointer" onClick={() => toggleTodoStatus(todo.todosId, todo.isCompleted)}>
                        <Flex
                          alignItems="center"
                          justifyContent="center"
                          borderRadius="full"
                          boxSize={8}
                          position="relative"
                        >
                          <Icon as={PiFlowerFill} color={todo.isCompleted ? "primary" : "neutral.400"} boxSize={8} />
                          <Flex
                            position="absolute"
                            alignItems="center"
                            justifyContent="center"
                            boxSize={5}
                            borderRadius="full"
                            bg={todo.isCompleted ? "primary" : "neutral.400"}
                          >
                            {todo.isCompleted && <Icon as={FiCheck} color="white" boxSize={4} />}
                          </Flex>
                        </Flex>
                      </Box>
                      <Text fontSize="sm">{todo.content}</Text>
                    </Flex>
                  ))}

                  {activeInputId === category.categoryId && (
                    <Input
                      size="sm"
                      placeholder="일정을 입력하세요"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                          createTodo(category.name);
                        }
                      }}
                      mt={1}
                    />
                  )}
                </Flex>
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
