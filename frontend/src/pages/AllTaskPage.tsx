import React from 'react';
import { useTask } from '../contexts';
import { Header } from '../components/layout';
import { TaskBoard } from '../components/task';

export const AllTaskPage: React.FC = () => {
  const { tasks, updateTaskStatus } = useTask();

  return (
    <div className="min-h-screen bg-[#F3F5F7] dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      <Header />
      <main className="pt-28 overflow-x-hidden">
        <div className="px-10 pb-10">
          <TaskBoard tasks={tasks} onUpdateTask={updateTaskStatus} />
        </div>
      </main>
    </div>
  );
};
