export const TODO_QUERY_KEYS = {
  todos: {
    all: ["todos"],
    total: (month: string) => ["todos", month],
    list: (date: string) => ["todos", date],
  },
};
