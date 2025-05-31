import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title?: string;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  transparent?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  icon, 
  className = '', 
  children,
  transparent = false
}) => {
  return (
    <motion.div 
      className={`rounded-xl card-glow glassmorphic ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      {title && (
        <div className="px-6 py-4 border-b border-gray-200/10 flex items-center justify-between">
          <div className="flex items-center">
            {icon && <div className="mr-3 text-primary-400">{icon}</div>}
            <h3 className="text-lg font-medium bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">{title}</h3>
          </div>
        </div>
      )}
      <div className={!title ? 'p-6' : 'px-6 py-4'}>
        {children}
      </div>
    </motion.div>
  );
};

export default Card;