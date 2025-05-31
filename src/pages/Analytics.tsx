import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, ArrowUpRight } from 'lucide-react';
import Card from '../components/ui/Card';
import AreaChart from '../components/charts/AreaChart';
import BarChart from '../components/charts/BarChart';

const Analytics: React.FC = () => {
  // Sample data for analytics
  const visitorData = [1200, 1900, 2300, 2800, 2400, 2900, 3300, 3700, 3400, 3900, 4200, 4500];
  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const conversionData = [65, 72, 58, 80];
  const conversionLabels = ['Sign-ups', 'Activations', 'Active Users', 'Premium'];

  const engagementData = [2800, 3200, 3600, 4100, 3800, 4300, 4700, 5200, 4900, 5400, 5800, 6200];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-semibold">Analytics Overview</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Track your key metrics and performance indicators
        </p>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card transparent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Visitors</p>
              <h3 className="text-2xl font-semibold mt-1">45.2K</h3>
              <p className="text-sm text-success-600 dark:text-success-400 flex items-center mt-1">
                <TrendingUp size={16} className="mr-1" />
                +12.5%
              </p>
            </div>
            <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-full">
              <Users size={24} className="text-primary-600 dark:text-primary-400" />
            </div>
          </div>
        </Card>

        <Card transparent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Conversion Rate</p>
              <h3 className="text-2xl font-semibold mt-1">3.8%</h3>
              <p className="text-sm text-success-600 dark:text-success-400 flex items-center mt-1">
                <TrendingUp size={16} className="mr-1" />
                +2.1%
              </p>
            </div>
            <div className="p-3 bg-success-50 dark:bg-success-900/20 rounded-full">
              <BarChart3 size={24} className="text-success-600 dark:text-success-400" />
            </div>
          </div>
        </Card>

        <Card transparent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Session</p>
              <h3 className="text-2xl font-semibold mt-1">4m 32s</h3>
              <p className="text-sm text-success-600 dark:text-success-400 flex items-center mt-1">
                <TrendingUp size={16} className="mr-1" />
                +0.5%
              </p>
            </div>
            <div className="p-3 bg-secondary-50 dark:bg-secondary-900/20 rounded-full">
              <ArrowUpRight size={24} className="text-secondary-600 dark:text-secondary-400" />
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Visitor Trends" transparent>
          <AreaChart
            title="Monthly Visitors"
            data={visitorData}
            labels={monthLabels}
            color="rgb(59, 130, 246)"
            borderColor="rgb(59, 130, 246)"
            backgroundColor="rgba(59, 130, 246, 0.1)"
          />
        </Card>

        <Card title="Conversion Funnel" transparent>
          <BarChart
            title="Conversion Stages"
            data={conversionData}
            labels={conversionLabels}
          />
        </Card>
      </div>

      {/* Engagement Chart */}
      <Card title="User Engagement" transparent>
        <AreaChart
          title="Monthly Engagement"
          data={engagementData}
          labels={monthLabels}
          color="rgb(20, 184, 166)"
          borderColor="rgb(20, 184, 166)"
          backgroundColor="rgba(20, 184, 166, 0.1)"
        />
      </Card>
    </div>
  );
};

export default Analytics;