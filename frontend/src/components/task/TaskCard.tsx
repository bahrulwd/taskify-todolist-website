import React from 'react';
import type { Task } from '../../types';
import { Badge, Card } from '../ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faComment, faPaperclip, faBars } from '@fortawesome/free-solid-svg-icons';

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {

  // Format date to include day name
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
  };

  return (
    <Card className="p-4 cursor-grab active:cursor-grabbing group relative">
      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-3">
        <Badge text={task.priority} type={task.priority} />
        <Badge text={task.category} type={task.category} />
        {task.category === 'Bug Report' && (
          <Badge text="Bug Report" type="Bug Report" />
        )}
      </div>

      {/* Thumbnail */}
      <div className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-lg mb-3 overflow-hidden">
        {task.thumbnail ? (
          <img 
            src={task.thumbnail} 
            alt={task.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Title - Left aligned */}
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2 text-left text-base">
        {task.title}
      </h3>

      {/* Description - Left aligned */}
      <p className="text-sm text-gray-500 mb-4 line-clamp-2 text-left">
        {task.description}
      </p>

      {/* Date with flag icon - Left aligned */}
      {task.dueDate && (
        <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
          <FontAwesomeIcon icon={faFlag} className="w-4 h-4" />
          <span>{formatDate(task.dueDate)}</span>
        </div>
      )}

      {/* Progress Bar - Wider */}
      <div className="mb-3">
        <div className="w-full bg-gray-200 rounded-full h-2.5 relative overflow-visible">
          <div 
            className="h-2.5 rounded-full transition-all duration-300 relative"
            style={{ 
              width: `${(task.progress / 10) * 100}%`,
              background: 'linear-gradient(90deg, #F27B66 0%, #FD5477 100%)',
              boxShadow: '0 2px 8px rgba(242, 123, 102, 0.4)'
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-3">
          {/* Comments */}
          <div className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={faComment} className="w-4 h-4" />
            <span>{task.comments || 0}</span>
          </div>

          {/* Attachments */}
          <div className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={faPaperclip} className="w-4 h-4" />
            <span>{task.attachments || 0}</span>
          </div>
        </div>

        {/* Progress counter (completed/total) */}
        <div className="flex items-center gap-1.5">
          <FontAwesomeIcon icon={faBars} className="w-4 h-4 text-gray-700 dark:text-gray-300" />
          <span className="font-semibold text-gray-700 dark:text-gray-300">{task.progress}/10</span>
        </div>
      </div>
    </Card>
  );
};
