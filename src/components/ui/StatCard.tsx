import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: number;
  changeText?: string;
  changePeriod?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  change,
  changeText,
  changePeriod = 'from last period',
  className = '',
}) => {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  return (
    <motion.div
      className={`glassmorphic card-glow rounded-xl overflow-hidden floating ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-300">{title}</h3>
          <div className="p-2 rounded-lg bg-gray-800/30 text-primary-400">
            {icon}
          </div>
        </div>
        <div className="mt-2">
          <p className="text-2xl font-semibold bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            {value}
          </p>
          {change !== undefined && (
            <p className="flex items-center mt-1 text-sm">
              {isPositive ? (
                <ArrowUp size={16} className="text-emerald-400 mr-1" />
              ) : isNegative ? (
                <ArrowDown size={16} className="text-rose-400 mr-1" />
              ) : null}
              <span
                className={
                  isPositive
                    ? 'text-emerald-400'
                    : isNegative
                    ? 'text-rose-400'
                    : 'text-gray-400'
                }
              >
                {changeText || `${Math.abs(change)}%`}
              </span>
              <span className="ml-1 text-gray-400">{changePeriod}</span>
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;