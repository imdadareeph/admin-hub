import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShoppingBag, Activity, ArrowUpRight, Database, Server } from 'lucide-react';
import Card from '../components/ui/Card';
import StatCard from '../components/ui/StatCard';
import AreaChart from '../components/charts/AreaChart';
import BarChart from '../components/charts/BarChart';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import ServerStatus from '../components/dashboard/ServerStatus';

const Dashboard: React.FC = () => {
  // Sample data for charts
  const userActivityData = [18, 25, 30, 35, 28, 32, 38, 41, 35, 30, 32, 35];
  const userActivityLabels = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  
  const revenueData = [4200, 5800, 6300, 7500, 8200, 7800, 8500, 9200, 9800, 10500, 11200, 12000];
  
  const performanceData = [75, 82, 90, 65];
  const performanceLabels = ['CPU', 'Memory', 'Disk', 'Network'];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Welcome back! Here's what's happening with your system today.
        </p>
      </motion.div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="2,453"
          icon={<Users size={20} />}
          change={12.5}
          changePeriod="this month"
        />
        <StatCard
          title="Active Sessions"
          value="185"
          icon={<Activity size={20} />}
          change={-3.2}
          changePeriod="from yesterday"
        />
        <StatCard
          title="Server Load"
          value="68%"
          icon={<Server size={20} />}
          change={5.1}
          changePeriod="from average"
        />
        <StatCard
          title="Database Size"
          value="4.7 GB"
          icon={<Database size={20} />}
          change={2.3}
          changePeriod="this week"
        />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="User Growth" transparent>
          <AreaChart
            title="Monthly Active Users"
            data={userActivityData}
            labels={userActivityLabels}
            color="rgb(59, 130, 246)"
            borderColor="rgb(59, 130, 246)"
            backgroundColor="rgba(59, 130, 246, 0.1)"
          />
        </Card>
        <Card title="System Performance" transparent>
          <BarChart
            title="Resource Usage"
            data={performanceData}
            labels={performanceLabels}
            colors={['rgba(59, 130, 246, 1)', 'rgba(20, 184, 166, 1)', 'rgba(249, 115, 22, 1)', 'rgba(139, 92, 246, 1)']}
          />
        </Card>
      </div>

      {/* Activity and status row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityFeed />
        <ServerStatus />
      </div>

      {/* Revenue overview */}
      <Card title="Revenue Overview" className="bg-white dark:bg-dark-900">
        <div className="flex justify-between mb-4">
          <div>
            <h3 className="text-lg font-medium">Annual Revenue</h3>
            <p className="text-gray-500 dark:text-gray-400">Year-to-date financials</p>
          </div>
          <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium">
            <span>View Report</span>
            <ArrowUpRight size={16} className="ml-1" />
          </div>
        </div>
        <AreaChart
          title="Revenue"
          data={revenueData}
          labels={userActivityLabels}
          color="rgb(20, 184, 166)"
          borderColor="rgb(20, 184, 166)"
          backgroundColor="rgba(20, 184, 166, 0.1)"
        />
      </Card>
    </div>
  );
};

export default Dashboard;