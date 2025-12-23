import { useTodosStore } from "../store";

export const useSelectedDate = () => {
  const selectedDate = useTodosStore((state) => state.selectedDate);
  const setSelectedDate = useTodosStore((state) => state.setSelectedDate);

  const updateSelectedDate = (date: string | null) => {
    setSelectedDate(date);
  };

  return { selectedDate, updateSelectedDate };
};
