import { useTodosStore } from "../store";

export const useSelectedDate = () => {
  const selectedDate = useTodosStore((state) => state.selectedDate);
  const updateSelectedDate = useTodosStore((state) => state.setSelectedDate);

  return { selectedDate, updateSelectedDate };
};
