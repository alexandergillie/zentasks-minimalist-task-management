import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, CheckCircle2, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTodoStore, Todo } from '@/store/todo-store';
import { Button } from '@/components/ui/button';
interface TodoItemProps {
  task: Todo;
}
export const TodoItem = ({ task }: TodoItemProps) => {
  const toggleTask = useTodoStore((s) => s.toggleTask);
  const deleteTask = useTodoStore((s) => s.deleteTask);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className={cn(
        "group flex items-center gap-3 p-4 rounded-2xl transition-all duration-300",
        "bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm border border-white/20 dark:border-zinc-800/50",
        "hover:shadow-md hover:bg-white/60 dark:hover:bg-zinc-900/60",
        task.completed && "opacity-60"
      )}
    >
      <button
        onClick={() => toggleTask(task.id)}
        className="flex-shrink-0 transition-transform active:scale-90"
      >
        {task.completed ? (
          <CheckCircle2 className="w-6 h-6 text-orange-500 fill-orange-500/10" />
        ) : (
          <Circle className="w-6 h-6 text-zinc-400 dark:text-zinc-600 hover:text-orange-400" />
        )}
      </button>
      <span
        className={cn(
          "flex-grow text-lg font-medium transition-all duration-300 break-words",
          task.completed && "line-through text-zinc-400 decoration-orange-500/50"
        )}
      >
        {task.text}
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => deleteTask(task.id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-destructive hover:bg-destructive/10"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </motion.div>
  );
};