import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Lock, User, Globe, Palette, Database, Shield, Mail } from 'lucide-react';
import Card from '../components/ui/Card';

const Settings: React.FC = () => {
  const settingSections = [
    {
      title: 'Profile Settings',
      icon: <User size={20} />,
      description: 'Update your personal information and profile settings',
      link: '#profile',
      badge: 'Updated',
    },
    {
      title: 'Security',
      icon: <Lock size={20} />,
      description: 'Manage your password and security preferences',
      link: '#security',
    },
    {
      title: 'Notifications',
      icon: <Bell size={20} />,
      description: 'Configure how you receive notifications',
      link: '#notifications',
      badge: '3 New',
    },
    {
      title: 'Appearance',
      icon: <Palette size={20} />,
      description: 'Customize the look and feel of your dashboard',
      link: '#appearance',
    },
    {
      title: 'Data Management',
      icon: <Database size={20} />,
      description: 'Control your data and export options',
      link: '#data',
    },
    {
      title: 'Privacy',
      icon: <Shield size={20} />,
      description: 'Manage your privacy settings and data sharing preferences',
      link: '#privacy',
    },
    {
      title: 'Email Preferences',
      icon: <Mail size={20} />,
      description: 'Update your email settings and subscriptions',
      link: '#email',
    },
    {
      title: 'Language & Region',
      icon: <Globe size={20} />,
      description: 'Set your preferred language and regional settings',
      link: '#language',
    },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Manage your account settings and preferences
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingSections.map((section, index) => (
          <motion.div
            key={section.link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card transparent>
              <a
                href={section.link}
                className="flex items-start space-x-4 p-2 rounded-lg transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-dark-800"
              >
                <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">{section.title}</h3>
                    {section.badge && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200">
                        {section.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {section.description}
                  </p>
                </div>
              </a>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Settings;