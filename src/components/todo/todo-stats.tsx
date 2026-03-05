import React from 'react';
import { format } from 'date-fns';
import { useTodoStore } from '@/store/todo-store';
import { Progress } from '@/components/ui/progress';
export const TodoStats = () => {
  const tasks = useTodoStore((s) => s.tasks);
  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center text-center space-y-1">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {format(new Date(), 'EEEE')}
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 font-medium">
          {format(new Date(), 'MMMM do, yyyy')}
        </p>
      </div>
      <div className="space-y-2 px-2">
        <div className="flex justify-between text-sm font-medium">
          <span className="text-zinc-500">Daily Progress</span>
          <span className="text-orange-500">
            {completedCount}/{totalCount} Completed
          </span>
        </div>
        <Progress value={progress} className="h-2 bg-zinc-200 dark:bg-zinc-800" />
      </div>
    </div>
  );
};