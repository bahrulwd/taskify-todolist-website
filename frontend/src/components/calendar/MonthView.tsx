import React from 'react';
import { useTask } from '../../contexts/TaskContext';

interface MonthViewProps {
  currentDate: Date;
}

export const MonthView: React.FC<MonthViewProps> = ({ currentDate }) => {
  const { tasks } = useTask();
  
  // Get first day of month
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  
  // Get starting day (0 = Sunday, 6 = Saturday)
  const startingDayOfWeek = firstDay.getDay();
  const daysInMonth = lastDay.getDate();
  
  // Generate calendar days
  const calendarDays: (Date | null)[] = [];
  
  // Add empty cells for days before the first of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null);
  }
  
  // Add all days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  }
  
  const dayNames = ['Ming', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
  
  const isToday = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };
  
  const getTasksForDate = (date: Date | null) => {
    if (!date) return [];
    return tasks.filter(task => {
      if (!task.dueDate) return false;
      const taskDate = new Date(task.dueDate);
      return (
        taskDate.getFullYear() === date.getFullYear() &&
        taskDate.getMonth() === date.getMonth() &&
        taskDate.getDate() === date.getDate()
      );
    });
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden transition-colors duration-300">
      {/* Header with day names */}
      <div className="grid grid-cols-7 border-b border-gray-200 dark:border-gray-700">
        {dayNames.map((day) => (
          <div key={day} className="p-4 text-center border-r border-gray-200 dark:border-gray-700 last:border-r-0">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{day}</span>
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7">
        {calendarDays.map((date, index) => {
          const dayTasks = getTasksForDate(date);
          const today = isToday(date);
          
          return (
            <div
              key={index}
              className={`min-h-[120px] p-3 border-r border-b border-gray-100 dark:border-gray-700 last:border-r-0 ${
                !date ? 'bg-gray-50 dark:bg-gray-900' : 'hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors'
              } ${today ? 'bg-red-50/30 dark:bg-red-900/10' : ''}`}
            >
              {date && (
                <>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-sm font-semibold ${
                        today
                          ? 'w-7 h-7 rounded-full bg-gradient-to-br from-[#F27B66] to-[#FD5477] text-white flex items-center justify-center'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {date.getDate()}
                    </span>
                    {dayTasks.length > 0 && (
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        {dayTasks.length}
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-1">
                    {dayTasks.slice(0, 3).map((task) => (
                      <div
                        key={task.id}
                        className="text-xs p-1.5 rounded-md text-white truncate shadow-sm"
                        style={{
                          background: task.priority === 'Urgent' 
                            ? 'linear-gradient(135deg, #F27B66 0%, #FD5477 100%)'
                            : task.priority === 'High'
                            ? 'linear-gradient(135deg, #9F83D8 0%, #7B5EAE 100%)'
                            : task.priority === 'Medium'
                            ? '#60A5FA'
                            : '#34D399'
                        }}
                      >
                        {task.title}
                      </div>
                    ))}
                    {dayTasks.length > 3 && (
                      <div className="text-xs text-gray-500 font-medium pl-1">
                        +{dayTasks.length - 3} lainnya
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
