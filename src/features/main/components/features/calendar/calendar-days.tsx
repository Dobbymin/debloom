import { Fragment } from "react";
import { PiFlowerFill } from "react-icons/pi";

import { Box, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import type { Dayjs } from "dayjs";

type Props = {
  viewDate: Dayjs;
};

export const CalendarDays = ({ viewDate }: Props) => {
  const startWeek = viewDate.startOf("month").week();
  const endWeek = viewDate.endOf("month").week() === 1 ? 53 : viewDate.endOf("month").week();

  return (
    <SimpleGrid columns={7} rowGap={5} w="full">
      {Array.from({ length: endWeek - startWeek + 1 }, (_, index) => startWeek + index).map((week) => (
        <Fragment key={week}>
          {Array(7)
            .fill(0)
            .map((_, i) => {
              const current = viewDate.week(week).startOf("week").add(i, "day");
              return (
                <Flex key={`${week}-${i}`} gap={3} alignItems="center" flexDir="column" justifyContent="center">
                  <Box
                    color="neutral.500"
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="neutral.400"
                    borderRadius="full"
                    boxSize={3}
                  >
                    <Icon as={PiFlowerFill} color="neutral.400" boxSize={8} />
                    <Text position="absolute" color="white" fontSize="xs" fontWeight="bold">
                      7
                    </Text>
                  </Box>
                  <Text fontSize="xs" color={i === 0 ? "red.500" : i === 6 ? "blue.500" : "black"}>
                    {current.format("D")}
                  </Text>
                </Flex>
              );
            })}
        </Fragment>
      ))}
    </SimpleGrid>
  );
};
