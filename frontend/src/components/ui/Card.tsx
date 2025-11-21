import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick, ...props }) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      style={{
        transformOrigin: 'center',
        willChange: 'transform, box-shadow'
      }}
      {...props}
    >
      {children}
    </div>
  );
};
