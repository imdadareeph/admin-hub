import React from 'react';
import { motion } from 'framer-motion';
import { ActivityIcon, User, ShoppingCart, AlertTriangle, CheckCircle } from 'lucide-react';
import Card from '../ui/Card';

interface ActivityItem {
  id: string;
  type: 'user' | 'order' | 'alert' | 'system';
  title: string;
  description: string;
  time: string;
}

const activities: ActivityItem[] = [
  {
    id: '1',
    type: 'user',
    title: 'New user registered',
    description: 'John Smith created an account',
    time: '5 minutes ago',
  },
  {
    id: '2',
    type: 'order',
    title: 'New order placed',
    description: 'Order #12345 was placed',
    time: '10 minutes ago',
  },
  {
    id: '3',
    type: 'alert',
    title: 'System alert',
    description: 'High CPU usage detected',
    time: '25 minutes ago',
  },
  {
    id: '4',
    type: 'system',
    title: 'System update completed',
    description: 'Version 2.4.1 installed successfully',
    time: '2 hours ago',
  },
  {
    id: '5',
    type: 'user',
    title: 'User profile updated',
    description: 'Emily Johnson updated her profile',
    time: '3 hours ago',
  },
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'user':
      return <User size={16} className="text-primary-500" />;
    case 'order':
      return <ShoppingCart size={16} className="text-success-500" />;
    case 'alert':
      return <AlertTriangle size={16} className="text-warning-500" />;
    case 'system':
      return <CheckCircle size={16} className="text-secondary-500" />;
    default:
      return <ActivityIcon size={16} className="text-gray-500" />;
  }
};

const ActivityFeed: React.FC = () => {
  return (
    <Card title="Recent Activity" icon={<ActivityIcon size={18} />} className="h-full">
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            className="flex items-start space-x-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="flex-shrink-0 mt-1 w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 dark:bg-dark-800">
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {activity.title}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {activity.description}
              </p>
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {activity.time}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

export default ActivityFeed;