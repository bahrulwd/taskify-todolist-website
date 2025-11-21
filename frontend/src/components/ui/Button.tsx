import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  className = '',
  children,
  ...props 
}) => {
  const baseStyles = 'rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 justify-center relative z-10';
  
  const variantStyles = {
    primary: 'text-white shadow-lg',
    secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
    ghost: 'bg-transparent hover:bg-gray-100'
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base'
  };
  
  if (variant === 'primary') {
    return (
      <button 
        className={`${baseStyles} ${sizeStyles[size]} hover:scale-105 hover:shadow-xl active:scale-95 ${className}`}
        style={{
          background: 'linear-gradient(135deg, #F27B66 0%, #FD5477 100%)',
          boxShadow: '0 4px 15px rgba(242, 123, 102, 0.4)',
          willChange: 'transform, box-shadow',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(242, 123, 102, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(242, 123, 102, 0.4)';
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
