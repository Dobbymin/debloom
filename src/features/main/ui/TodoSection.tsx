import { FaUserFriends } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { TbPencilPlus } from "react-icons/tb";

import { Button, Flex, Icon, Text } from "@chakra-ui/react";

export const TodoSection = () => {
  return (
    <Flex w="35%" flexDir="column" p={5}>
      <Flex cursor="pointer" gap={2} alignItems="center" justifyContent="end" pb={2} w="full">
        <Icon as={TbPencilPlus} boxSize={4} color="neutral.600" />
        <Text fontSize="sm" fontWeight="bold" color="neutral.600">
          카테고리 추가
        </Text>
      </Flex>
      <Flex flexDir="column" gap={5}>
        <Button w="fit-content" px={2} bg="neutral.200" rounded="full" size="sm" colorScheme="primary">
          <Flex px={1} gap={2} alignItems="center">
            <Icon color="gray.400" as={FaUserFriends} />
            <Text color="red.500" fontSize="sm" fontWeight="bold">
              일정1
            </Text>
          </Flex>
          <Flex bg="neutral.0" rounded="full" w={5} h={5} alignItems="center" justifyContent="center">
            <Icon color="black" as={FiPlus} />
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
};
