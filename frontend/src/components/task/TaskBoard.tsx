import React, { useState } from 'react';
import { 
  DndContext, 
  DragOverlay, 
  closestCorners, 
  PointerSensor, 
  useSensor, 
  useSensors,
  type DragStartEvent,
  type DragOverEvent,
  type DragEndEvent
} from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import type { Task, TaskStatus } from '../../types';
import { TaskColumn } from './TaskColumn';
import { useTask } from '../../contexts';

interface TaskBoardProps {
  tasks: Task[];
  onUpdateTask?: (taskId: string, status: TaskStatus) => void;
}

export const TaskBoard: React.FC<TaskBoardProps> = ({ tasks, onUpdateTask }) => {
  const { reorderTasks } = useTask();
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const columns: TaskStatus[] = ['To Do', 'Doing', 'In Review', 'Done'];

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // Prevent accidental drags
      },
    })
  );

  const getTasksByStatus = (status: TaskStatus) => {
    return tasks.filter(task => task.status === status);
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const task = tasks.find(t => t.id === active.id);
    if (task) {
      setActiveTask(task);
    }
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeTask = tasks.find(t => t.id === active.id);
    if (!activeTask) return;

    // Check if dropping over a column (not a task)
    const overColumnMatch = String(over.id).match(/^column-(.+)$/);
    if (overColumnMatch) {
      const newStatus = overColumnMatch[1] as TaskStatus;
      if (activeTask.status !== newStatus && onUpdateTask) {
        onUpdateTask(activeTask.id, newStatus);
      }
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const activeTask = tasks.find(t => t.id === active.id);
    const overTask = tasks.find(t => t.id === over.id);

    if (!activeTask) return;

    // If dropping on another task in the same column
    if (overTask && activeTask.status === overTask.status && active.id !== over.id) {
      const tasksInColumn = getTasksByStatus(activeTask.status);
      const oldIndex = tasksInColumn.findIndex(t => t.id === active.id);
      const newIndex = tasksInColumn.findIndex(t => t.id === over.id);
      
      if (oldIndex !== newIndex) {
        reorderTasks(activeTask.id, newIndex, activeTask.status);
      }
    }
    // If dropping on a column container
    else {
      const overColumnMatch = String(over.id).match(/^column-(.+)$/);
      if (overColumnMatch) {
        const newStatus = overColumnMatch[1] as TaskStatus;
        if (activeTask.status !== newStatus && onUpdateTask) {
          onUpdateTask(activeTask.id, newStatus);
        }
      }
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="flex gap-6 overflow-x-auto pb-4">
        {columns.map((column) => {
          const columnTasks = getTasksByStatus(column);
          return (
            <SortableContext
              key={column}
              items={columnTasks.map(t => t.id)}
              strategy={verticalListSortingStrategy}
            >
              <TaskColumn
                title={column}
                tasks={columnTasks}
                columnId={`column-${column}`}
              />
            </SortableContext>
          );
        })}
      </div>

      {/* Ghost Card Overlay */}
      <DragOverlay 
        dropAnimation={{
          duration: 400,
          easing: 'cubic-bezier(0.18, 0.67, 0.6, 1.22)',
        }}
      >
        {activeTask ? (
          <div 
            className="cursor-grabbing opacity-95"
            style={{
              filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))',
              transform: 'rotate(3deg)',
              animation: 'float 2s ease-in-out infinite',
              width: '280px',
              maxWidth: '280px'
            }}
          >
            {/* Full Task Card - Same as original */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border-2 border-blue-500 relative overflow-visible">
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-lg opacity-75 pointer-events-none" style={{
                background: 'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
                backgroundSize: '200% 200%',
                animation: 'shimmer 2s linear infinite'
              }} />
              
              <div className="relative z-10">
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded text-xs font-medium">
                    {activeTask.priority}
                  </div>
                  <div className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs font-medium">
                    {activeTask.category}
                  </div>
                </div>

                {/* Thumbnail */}
                <div className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-lg mb-3 overflow-hidden">
                  {activeTask.thumbnail ? (
                    <img 
                      src={activeTask.thumbnail} 
                      alt={activeTask.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2 text-left text-base">
                  {activeTask.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 text-left">
                  {activeTask.description}
                </p>

                {/* Date */}
                {activeTask.dueDate && (
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                    </svg>
                    <span>{new Date(activeTask.dueDate).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
                  </div>
                )}

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 relative overflow-visible">
                    <div 
                      className="h-2.5 rounded-full transition-all duration-300 relative"
                      style={{ 
                        width: `${(activeTask.progress / 10) * 100}%`,
                        background: 'linear-gradient(90deg, #F27B66 0%, #FD5477 100%)',
                        boxShadow: '0 2px 8px rgba(242, 123, 102, 0.4)'
                      }}
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-3">
                    {/* Comments */}
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                      <span>{activeTask.comments || 0}</span>
                    </div>

                    {/* Attachments */}
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                      </svg>
                      <span>{activeTask.attachments || 0}</span>
                    </div>
                  </div>

                  {/* Progress counter */}
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                    </svg>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{activeTask.progress}/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};
