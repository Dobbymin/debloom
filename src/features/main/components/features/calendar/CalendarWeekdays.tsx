import { Flex, SimpleGrid, Text } from "@chakra-ui/react";

type Props = {
  weekDays: string[];
};

export const CalendarWeekdays = ({ weekDays }: Props) => {
  return (
    <SimpleGrid columns={7} w="full">
      {weekDays.map((day, idx) => (
        <Flex key={`${day}-${idx}`} justifyContent="center">
          <Text
            fontSize="xs"
            color={idx === 0 ? "red.500" : idx === 6 ? "blue.500" : "black"}
            fontWeight="bold"
            textAlign="center"
          >
            {day}
          </Text>
        </Flex>
      ))}
    </SimpleGrid>
  );
};
