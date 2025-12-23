import { Flex, Skeleton, SkeletonText } from "@chakra-ui/react";

export const TodoListSkeleton = () => {
  return (
    <Flex flexDir="column" gap={2}>
      <Skeleton w="100px" h="28px" rounded="full" />

      <Flex p={2} alignItems="center" gap={3}>
        <Skeleton rounded="full" boxSize={8} />
        <SkeletonText noOfLines={1} w="60%" />
      </Flex>

      <Flex p={2} alignItems="center" gap={3}>
        <Skeleton rounded="full" boxSize={8} />
        <SkeletonText noOfLines={1} w="40%" />
      </Flex>
    </Flex>
  );
};
