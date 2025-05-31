import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '../components/navigation/Sidebar';
import Header from '../components/navigation/Header';
import { MenuIcon } from 'lucide-react';

const DashboardLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  React.useEffect(() => {
    const handleResize = () => {
      const isDesktopView = window.innerWidth >= 1024;
      setIsDesktop(isDesktopView);
      if (isDesktopView) {
        setSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-transparent dark:to-transparent text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {!isDesktop && sidebarOpen && (
          <motion.div 
            className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {(isDesktop || sidebarOpen) && (
          <motion.div
            className={`fixed lg:relative z-30 h-full`}
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <Sidebar 
              onClose={() => !isDesktop && setSidebarOpen(false)} 
              isOpen={sidebarOpen}
              isDesktop={isDesktop}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header>
          <button
            className="p-2 mr-4 -ml-1 rounded-lg lg:hidden focus:outline-none text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/30 transition-colors duration-200"
            onClick={toggleSidebar}
          >
            <MenuIcon size={24} />
          </button>
        </Header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6 grid-bg">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;