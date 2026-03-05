import React from 'react';
import { motion } from 'framer-motion';
import { useTodoStore, FilterType } from '@/store/todo-store';
import { cn } from '@/lib/utils';
export const TodoFilters = () => {
  const filter = useTodoStore((s) => s.filter);
  const setFilter = useTodoStore((s) => s.setFilter);
  const clearCompleted = useTodoStore((s) => s.clearCompleted);
  const tasks = useTodoStore((s) => s.tasks);
  const hasCompleted = tasks.some(t => t.completed);
  const options: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Done', value: 'completed' },
  ];
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 px-2">
      <div className="flex p-1 bg-zinc-200/50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-xl border border-white/10">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => setFilter(option.value)}
            className={cn(
              "relative px-4 py-1.5 text-sm font-medium transition-colors rounded-lg",
              filter === option.value ? "text-zinc-900 dark:text-white" : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
            )}
          >
            {filter === option.value && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white dark:bg-zinc-700 shadow-sm rounded-lg"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{option.label}</span>
          </button>
        ))}
      </div>
      {hasCompleted && (
        <button
          onClick={clearCompleted}
          className="text-sm font-medium text-zinc-400 hover:text-orange-500 transition-colors"
        >
          Clear Completed
        </button>
      )}
    </div>
  );
};