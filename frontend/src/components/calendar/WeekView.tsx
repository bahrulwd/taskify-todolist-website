import React from 'react';
import { useTask } from '../../contexts/TaskContext';
import { CalendarTaskCard } from './CalendarTaskCard';

interface WeekViewProps {
  currentDate: Date;
}

export const WeekView: React.FC<WeekViewProps> = ({ currentDate }) => {
  const { tasks } = useTask();
  
  // Get start of week (Sunday)
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
  startOfWeek.setHours(0, 0, 0, 0);
  
  // Generate week days
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return date;
  });
  
  const dayNames = ['Ming', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
  
  // Time slots from 00:00 to 23:00
  const timeSlots = Array.from({ length: 24 }, (_, i) => i);
  
  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };
  
  const getTasksForDateTime = (date: Date, hour: number) => {
    return tasks.filter(task => {
      if (!task.dueDate) return false;
      const taskDate = new Date(task.dueDate);
      return (
        taskDate.getFullYear() === date.getFullYear() &&
        taskDate.getMonth() === date.getMonth() &&
        taskDate.getDate() === date.getDate() &&
        taskDate.getHours() === hour
      );
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden transition-colors duration-300">
      {/* Header with day names */}
      <div className="grid grid-cols-8 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800 z-10 transition-colors duration-300">
        <div className="p-4 border-r border-gray-200 dark:border-gray-700">
          <div className="text-xs font-medium text-gray-500 dark:text-gray-400">GMT+7</div>
        </div>
        {weekDays.map((date, index) => (
          <div
            key={index}
            className={`p-4 text-center border-r border-gray-200 dark:border-gray-700 last:border-r-0 ${
              isToday(date) ? 'bg-gradient-to-b from-red-50 dark:from-red-900/20 to-transparent' : ''
            }`}
          >
            <div className="text-xs font-medium text-gray-500 mb-1">
              {dayNames[index]}
            </div>
            <div
              className={`text-2xl font-bold ${
                isToday(date)
                  ? 'w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-[#F27B66] to-[#FD5477] text-white flex items-center justify-center'
                  : 'text-gray-900'
              }`}
            >
              {date.getDate()}
            </div>
          </div>
        ))}
      </div>

      {/* Time grid */}
      <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 350px)' }}>
        {timeSlots.map((hour) => (
          <div key={hour} className="grid grid-cols-8 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
            {/* Time label */}
            <div className="p-3 border-r border-gray-200 dark:border-gray-700 text-right">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                {hour.toString().padStart(2, '0')}:00
              </span>
            </div>
            
            {/* Day columns */}
            {weekDays.map((date, dayIndex) => {
              const tasksAtTime = getTasksForDateTime(date, hour);
              
              return (
                <div
                  key={dayIndex}
                  className={`min-h-[60px] p-2 border-r border-gray-200 dark:border-gray-700 last:border-r-0 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer ${
                    isToday(date) ? 'bg-red-50/30 dark:bg-red-900/10' : ''
                  }`}
                >
                  <div className="space-y-1">
                    {tasksAtTime.map((task) => (
                      <CalendarTaskCard key={task.id} task={task} view="week" />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
