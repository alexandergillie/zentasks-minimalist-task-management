import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Toaster } from '@/components/ui/sonner';
import { TodoInput } from '@/components/todo/todo-input';
import { TodoItem } from '@/components/todo/todo-item';
import { TodoFilters } from '@/components/todo/todo-filters';
import { TodoStats } from '@/components/todo/todo-stats';
import { useTodoStore } from '@/store/todo-store';
export function HomePage() {
  const tasks = useTodoStore((s) => s.tasks);
  const filter = useTodoStore((s) => s.filter);
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500 selection:bg-orange-200 dark:selection:bg-orange-900/40">
      {/* Background Ambience */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-200/20 dark:bg-orange-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-200/20 dark:bg-orange-500/5 blur-[120px]" />
      </div>
      <ThemeToggle className="fixed top-6 right-6" />
      <main className="relative max-w-2xl mx-auto px-4 py-16 md:py-24 space-y-12">
        <TodoStats />
        <div className="space-y-8">
          <TodoInput />
          <div className="space-y-4">
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredTasks.length > 0 ? (
                filteredTasks.map((task) => (
                  <TodoItem key={task.id} task={task} />
                ))
              ) : (
                <div 
                  key="empty"
                  className="py-12 text-center text-zinc-400 dark:text-zinc-600 animate-fade-in"
                >
                  {filter === 'all' 
                    ? "Your zen space is clear. Take a breath." 
                    : "Nothing to see here."}
                </div>
              )}
            </AnimatePresence>
          </div>
          <TodoFilters />
        </div>
      </main>
      <Toaster richColors position="bottom-center" />
    </div>
  );
}