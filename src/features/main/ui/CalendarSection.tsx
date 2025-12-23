import { useState } from "react";

import { Flex } from "@chakra-ui/react";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekday from "dayjs/plugin/weekday";

import { useSelectedDate } from "@/entities";

import { CalendarDays, CalendarHeader, CalendarWeekdays, UserLink } from "../components";
import { type MonthChangeAction, getChangedMonth } from "../utils";

dayjs.extend(weekday);
dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);

export const CalendarSection = () => {
  const [viewDate, setViewDate] = useState(dayjs());
  const { selectedDate, updateSelectedDate } = useSelectedDate();

  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

  const changeMonth = (action: MonthChangeAction) => {
    setViewDate(getChangedMonth(viewDate, action));
  };

  const handleSelectDate = (date: dayjs.Dayjs) => {
    updateSelectedDate(date.format("YYYY-MM-DD"));
  };

  return (
    <Flex w="55%" flexDir="column" gap={4} p={6}>
      <UserLink />
      <CalendarHeader viewDate={viewDate} onChangeMonth={changeMonth} />
      <CalendarWeekdays weekDays={weekDays} />
      <CalendarDays
        viewDate={viewDate}
        selectDate={selectedDate ? dayjs(selectedDate) : null}
        onSelectDate={handleSelectDate}
      />
    </Flex>
  );
};
