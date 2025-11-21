import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Task } from '../../types';
import { TaskCard } from './TaskCard';

interface SortableTaskCardProps {
  task: Task;
}

export const SortableTaskCard: React.FC<SortableTaskCardProps> = ({ task }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || 'transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    opacity: isDragging ? 0.3 : 1,
    scale: isDragging ? 0.95 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="transform-gpu transition-all duration-200 hover:scale-[1.02] active:scale-95 animate-slideIn"
      {...attributes}
      {...listeners}
    >
      <TaskCard task={task} />
    </div>
  );
};
