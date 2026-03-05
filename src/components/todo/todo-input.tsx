import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTodoStore } from '@/store/todo-store';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
export const TodoInput = () => {
  const [text, setText] = useState('');
  const addTask = useTodoStore((s) => s.addTask);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text.trim());
      setText('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="relative group">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="h-14 pl-6 pr-16 text-lg rounded-2xl bg-white/50 dark:bg-zinc-900/50 border-white/20 dark:border-zinc-800/50 focus-visible:ring-orange-500/50 backdrop-blur-md transition-all shadow-sm focus:shadow-md"
      />
      <Button
        type="submit"
        size="icon"
        disabled={!text.trim()}
        className="absolute right-2 top-2 h-10 w-10 rounded-xl bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/20 shadow-lg transition-transform active:scale-95 disabled:opacity-50 disabled:grayscale"
      >
        <Plus className="w-6 h-6" />
      </Button>
    </form>
  );
};