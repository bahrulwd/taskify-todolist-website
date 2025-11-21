import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '../ui';
import { useTask } from '../../contexts/TaskContext';

export const TaskPriorityChart: React.FC = () => {
  const { tasks } = useTask();

  const data = [
    { 
      name: 'Urgent', 
      count: tasks.filter(t => t.priority === 'Urgent').length,
      color: '#F27B66'
    },
    { 
      name: 'High', 
      count: tasks.filter(t => t.priority === 'High').length,
      color: '#FD5477'
    },
    { 
      name: 'Medium', 
      count: tasks.filter(t => t.priority === 'Medium').length,
      color: '#A78BFA'
    },
    { 
      name: 'Low', 
      count: tasks.filter(t => t.priority === 'Low').length,
      color: '#34D399'
    }
  ];

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 !transform-none !scale-100">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Tugas Berdasarkan Prioritas</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Jumlah tugas per tingkat prioritas</p>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#6B7280', fontSize: 12 }}
            axisLine={{ stroke: '#E5E7EB' }}
          />
          <YAxis 
            tick={{ fill: '#6B7280', fontSize: 12 }}
            axisLine={{ stroke: '#E5E7EB' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: 'none', 
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
            cursor={{ fill: 'rgba(242, 123, 102, 0.1)' }}
          />
          <Bar 
            dataKey="count" 
            fill="url(#colorGradient)" 
            name="Jumlah Tugas" 
            radius={[8, 8, 0, 0]}
            barSize={60}
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9F83D8" stopOpacity={1}/>
              <stop offset="100%" stopColor="#7B5EAE" stopOpacity={1}/>
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
