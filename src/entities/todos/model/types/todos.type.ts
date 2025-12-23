export type Todo = {
  todosId: number;
  content: string;
  isCompleted: boolean;
};

export type Category = {
  categoryId: number;
  name: string;
  categoryCreatedAt?: string;
  todos: Todo[];
};

export type DailyTodo = {
  date: string;
  totalTodosCount: number;
  categories: Category[];
};
