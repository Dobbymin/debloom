import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const initialState = {
  selectedDate: null as string | null,
};

export const useTodosStore = create(
  devtools(
    immer(
      combine(initialState, (set) => ({
        setSelectedDate: (date: string | null) => {
          set((state) => {
            state.selectedDate = date;
          });
        },
      })),
    ),
    {
      name: "todos-store",
    },
  ),
);
