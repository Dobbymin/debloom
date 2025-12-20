import { Flex } from "@chakra-ui/react";

import { CalendarSection, TodoSection } from "@/features";

export const MainPage = () => {
  return (
    <Flex w="full">
      <CalendarSection />
      <TodoSection />
    </Flex>
  );
};
