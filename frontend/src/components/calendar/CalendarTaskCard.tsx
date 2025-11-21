import React from 'react';
import type { Task } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFlag } from '@fortawesome/free-solid-svg-icons';

interface CalendarTaskCardProps {
  task: Task;
  view: 'day' | 'week' | 'month';
}

export const CalendarTaskCard: React.FC<CalendarTaskCardProps> = ({ task, view }) => {
  const getPriorityGradient = (priority: string) => {
    switch(priority) {
      case 'Urgent': return 'linear-gradient(135deg, #F27B66 0%, #FD5477 100%)';
      case 'High': return 'linear-gradient(135deg, #9F83D8 0%, #7B5EAE 100%)';
      case 'Medium': return 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)';
      default: return 'linear-gradient(135deg, #34D399 0%, #10B981 100%)';
    }
  };
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Done': return { bg: '#F6FEF9', text: '#027A48', border: '#D1FADF' };
      case 'Doing': return { bg: '#EFF8FF', text: '#175CD3', border: '#D1E9FF' };
      case 'In Review': return { bg: '#F4F3FF', text: '#5925DC', border: '#E9D7FE' };
      default: return { bg: '#FEF3F2', text: '#B42318', border: '#FEE4E2' };
    }
  };
  
  const formatTime = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  };
  
  const statusColor = getStatusColor(task.status);
  
  if (view === 'week') {
    return (
      <div
        className="p-2 rounded-lg text-white shadow-sm cursor-pointer hover:shadow-md transition-shadow text-xs"
        style={{ background: getPriorityGradient(task.priority) }}
      >
        <div className="font-semibold truncate">{task.title}</div>
        <div className="flex items-center gap-1 mt-1 opacity-90">
          <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
          <span>{formatTime(task.dueDate)}</span>
        </div>
      </div>
    );
  }
  
  if (view === 'day') {
    return (
      <div className="bg-white border-l-4 rounded-lg p-3 shadow-sm hover:shadow-md transition-all cursor-pointer"
        style={{ borderColor: task.priority === 'Urgent' ? '#F27B66' : task.priority === 'High' ? '#9F83D8' : task.priority === 'Medium' ? '#60A5FA' : '#34D399' }}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">{task.title}</h4>
            <p className="text-xs text-gray-600 line-clamp-1 mb-2">{task.description}</p>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
                <span>{formatTime(task.dueDate)}</span>
              </div>
              
              <div
                className="px-2 py-0.5 rounded text-xs font-medium"
                style={{
                  backgroundColor: statusColor.bg,
                  color: statusColor.text,
                  border: `1px solid ${statusColor.border}`
                }}
              >
                {task.status}
              </div>
            </div>
          </div>
          
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white flex-shrink-0"
            style={{ background: getPriorityGradient(task.priority) }}
          >
            <FontAwesomeIcon icon={faFlag} className="w-3 h-3" />
          </div>
        </div>
      </div>
    );
  }
  
  return null;
};
