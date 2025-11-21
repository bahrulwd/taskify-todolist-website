import React from 'react';
import { useTask } from '../contexts/TaskContext';
import { Header } from '../components/layout/Header';
import { StatCard } from '../components/dashboard/StatCard';
import { TaskStatusChart } from '../components/dashboard/TaskStatusChart';
import { TaskPriorityChart } from '../components/dashboard/TaskPriorityChart';
import { UpcomingTasks } from '../components/dashboard/UpcomingTasks';
import { PriorityTasks } from '../components/dashboard/PriorityTasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faHourglass, faCheckCircle, faChartLine } from '@fortawesome/free-solid-svg-icons';

export const DashboardPage: React.FC = () => {
  const { tasks } = useTask();

  const totalTasks = tasks.length;
  const inProgressTasks = tasks.filter(t => t.status === 'Doing' || t.status === 'In Review').length;
  const completedTasks = tasks.filter(t => t.status === 'Done').length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#F3F5F7] dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      <Header title="Dashboard" />
      <main className="pt-28 overflow-x-hidden">
        <div className="px-10 pb-10">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
          <StatCard
            title="Total Tugas"
            value={totalTasks}
            icon={<FontAwesomeIcon icon={faListCheck} size="lg" />}
            color="#F27B66"
            percentage={12}
          />
          <StatCard
            title="Sedang Dikerjakan"
            value={inProgressTasks}
            icon={<FontAwesomeIcon icon={faHourglass} size="lg" />}
            color="#9F83D8"
            percentage={8}
          />
          <StatCard
            title="Selesai"
            value={completedTasks}
            icon={<FontAwesomeIcon icon={faCheckCircle} size="lg" />}
            color="#34D399"
            percentage={15}
          />
          <StatCard
            title="Tingkat Penyelesaian"
            value={completionRate}
            icon={<FontAwesomeIcon icon={faChartLine} size="lg" />}
            color="#7B5EAE"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-10">
          <TaskStatusChart />
          <TaskPriorityChart />
        </div>

        {/* Upcoming Tasks and Priority Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UpcomingTasks />
          <PriorityTasks />
        </div>
        </div>
      </main>
    </div>
  );
};
