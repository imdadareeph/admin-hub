import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-danger-50 dark:bg-danger-900/20 rounded-full">
            <AlertCircle size={48} className="text-danger-500 dark:text-danger-400" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
          Please check the URL or navigate back to the dashboard.
        </p>
        
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-lg transition-colors duration-200"
        >
          <Home size={20} className="mr-2" />
          Back to Dashboard
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;