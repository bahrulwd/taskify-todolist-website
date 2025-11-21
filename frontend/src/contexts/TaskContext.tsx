import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Task, TaskStatus } from '../types';

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (taskId: string, updates: Partial<Task>) => void;
  deleteTask: (taskId: string) => void;
  updateTaskStatus: (taskId: string, status: TaskStatus) => void;
  reorderTasks: (taskId: string, newIndex: number, status: TaskStatus) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
};

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([
    // Sample data sesuai gambar
    {
      id: '1',
      title: 'Perbaiki Bug Responsif Pada Menu Navigasi',
      description: 'Harus memberikan fitur Bug Responsif Pada Menu Utama Di Perangkat iPhone SE Latest',
      status: 'To Do',
      priority: 'Urgent',
      category: 'Design',
      progress: 7,
      dueDate: '2025-04-05',
      comments: 6,
      attachments: 1
    },
    {
      id: '2',
      title: 'Perbaiki Bug Responsif Pada Menu Navigasi',
      description: 'Harus memberikan fitur Bug Responsif Pada Menu Utama Di Perangkat iPhone SE Latest',
      status: 'To Do',
      priority: 'Urgent',
      category: 'Design',
      progress: 7,
      dueDate: '2025-04-05',
      comments: 6,
      attachments: 5
    },
    {
      id: '3',
      title: 'Perbaiki Bug Responsif Pada Menu Navigasi',
      description: 'Harus memberikan fitur Bug Responsif Pada Menu Utama Di Perangkat iPhone SE Latest',
      status: 'To Do',
      priority: 'Urgent',
      category: 'Design',
      progress: 7,
      dueDate: '2025-04-05',
      comments: 0,
      attachments: 5
    },
    {
      id: '4',
      title: 'Perbaiki Bug Responsif Pada Menu Navigasi',
      description: 'Harus memberikan fitur Bug Responsif Pada Menu Utama Di Perangkat iPhone SE Latest',
      status: 'Doing',
      priority: 'Urgent',
      category: 'Design',
      progress: 7,
      dueDate: '2025-04-05',
      comments: 2,
      attachments: 1
    },
    {
      id: '5',
      title: 'Perbaiki Bug Responsif Pada Menu Navigasi',
      description: 'Harus memberikan fitur Bug Responsif Pada Menu Utama Di Perangkat iPhone SE Latest',
      status: 'Doing',
      priority: 'Urgent',
      category: 'Design',
      progress: 7,
      dueDate: '2025-04-05',
      comments: 0,
      attachments: 3
    },
    {
      id: '6',
      title: 'Perbaiki Bug Responsif Pada Menu Navigasi',
      description: 'Harus memberikan fitur Bug Responsif Pada Menu Utama Di Perangkat iPhone SE Latest',
      status: 'Doing',
      priority: 'Urgent',
      category: 'Design',
      progress: 7,
      dueDate: '2025-04-05',
      comments: 0,
      attachments: 3
    },
    {
      id: '7',
      title: 'Perbaiki Bug Responsif Pada Menu Navigasi',
      description: 'Harus memberikan fitur Bug Responsif Pada Menu Utama Di Perangkat iPhone SE Latest',
      status: 'In Review',
      priority: 'Urgent',
      category: 'Design',
      progress: 7,
      dueDate: '2025-04-05',
      comments: 0,
      attachments: 0
    },
    {
      id: '8',
      title: 'Perbaiki Bug Responsif Pada Menu Navigasi',
      description: 'Harus memberikan fitur Bug Responsif Pada Menu Utama Di Perangkat iPhone SE Latest',
      status: 'In Review',
      priority: 'Urgent',
      category: 'Design',
      progress: 7,
      dueDate: '2025-04-05',
      comments: 0,
      attachments: 0
    },
    {
      id: '9',
      title: 'Perbaiki Bug Responsif Pada Menu Navigasi',
      description: 'Harus memberikan fitur Bug Responsif Pada Menu Utama Di Perangkat iPhone SE Latest',
      status: 'In Review',
      priority: 'Urgent',
      category: 'Design',
      progress: 7,
      dueDate: '2025-04-05',
      comments: 0,
      attachments: 0
    },
    {
      id: '10',
      title: 'Perbaiki Bug Responsif Pada Menu Navigasi',
      description: 'Harus memberikan fitur Bug Responsif Pada Menu Utama Di Perangkat iPhone SE Latest',
      status: 'Done',
      priority: 'Urgent',
      category: 'Design',
      progress: 7,
      dueDate: '2025-04-05',
      comments: 0,
      attachments: 0
    },
    {
      id: '11',
      title: 'Perbaiki Bug Responsif Pada Menu Navigasi',
      description: 'Harus memberikan fitur Bug Responsif Pada Menu Utama Di Perangkat iPhone SE Latest',
      status: 'Done',
      priority: 'Urgent',
      category: 'Design',
      progress: 7,
      dueDate: '2025-04-05',
      comments: 0,
      attachments: 0
    },
    {
      id: '12',
      title: 'Perbaiki Bug Responsif Pada Menu Navigasi',
      description: 'Harus memberikan fitur Bug Responsif Pada Menu Utama Di Perangkat iPhone SE Latest',
      status: 'Done',
      priority: 'Urgent',
      category: 'Design',
      progress: 7,
      dueDate: '2025-04-05',
      comments: 0,
      attachments: 0
    }
  ]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (taskId: string, updates: Partial<Task>) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, ...updates } : task
    ));
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const updateTaskStatus = (taskId: string, status: TaskStatus) => {
    updateTask(taskId, { status });
  };

  return (
    <TaskContext.Provider value={{ 
      tasks, 
      addTask, 
      updateTask, 
      deleteTask,
      updateTaskStatus 
    }}>
      {children}
    </TaskContext.Provider>
  );
};
