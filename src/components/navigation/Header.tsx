import React from 'react';
import { Bell, Sun, Moon, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header 
      className="z-10 py-4 glassmorphic backdrop-blur-glass bg-opacity-90 dark:bg-opacity-90"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <div className="container flex items-center justify-between h-full px-6 mx-auto">
        {/* Left side: Hamburger and search */}
        <div className="flex items-center">
          {children}
          <div className="relative hidden md:block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={18} className="text-gray-400" />
            </span>
            <input
              type="text"
              className="w-64 pl-10 pr-4 py-2 text-sm rounded-md border border-gray-200/10 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-gray-50/5 dark:bg-dark-700/30 dark:text-white placeholder-gray-400"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Right side: Theme, notifications, profile */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-300 hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className="relative p-2 rounded-full text-gray-300 hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200"
            aria-label="Notifications"
          >
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-danger-500"></span>
          </button>
          
          <div className="relative">
            <button className="flex items-center focus:outline-none">
              <img
                className="h-8 w-8 rounded-full object-cover border-2 border-transparent hover:border-primary-500 transition-all duration-200"
                src="https://www.imdadareeph.com/images/imdad.jpg"
                alt="User avatar"
              />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;