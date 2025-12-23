import { FaUserFriends } from "react-icons/fa";
import { FiCheck, FiPlus } from "react-icons/fi";
import { PiFlowerFill } from "react-icons/pi";

import { Box, Button, Flex, Icon, Input, Text } from "@chakra-ui/react";

import type { Category } from "@/entities";

type TodoListProps = {
  category: Category;
  activeInputId: number | null;
  setActiveInputId: (id: number | null) => void;
  inputValue: string;
  setInputValue: (v: string) => void;
  createTodo: (categoryName: string) => void;
  toggleTodoStatus: (todoId: number, isCompleted: boolean) => void;
};

export const TodoList = ({
  category,
  activeInputId,
  setActiveInputId,
  inputValue,
  setInputValue,
  createTodo,
  toggleTodoStatus,
}: TodoListProps) => {
  const onClickCategoryButton = () => {
    const nextId = activeInputId === category.categoryId ? null : category.categoryId;
    setActiveInputId(nextId);
    setInputValue("");
  };

  return (
    <Flex flexDir="column" gap={2}>
      <Button
        w="fit-content"
        px={2}
        bg="neutral.200"
        rounded="full"
        size="sm"
        colorScheme="primary"
        onClick={onClickCategoryButton}
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
            <Flex alignItems="center" justifyContent="center" borderRadius="full" boxSize={8} position="relative">
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
  );
};
