import { useState } from "react";

import { Flex } from "@chakra-ui/react";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekday from "dayjs/plugin/weekday";

import { CalendarDays, CalendarHeader, CalendarWeekdays, UserLink } from "../components";
import { type MonthChangeAction, getChangedMonth } from "../utils";

export const CalendarSection = () => {
  dayjs.extend(weekday);
  dayjs.extend(isoWeek);
  dayjs.extend(weekOfYear);

  const [viewDate, setViewDate] = useState(dayjs());

  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

  const changeMonth = (action: MonthChangeAction) => {
    setViewDate(getChangedMonth(viewDate, action));
  };

  return (
    <Flex w="65%" flexDir="column" gap={5} p={5}>
      <UserLink />
      <CalendarHeader viewDate={viewDate} onChangeMonth={changeMonth} />
      <CalendarWeekdays weekDays={weekDays} />
      <CalendarDays viewDate={viewDate} />
    </Flex>
  );
};
