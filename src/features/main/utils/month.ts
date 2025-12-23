import dayjs, { Dayjs } from "dayjs";

export type MonthChangeAction = "add" | "subtract" | "today";

export const getChangedMonth = (viewDate: Dayjs, action: MonthChangeAction): Dayjs => {
  switch (action) {
    case "add":
      return viewDate.add(1, "month");
    case "subtract":
      return viewDate.subtract(1, "month");
    case "today":
      return dayjs();
    default:
      return viewDate;
  }
};
