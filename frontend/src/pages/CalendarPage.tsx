import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { CalendarHeader } from '../components/calendar/CalendarHeader';
import { DayView } from '../components/calendar/DayView';
import { WeekView } from '../components/calendar/WeekView';
import { MonthView } from '../components/calendar/MonthView';
import type { CalendarView } from '../types/calendar';

export const CalendarPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<CalendarView>('week');

  const handlePrevious = () => {
    const newDate = new Date(currentDate);
    if (view === 'day') {
      newDate.setDate(newDate.getDate() - 1);
    } else if (view === 'week') {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setMonth(newDate.getMonth() - 1);
    }
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    if (view === 'day') {
      newDate.setDate(newDate.getDate() + 1);
    } else if (view === 'week') {
      newDate.setDate(newDate.getDate() + 7);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="min-h-screen bg-[#F3F5F7] dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      <Header title="Calendar" />
      <main className="pt-28 overflow-x-hidden">
        <div className="px-10 pb-10">
          <CalendarHeader
            currentDate={currentDate}
            view={view}
            onViewChange={setView}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onToday={handleToday}
          />
          
          <div className="mt-6">
            {view === 'day' && <DayView currentDate={currentDate} />}
            {view === 'week' && <WeekView currentDate={currentDate} />}
            {view === 'month' && <MonthView currentDate={currentDate} />}
          </div>
        </div>
      </main>
    </div>
  );
};
