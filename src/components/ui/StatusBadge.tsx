import React from 'react';

type StatusType = 'success' | 'warning' | 'danger' | 'info' | 'neutral';

interface StatusBadgeProps {
  status: StatusType;
  text: string;
  pulsing?: boolean;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, text, pulsing = false }) => {
  const getStatusClasses = () => {
    switch (status) {
      case 'success':
        return 'bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400';
      case 'warning':
        return 'bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400';
      case 'danger':
        return 'bg-danger-100 text-danger-800 dark:bg-danger-900/20 dark:text-danger-400';
      case 'info':
        return 'bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400';
      case 'neutral':
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-dark-700 dark:text-gray-300';
    }
  };

  const getDotClasses = () => {
    switch (status) {
      case 'success':
        return 'bg-success-500 dark:bg-success-400';
      case 'warning':
        return 'bg-warning-500 dark:bg-warning-400';
      case 'danger':
        return 'bg-danger-500 dark:bg-danger-400';
      case 'info':
        return 'bg-primary-500 dark:bg-primary-400';
      case 'neutral':
      default:
        return 'bg-gray-500 dark:bg-gray-400';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClasses()}`}>
      <span className={`w-2 h-2 mr-1.5 rounded-full ${getDotClasses()} ${pulsing ? 'animate-pulse' : ''}`}></span>
      {text}
    </span>
  );
};

export default StatusBadge;