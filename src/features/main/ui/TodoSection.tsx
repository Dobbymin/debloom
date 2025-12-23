import { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { PiFlowerFill } from "react-icons/pi";

import { Box, Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postTodoAPI } from "../apis";
import { Category } from "../components";
import { TODO_QUERY_KEYS } from "../constants";
import { useGetTodos } from "../hooks";

export const TodoSection = () => {
  const queryClient = useQueryClient();
  const { data: todoData } = useGetTodos();
  const [activeInputId, setActiveInputId] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState("");

  const { mutate: createTodoMutate } = useMutation({
    mutationFn: (variables: { categoryId: number; content: string }) => postTodoAPI(variables.content), // Note: API currently only takes string, need to verify strictness or update API
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TODO_QUERY_KEYS.todos.all });
    },
  });

  console.log(todoData);

  /*
  useEffect(() => {
    if (todoData) {
      const dataToSet = Array.isArray(todoData) ? todoData : (todoData as any).data;

      if (Array.isArray(dataToSet)) {
        setDailyTodos(dataToSet);
      }
    }
  }, [todoData]);
  */

  const createTodo = (categoryId: number) => {
    if (!inputValue.trim()) return;

    // Assuming postTodoAPI needs to be updated to accept categoryId,
    // but for now connecting to existing function signature.
    createTodoMutate({ categoryId, content: inputValue });
    setInputValue("");
  };

  const toggleTodoStatus = (todoId: number) => {
    // TODO: Implement toggle API
    console.log("Toggle todo:", todoId);
    /*
    setDailyTodos((prev) =>
      prev.map((daily) => ({
        ...daily,
        categories: daily.categories.map((category) => ({
          ...category,
          todos: category.todos.map((todo) =>
            todo.todosId === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo,
          ),
        })),
      })),
    );
    */
  };

  return (
    <Flex w="35%" flexDir="column" p={5} maxH="full" overflowY="auto">
      <Category />
      <Flex flexDir="column" gap={5}>
        {todoData?.data?.map((daily) => (
          <Box key={daily.date}>
            <Flex flexDir="column" gap={3}>
              {daily.categories.map((category) => (
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

                  {category.todos.map((todo) => (
                    <Flex key={todo.todosId} p={2} alignItems="center" gap={4}>
                      <Box cursor="pointer" onClick={() => toggleTodoStatus(todo.todosId)}>
                        <Box
                          color={todo.isCompleted ? "neutral.500" : "neutral.300"}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          bg={todo.isCompleted ? "neutral.400" : "transparent"}
                          borderRadius="full"
                          boxSize={4}
                        >
                          <Icon
                            as={PiFlowerFill}
                            color={todo.isCompleted ? "neutral.400" : "neutral.300"}
                            boxSize={8}
                          />
                        </Box>
                      </Box>
                      <Text fontSize="sm" textDecoration={todo.isCompleted ? "line-through" : "none"}>
                        {todo.content}
                      </Text>
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
                          createTodo(category.categoryId);
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
