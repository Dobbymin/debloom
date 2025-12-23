import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import type { Dayjs } from "dayjs";

import type { MonthChangeAction } from "../../../utils";

type Props = {
  viewDate: Dayjs;
  onChangeMonth: (action: MonthChangeAction) => void;
};

export const CalendarHeader = ({ viewDate, onChangeMonth }: Props) => {
  return (
    <Flex gap={4} px={5} w="full" pb={2} alignItems="center" justifyContent="space-between">
      <Flex gap={1} onClick={() => onChangeMonth("today")}>
        <Text fontWeight="extrabold">{viewDate.format("YYYY")}년</Text>
        <Text fontWeight="extrabold">{viewDate.format("M")}월</Text>
      </Flex>
      <Flex gap={3} alignItems="center">
        <Box cursor="pointer" onClick={() => onChangeMonth("subtract")}>
          <Icon as={MdArrowBackIos} />
        </Box>
        <Box cursor="pointer" onClick={() => onChangeMonth("add")}>
          <Icon as={MdArrowForwardIos} />
        </Box>
      </Flex>
    </Flex>
  );
};
