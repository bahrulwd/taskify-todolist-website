export type TaskStatus = 'To Do' | 'Doing' | 'In Review' | 'Done';

export type TaskPriority = 'Urgent' | 'High' | 'Medium' | 'Low';

export type TaskCategory = 'Design' | 'Bug Report' | 'Development' | 'Testing' | 'Documentation';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  category: TaskCategory;
  progress: number;
  assignee?: string;
  dueDate?: string;
  thumbnail?: string;
  comments?: number;
  attachments?: number;
}

export interface Column {
  id: string;
  title: TaskStatus;
  tasks: Task[];
}
