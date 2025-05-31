import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  LogOut,
  AlertTriangle,
  Bell,
  MessageSquare,
  HelpCircle,
  Activity,
  Layers,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface SidebarProps {
  onClose: () => void;
  isOpen: boolean;
  isDesktop: boolean;
}

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  badge?: number | string;
  collapsed?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, badge, collapsed }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center ${collapsed ? 'px-2' : 'px-4'} py-3 transition-all duration-200 relative ${
          isActive
            ? 'bg-primary-500/20 text-primary-400 font-medium border-r-4 border-primary-500'
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/30'
        } rounded-lg my-1`
      }
      onClick={(e) => e.currentTarget.blur()}
    >
      <span className={`inline-flex items-center justify-center ${collapsed ? 'h-10 w-10' : 'h-9 w-9'}`}>
        {icon}
      </span>
      {!collapsed && (
        <>
          <span className="ml-2">{label}</span>
          {badge && (
            <span className="ml-auto inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full bg-primary-500/20 text-primary-400">
              {badge}
            </span>
          )}
        </>
      )}
    </NavLink>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ onClose, isOpen, isDesktop }) => {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { to: '/', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { to: '/users', icon: <Users size={20} />, label: 'User Management', badge: '3' },
    { to: '/analytics', icon: <BarChart3 size={20} />, label: 'Analytics' },
    { to: '/reports', icon: <Activity size={20} />, label: 'Reports' },
    { to: '/notifications', icon: <Bell size={20} />, label: 'Notifications', badge: '5' },
    { to: '/alerts', icon: <AlertTriangle size={20} />, label: 'Alerts' },
    { to: '/messages', icon: <MessageSquare size={20} />, label: 'Messages' },
    { to: '/settings', icon: <Settings size={20} />, label: 'Settings' },
    { to: '/help', icon: <HelpCircle size={20} />, label: 'Help & Support' },
  ];

  return (
    <div 
      className={`flex flex-col h-full glassmorphic ${collapsed && isDesktop ? 'w-16' : 'w-64'} transition-all duration-300`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200/10">
        {(!collapsed || !isDesktop) && (
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Layers className="h-8 w-8 text-primary-400" />
            <span className="ml-2 text-xl font-semibold bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              AdminHub
            </span>
          </motion.div>
        )}
        <div className="flex items-center">
          {isDesktop && (
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800/30 focus:outline-none text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
          )}
          {!isDesktop && (
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800/30 focus:outline-none text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </div>

      <nav className={`flex-1 ${collapsed && isDesktop ? 'px-1' : 'px-2'} py-4 space-y-1 overflow-y-auto`}>
        {(!collapsed || !isDesktop) && (
          <div className="mb-6">
            <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Main
            </h3>
            <div className="mt-2 space-y-1">
              {navItems.slice(0, 4).map((item, index) => (
                <NavItem key={index} {...item} collapsed={collapsed && isDesktop} />
              ))}
            </div>
          </div>
        )}
        
        {(!collapsed || !isDesktop) && (
          <div className="mb-6">
            <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Communication
            </h3>
            <div className="mt-2 space-y-1">
              {navItems.slice(4, 7).map((item, index) => (
                <NavItem key={index + 4} {...item} collapsed={collapsed && isDesktop} />
              ))}
            </div>
          </div>
        )}
        
        {(!collapsed || !isDesktop) ? (
          <div>
            <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Preferences
            </h3>
            <div className="mt-2 space-y-1">
              {navItems.slice(7).map((item, index) => (
                <NavItem key={index + 7} {...item} collapsed={collapsed && isDesktop} />
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-1">
            {navItems.map((item, index) => (
              <NavItem key={index} {...item} collapsed={collapsed && isDesktop} />
            ))}
          </div>
        )}
      </nav>

      <div className={`p-4 border-t border-gray-200/10 ${collapsed && isDesktop ? 'px-2' : ''}`}>
        <button className={`flex items-center w-full ${collapsed && isDesktop ? 'justify-center px-2' : 'px-4'} py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/30 rounded-lg transition-colors duration-200`}>
          <LogOut size={20} />
          {(!collapsed || !isDesktop) && <span className="ml-2">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;