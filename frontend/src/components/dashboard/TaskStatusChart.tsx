import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card } from '../ui';
import { useTask } from '../../contexts/TaskContext';

export const TaskStatusChart: React.FC = () => {
  const { tasks } = useTask();

  const data = [
    { name: 'To Do', value: tasks.filter(t => t.status === 'To Do').length, color: '#F27B66' },
    { name: 'Doing', value: tasks.filter(t => t.status === 'Doing').length, color: '#FD5477' },
    { name: 'In Review', value: tasks.filter(t => t.status === 'In Review').length, color: '#A78BFA' },
    { name: 'Done', value: tasks.filter(t => t.status === 'Done').length, color: '#34D399' }
  ];

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 !transform-none !scale-100">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Status Tugas</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Distribusi status semua tugas</p>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            strokeWidth={3}
            stroke="#fff"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: 'none', 
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};
