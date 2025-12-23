import { PiFlowerFill } from "react-icons/pi";

import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import dayjs, { Dayjs } from "dayjs";

type TotalTodoItem = { date: string; todosCount: number };
type TotalTodoData = { data?: TotalTodoItem[] } | undefined;

type Props = {
  week: number;
  i: number;
  viewDate: Dayjs;
  selectDate: Dayjs | null;
  onSelectDate: (date: Dayjs) => void;
  totalTodoData: TotalTodoData;
};

export const TodoDay = ({ week, i, viewDate, selectDate, onSelectDate, totalTodoData }: Props) => {
  const current = viewDate.week(week).startOf("week").add(i, "day");
  // 선택된 날짜 여부
  const isSelected = selectDate?.format("YYYYMMDD") === current.format("YYYYMMDD");
  // 오늘 날짜 여부
  const isToday = dayjs().format("YYYYMMDD") === current.format("YYYYMMDD");
  // 보여질 날짜가 아닌 경우 (다른 달의 날짜인 경우)
  const isOutOfMonth = current.format("MM") !== viewDate.format("MM");

  // 해당 날짜의 투두 개수 찾기
  const todoCountObj = totalTodoData?.data?.find((d) => d.date === current.format("YYYY-MM-DD"));
  const count = todoCountObj?.todosCount || 0;

  return (
    <Flex
      alignItems="center"
      flexDir="column"
      justifyContent="center"
      cursor="pointer"
      opacity={isOutOfMonth ? 0 : 1}
      pointerEvents={isOutOfMonth ? "none" : "auto"}
      onClick={() => onSelectDate(current)}
    >
      {/* 꽃 아이콘 */}
      <Flex position="relative" alignItems="center" justifyContent="center">
        {/* 꽃 아이콘 중앙 배경 */}
        <Box position="absolute" bg="neutral.300" borderRadius="full" w={3} h={3} zIndex={0} />
        <Icon as={PiFlowerFill} boxSize={7} color="neutral.300" />
        {count > 0 && (
          <Text position="absolute" color="neutral.700" fontSize="xs" fontWeight="bold" zIndex={1} textAlign="center">
            {count}
          </Text>
        )}
      </Flex>
      {/* 날짜 텍스트 */}
      <Flex
        alignItems="center"
        justifyContent="center"
        bg={isToday ? "primary.300" : isSelected ? "black" : "transparent"}
        color={
          isToday || isSelected ? "white" : current.day() === 0 ? "red.500" : current.day() === 6 ? "blue.500" : "black"
        }
        borderRadius="full"
        w={6}
        h={6}
      >
        <Text fontSize="xs" fontWeight={isToday || isSelected ? "bold" : "semibold"}>
          {current.format("D")}
        </Text>
      </Flex>
    </Flex>
  );
};
