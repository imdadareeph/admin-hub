import React from 'react';
import { Server, Database, Wifi, Cloud } from 'lucide-react';
import Card from '../ui/Card';
import StatusBadge from '../ui/StatusBadge';

interface ServerItemProps {
  name: string;
  status: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  statusText: string;
  icon: React.ReactNode;
  metric: string;
  metricLabel: string;
  lastUpdated: string;
}

const servers: ServerItemProps[] = [
  {
    name: 'Web Server',
    status: 'success',
    statusText: 'Operational',
    icon: <Server size={18} />,
    metric: '99.9%',
    metricLabel: 'Uptime',
    lastUpdated: '2 minutes ago',
  },
  {
    name: 'Database',
    status: 'success',
    statusText: 'Operational',
    icon: <Database size={18} />,
    metric: '45ms',
    metricLabel: 'Response Time',
    lastUpdated: '1 minute ago',
  },
  {
    name: 'API Gateway',
    status: 'warning',
    statusText: 'Degraded',
    icon: <Wifi size={18} />,
    metric: '89%',
    metricLabel: 'Success Rate',
    lastUpdated: '5 minutes ago',
  },
  {
    name: 'Cloud Storage',
    status: 'success',
    statusText: 'Operational',
    icon: <Cloud size={18} />,
    metric: '1.2TB',
    metricLabel: 'Available',
    lastUpdated: '10 minutes ago',
  },
];

const ServerStatus: React.FC = () => {
  return (
    <Card title="System Status" transparent>
      <div className="space-y-4">
        {servers.map((server, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-white dark:bg-dark-900 rounded-lg shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-md bg-gray-50 dark:bg-dark-800 text-gray-700 dark:text-gray-300">
                {server.icon}
              </div>
              <div>
                <h4 className="text-sm font-medium">{server.name}</h4>
                <div className="mt-1">
                  <StatusBadge status={server.status} text={server.statusText} pulsing={server.status === 'warning'} />
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">{server.metric}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {server.metricLabel}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Updated {server.lastUpdated}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ServerStatus;