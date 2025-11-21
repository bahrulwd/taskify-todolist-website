import React from 'react';
import type { TaskPriority, TaskCategory } from '../../types';

interface BadgeProps {
  text: string;
  type: TaskPriority | TaskCategory;
}

export const Badge: React.FC<BadgeProps> = ({ text, type }) => {
  const getColorStyles = () => {
    switch (type) {
      case 'Urgent':
        return { gradient: true, text: 'text-white' };
      case 'High':
        return { gradient: false, className: 'bg-orange-100 text-orange-600' };
      case 'Medium':
        return { gradient: false, className: 'bg-yellow-100 text-yellow-600' };
      case 'Low':
        return { gradient: false, className: 'bg-green-100 text-green-600' };
      case 'Design':
        return { gradient: false, className: 'bg-blue-500 text-white' };
      case 'Bug Report':
        return { gradient: false, className: 'bg-orange-500 text-white' };
      case 'Development':
        return { gradient: false, className: 'bg-purple-500 text-white' };
      case 'Testing':
        return { gradient: false, className: 'bg-green-500 text-white' };
      case 'Documentation':
        return { gradient: false, className: 'bg-gray-500 text-white' };
      default:
        return { gradient: false, className: 'bg-gray-100 text-gray-600' };
    }
  };

  const styles = getColorStyles();

  if (styles.gradient) {
    return (
      <span 
        className={`px-2.5 py-1 rounded text-xs font-semibold ${styles.text} relative inline-block`}
        style={{
          background: 'linear-gradient(135deg, #F27B66 0%, #FD5477 100%)',
          boxShadow: '0 2px 8px rgba(242, 123, 102, 0.3)'
        }}
      >
        {text}
      </span>
    );
  }

  return (
    <span className={`px-2.5 py-1 rounded text-xs font-semibold ${styles.className}`}>
      {text}
    </span>
  );
};
