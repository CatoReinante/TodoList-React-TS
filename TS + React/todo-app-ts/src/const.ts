export const TODO_FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
} as const;

export const FILTER_BUTTONS = {
  [TODO_FILTERS.ALL]: { label: "todos", value: TODO_FILTERS.ALL },
  [TODO_FILTERS.ACTIVE]: { label: "activos", value: TODO_FILTERS.ACTIVE },
  [TODO_FILTERS.COMPLETED]: {
    label: "completados",
    value: TODO_FILTERS.COMPLETED,
  },
} as const;
