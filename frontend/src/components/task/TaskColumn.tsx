import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import type { Task, TaskStatus } from '../../types';
import { SortableTaskCard } from './SortableTaskCard';

interface TaskColumnProps {
  title: TaskStatus;
  tasks: Task[];
  columnId: string;
  onAddTask?: () => void;
}

export const TaskColumn: React.FC<TaskColumnProps> = ({ 
  title, 
  tasks,
  columnId,
  onAddTask
}) => {
  const { setNodeRef, isOver } = useDroppable({
    id: columnId,
  });

  return (
    <div className="flex-1 min-w-[280px]">
      {/* Column Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
            {tasks.length}
          </span>
        </div>
      </div>

      {/* Add Task Button */}
      <button
        onClick={onAddTask}
        className="w-full mb-3 p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 flex items-center justify-center group"
      >
        <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>

      {/* Tasks List - Droppable Area */}
      <div 
        ref={setNodeRef}
        className={`space-y-3 min-h-[400px] p-2 rounded-lg transition-all duration-300 ${
          isOver 
            ? 'bg-blue-50 dark:bg-blue-900/10 ring-2 ring-blue-400 dark:ring-blue-500 ring-offset-2 dark:ring-offset-gray-900 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        {tasks.length === 0 ? (
          <div className="flex items-center justify-center h-32 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800/50">
            <p className="text-sm text-gray-400 dark:text-gray-500 animate-pulse">Tidak ada tugas</p>
          </div>
        ) : (
          tasks.map((task) => (
            <SortableTaskCard key={task.id} task={task} />
          ))
        )}
      </div>
    </div>
  );
};
