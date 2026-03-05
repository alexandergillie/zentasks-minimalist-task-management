import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export type FilterType = 'all' | 'active' | 'completed';
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}
interface TodoState {
  tasks: Todo[];
  filter: FilterType;
  addTask: (text: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  setFilter: (filter: FilterType) => void;
  clearCompleted: () => void;
}
export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      tasks: [],
      filter: 'all',
      addTask: (text) =>
        set((state) => ({
          tasks: [
            {
              id: crypto.randomUUID(),
              text,
              completed: false,
              createdAt: Date.now(),
            },
            ...state.tasks,
          ],
        })),
      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      setFilter: (filter) => set({ filter }),
      clearCompleted: () =>
        set((state) => ({
          tasks: state.tasks.filter((task) => !task.completed),
        })),
    }),
    {
      name: 'zen-tasks-storage',
    }
  )
);