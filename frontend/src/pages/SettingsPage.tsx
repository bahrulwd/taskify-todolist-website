import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { ProfileSettings } from '../components/settings/ProfileSettings';
import { NotificationSettings } from '../components/settings/NotificationSettings';
import { TaskSettings } from '../components/settings/TaskSettings';
import { ThemeSettings } from '../components/settings/ThemeSettings';
import { AccountSettings } from '../components/settings/AccountSettings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faListCheck, faPalette, faGlobe } from '@fortawesome/free-solid-svg-icons';

type SettingsTab = 'profile' | 'notifications' | 'tasks' | 'theme' | 'account';

export const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>('profile');

  const tabs = [
    { id: 'profile' as SettingsTab, label: 'Profil', icon: faUser },
    { id: 'notifications' as SettingsTab, label: 'Notifikasi', icon: faBell },
    { id: 'tasks' as SettingsTab, label: 'Tugas', icon: faListCheck },
    { id: 'theme' as SettingsTab, label: 'Tema', icon: faPalette },
    { id: 'account' as SettingsTab, label: 'Akun', icon: faGlobe },
  ];

  return (
    <div className="min-h-screen bg-[#F3F5F7] dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      <Header title="Settings" />
      <main className="pt-28 overflow-x-hidden">
        <div className="px-10 pb-10">
          {/* Header Tabs - Horizontal */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm mb-6 overflow-hidden transition-colors duration-300">
            <nav className="flex border-b border-gray-200 dark:border-gray-700">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 text-sm font-medium transition-all relative ${
                    activeTab === tab.id
                      ? 'text-red-500'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <FontAwesomeIcon icon={tab.icon} className="w-5 h-5" />
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F27B66] to-[#FD5477]" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm transition-colors duration-300">
            {activeTab === 'profile' && <ProfileSettings />}
            {activeTab === 'notifications' && <NotificationSettings />}
            {activeTab === 'tasks' && <TaskSettings />}
            {activeTab === 'theme' && <ThemeSettings />}
            {activeTab === 'account' && <AccountSettings />}
          </div>
        </div>
      </main>
    </div>
  );
};
