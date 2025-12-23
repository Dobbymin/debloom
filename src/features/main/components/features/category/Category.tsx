import { TbPencilPlus } from "react-icons/tb";

import { Flex, Icon, Text } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";

import { useSelectedDate } from "@/entities";

import { postCategoryAPI } from "../../../apis";
import { TODO_QUERY_KEYS } from "../../../constants";

export const Category = () => {
  const queryClient = useQueryClient();
  const { selectedDate } = useSelectedDate();
  const requestDate = selectedDate ?? dayjs().format("YYYY-MM-DD");

  const { mutate: createCategoryMutate } = useMutation({
    mutationFn: (categoryName: string) => postCategoryAPI(categoryName, requestDate),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TODO_QUERY_KEYS.todos.list(requestDate) });
    },
  });

  const handleCreateCategory = () => {
    const name = window.prompt("추가할 카테고리 이름을 입력해주세요.");
    if (!name) return;

    createCategoryMutate(name);
  };

  return (
    <Flex
      cursor="pointer"
      gap={2}
      alignItems="center"
      justifyContent="end"
      pb={2}
      w="full"
      onClick={handleCreateCategory}
    >
      <Icon as={TbPencilPlus} boxSize={4} color="neutral.600" />
      <Text fontSize="sm" fontWeight="bold" color="neutral.600">
        카테고리 추가
      </Text>
    </Flex>
  );
};
