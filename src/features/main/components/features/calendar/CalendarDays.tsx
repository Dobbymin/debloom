import { Fragment } from "react";

import { SimpleGrid } from "@chakra-ui/react";
import { type Dayjs } from "dayjs";

import { useGetTotalTodos } from "../../../hooks";
import { TodoDay } from "../../common";

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
            .map((_, i) => (
              <TodoDay
                key={`${week}-${i}`}
                week={week}
                i={i}
                viewDate={viewDate}
                selectDate={selectDate}
                onSelectDate={onSelectDate}
                totalTodoData={totalTodoData}
              />
            ))}
        </Fragment>
      ))}
    </SimpleGrid>
  );
};
