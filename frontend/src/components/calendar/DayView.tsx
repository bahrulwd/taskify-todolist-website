import React from 'react';
import { useTask } from '../../contexts/TaskContext';
import { CalendarTaskCard } from './CalendarTaskCard';

interface DayViewProps {
  currentDate: Date;
}

export const DayView: React.FC<DayViewProps> = ({ currentDate }) => {
  const { tasks } = useTask();
  
  // Time slots from 00:00 to 23:00
  const timeSlots = Array.from({ length: 24 }, (_, i) => i);
  
  const getTasksForHour = (hour: number) => {
    return tasks.filter(task => {
      if (!task.dueDate) return false;
      const taskDate = new Date(task.dueDate);
      return (
        taskDate.getFullYear() === currentDate.getFullYear() &&
        taskDate.getMonth() === currentDate.getMonth() &&
        taskDate.getDate() === currentDate.getDate() &&
        taskDate.getHours() === hour
      );
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden transition-colors duration-300">
      <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 300px)' }}>
        {timeSlots.map((hour) => {
          const tasksAtHour = getTasksForHour(hour);
          
          return (
            <div key={hour} className="flex border-b border-gray-100 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              {/* Time label */}
              <div className="w-24 p-4 border-r border-gray-200 dark:border-gray-700 text-right flex-shrink-0">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {hour.toString().padStart(2, '0')}:00
                </span>
              </div>
              
              {/* Task area */}
              <div className="flex-1 p-4 min-h-[80px]">
                <div className="space-y-2">
                  {tasksAtHour.length > 0 ? (
                    tasksAtHour.map((task) => (
                      <CalendarTaskCard key={task.id} task={task} view="day" />
                    ))
                  ) : (
                    <div className="text-gray-400 dark:text-gray-500 text-sm italic">Tidak ada tugas</div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
