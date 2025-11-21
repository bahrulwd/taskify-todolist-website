import React from 'react';
import { Card } from '../ui';
import { Badge } from '../ui';
import { useTask } from '../../contexts/TaskContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export const UpcomingTasks: React.FC = () => {
  const { tasks } = useTask();
  
  // Get tasks that are not done, sorted by due date
  const upcomingTasks = tasks
    .filter(t => t.status !== 'Done' && t.dueDate)
    .sort((a, b) => {
      if (!a.dueDate || !b.dueDate) return 0;
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    })
    .slice(0, 6);

  const getDaysLeft = (dateString?: string) => {
    if (!dateString) return null;
    const today = new Date();
    const dueDate = new Date(dateString);
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    return `${date.getDate()} ${months[date.getMonth()]}`;
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'Urgent': return '#F27B66';
      case 'High': return '#9F83D8';
      case 'Medium': return '#7B5EAE';
      default: return '#34D399';
    }
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 !transform-none !scale-100">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Deadline Terdekat</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Tugas yang perlu perhatian</p>
      </div>
      <div className="space-y-4">
        {upcomingTasks.length === 0 ? (
          <div className="text-center py-12">
            <FontAwesomeIcon icon={faCheckCircle} className="w-16 h-16 text-green-200 mb-4" />
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">Semua tugas selesai!</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Tidak ada deadline yang akan datang</p>
          </div>
        ) : (
          upcomingTasks.map(task => {
            const daysLeft = getDaysLeft(task.dueDate);
            const isUrgent = daysLeft !== null && daysLeft <= 2;
            
            return (
              <div 
                key={task.id} 
                className="group relative flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer border border-gray-100 dark:border-gray-700"
              >
                {/* Priority Indicator Line */}
                <div 
                  className="absolute left-0 top-4 bottom-4 w-1.5 rounded-full"
                  style={{ backgroundColor: getPriorityColor(task.priority) }}
                />
                
                {/* Days Left Badge */}
                <div className="flex-shrink-0 ml-4">
                  <div 
                    className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center text-white shadow-md"
                    style={{
                      background: isUrgent 
                        ? 'linear-gradient(135deg, #F27B66 0%, #FD5477 100%)' 
                        : 'linear-gradient(135deg, #9F83D8 0%, #7B5EAE 100%)'
                    }}
                  >
                    <span className="text-2xl font-bold">
                      {daysLeft !== null ? Math.abs(daysLeft) : '?'}
                    </span>
                    <span className="text-xs font-medium">
                      hari
                    </span>
                  </div>
                </div>

                {/* Task Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-base text-gray-900 dark:text-gray-100 line-clamp-1 mb-2 text-left">
                    {task.title}
                  </h4>
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-300">{formatDate(task.dueDate)}</span>
                  </div>
                  <Badge text={task.priority} type={task.priority} />
                </div>

                {/* Progress Circle */}
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16">
                    <svg className="transform -rotate-90 w-16 h-16">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="#E5E7EB"
                        strokeWidth="5"
                        fill="none"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke={task.priority === 'Urgent' || task.priority === 'High' ? '#9F83D8' : getPriorityColor(task.priority)}
                        strokeWidth="5"
                        fill="none"
                        strokeDasharray={`${(task.progress / 10) * 175.9} 175.9`}
                        className="transition-all duration-300"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                        {task.progress * 10}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </Card>
  );
};
