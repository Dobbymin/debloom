import { Fragment } from "react";
import { PiFlowerFill } from "react-icons/pi";

import { Box, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import dayjs, { type Dayjs } from "dayjs";

import { useGetTotalTodos } from "../../../hooks";

type Props = {
  viewDate: Dayjs;
  selectDate: Dayjs | null;
  onSelectDate: (date: Dayjs) => void;
};

export const CalendarDays = ({ viewDate, selectDate, onSelectDate }: Props) => {
  const startWeek = viewDate.startOf("month").week();
  const endWeek = viewDate.endOf("month").week() === 1 ? 53 : viewDate.endOf("month").week();

  const { data: totalTodoData } = useGetTotalTodos(viewDate.format("YYYY-MM"));

  return (
    <SimpleGrid columns={7} rowGap={5} w="full">
      {Array.from({ length: endWeek - startWeek + 1 }, (_, index) => startWeek + index).map((week) => (
        <Fragment key={week}>
          {Array(7)
            .fill(0)
            .map((_, i) => {
              const current = viewDate.week(week).startOf("week").add(i, "day");
              // 선택된 날짜 여부
              const isSelected = selectDate?.format("YYYYMMDD") === current.format("YYYYMMDD");
              // 오늘 날짜 여부
              const isToday = dayjs().format("YYYYMMDD") === current.format("YYYYMMDD");
              // 보여질 날짜가 아닌 경우 (다른 달의 날짜인 경우)
              const isNone = current.format("MM") === viewDate.format("MM") ? "" : "none";

              // 해당 날짜의 투두 개수 찾기
              const todoCountObj = totalTodoData?.data?.find((d) => d.date === current.format("YYYY-MM-DD"));
              const count = todoCountObj?.todosCount || 0;

              return (
                <Flex
                  key={`${week}-${i}`}
                  gap={1}
                  alignItems="center"
                  flexDir="column"
                  justifyContent="center"
                  cursor="pointer"
                  opacity={isNone ? 0 : 1}
                  pointerEvents={isNone ? "none" : "auto"}
                  onClick={() => onSelectDate(current)}
                >
                  {/* 꽃 아이콘 */}
                  <Box position="relative" display="flex" alignItems="center" justifyContent="center">
                    {/* 꽃 아이콘 중앙 배경 */}
                    <Box position="absolute" bg="neutral.300" borderRadius="full" w={4} h={4} zIndex={0} />
                    <Icon as={PiFlowerFill} boxSize={9} color="neutral.300" />
                    {count > 0 && (
                      <Text
                        position="absolute"
                        color="neutral.700"
                        fontSize="xs"
                        fontWeight="bold"
                        zIndex={1}
                        textAlign="center"
                      >
                        {count}
                      </Text>
                    )}
                  </Box>
                  {/* 날짜 텍스트 */}
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    bg={isToday ? "black" : isSelected ? "primary.300" : "transparent"}
                    color={
                      isToday || isSelected
                        ? "white"
                        : current.day() === 0
                          ? "red.500"
                          : current.day() === 6
                            ? "blue.500"
                            : "black"
                    }
                    borderRadius="full"
                    w={6}
                    h={6}
                  >
                    <Text fontSize="xs" fontWeight={isToday || isSelected ? "bold" : "normal"}>
                      {current.format("D")}
                    </Text>
                  </Flex>
                </Flex>
              );
            })}
        </Fragment>
      ))}
    </SimpleGrid>
  );
};
