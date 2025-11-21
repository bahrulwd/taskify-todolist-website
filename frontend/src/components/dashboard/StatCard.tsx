import React from 'react';
import { Card } from '../ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  percentage?: number;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color, percentage }) => {
  // Get gradient colors based on main color
  const getGradient = (baseColor: string) => {
    const gradients: { [key: string]: string } = {
      '#F27B66': 'linear-gradient(135deg, #F27B66 0%, #FD5477 100%)',
      '#9F83D8': 'linear-gradient(135deg, #9F83D8 0%, #7B5EAE 100%)',
      '#7B5EAE': 'linear-gradient(135deg, #7B5EAE 0%, #6B4C9A 100%)',
      '#34D399': 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
    };
    return gradients[baseColor] || `linear-gradient(135deg, ${baseColor}15 0%, ${baseColor}25 100%)`;
  };

  return (
    <Card className="p-6 group overflow-hidden relative">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1 text-left transition-colors duration-300">{title}</p>
          <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-left transition-all duration-300 group-hover:scale-105">{value}</h3>
        </div>
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg text-white transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
          style={{ 
            background: getGradient(color),
          }}
        >
          <div style={{ fontSize: '24px' }} className="transition-transform duration-500 group-hover:scale-110">{icon}</div>
        </div>
      </div>
      {percentage !== undefined && (
        <div className="flex items-center gap-1.5">
          <FontAwesomeIcon 
            icon={percentage >= 0 ? faArrowUp : faArrowDown} 
            className={`w-3 h-3 ${percentage >= 0 ? 'text-green-500' : 'text-red-500'}`}
          />
          <span className={`text-sm font-semibold ${percentage >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {Math.abs(percentage)}%
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">minggu ini</span>
        </div>
      )}
    </Card>
  );
};
