import React from 'react';
import { Card } from '../ui';
import { Badge } from '../ui';
import { useTask } from '../../contexts/TaskContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export const PriorityTasks: React.FC = () => {
  const { tasks } = useTask();
  
  // Get high priority tasks (Urgent and High) that are not done
  const priorityTasks = tasks
    .filter(t => (t.priority === 'Urgent' || t.priority === 'High') && t.status !== 'Done')
    .slice(0, 5);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'To Do': return { bg: '#FEF3F2', text: '#B42318', border: '#FEE4E2' };
      case 'Doing': return { bg: '#EFF8FF', text: '#175CD3', border: '#D1E9FF' };
      case 'In Review': return { bg: '#F4F3FF', text: '#5925DC', border: '#E9D7FE' };
      default: return { bg: '#F6FEF9', text: '#027A48', border: '#D1FADF' };
    }
  };

  const getPriorityGradient = (priority: string) => {
    if (priority === 'Urgent') return 'linear-gradient(135deg, #F27B66 0%, #FD5477 100%)';
    return 'linear-gradient(135deg, #9F83D8 0%, #7B5EAE 100%)';
  };

  return (
    <div>
      <Card className="p-6 hover:shadow-lg transition-shadow duration-300 !transform-none !scale-100">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Tugas Prioritas Tinggi</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Tugas yang memerlukan perhatian segera</p>
        </div>
        
        <div className="space-y-4">
          {priorityTasks.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎉</span>
              </div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">Tidak ada tugas urgent!</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Semua tugas prioritas tinggi sudah selesai</p>
            </div>
          ) : (
            priorityTasks.map((task, index) => {
              const statusColor = getStatusColor(task.status);
              
              return (
                <div 
                  key={task.id}
                  className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 cursor-pointer"
                >
                  {/* Priority Gradient Border */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{
                      background: getPriorityGradient(task.priority),
                      padding: '2px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude'
                    }}
                  />
                  
                  <div className="relative flex items-start gap-4">
                    {/* Number Badge */}
                    <div 
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: getPriorityGradient(task.priority) }}
                    >
                      {index + 1}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm line-clamp-2 flex-1 text-left">
                          {task.title}
                        </h4>
                        <Badge text={task.priority} type={task.priority} />
                      </div>
                      
                      <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1 mb-3">
                        {task.description}
                      </p>

                      <div className="flex items-center justify-between">
                        {/* Status Badge */}
                        <div 
                          className="px-2.5 py-1 rounded-lg text-xs font-medium border"
                          style={{ 
                            backgroundColor: statusColor.bg,
                            color: statusColor.text,
                            borderColor: statusColor.border
                          }}
                        >
                          {task.status}
                        </div>

                        {/* Progress Bar */}
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full transition-all duration-300"
                              style={{ 
                                width: `${(task.progress / 10) * 100}%`,
                                background: getPriorityGradient(task.priority)
                              }}
                            />
                          </div>
                          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 w-8">
                            {task.progress}/10
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Action */}
                    <button className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
                      <FontAwesomeIcon icon={faEye} className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </Card>
    </div>
  );
};
