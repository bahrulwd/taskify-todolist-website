import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

export const NotificationSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    taskReminders: true,
    deadlineAlerts: true,
    teamUpdates: false,
    weeklyDigest: true,
    soundEnabled: true,
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pengaturan notifikasi berhasil disimpan!');
  };

  const ToggleSwitch = ({ enabled, onChange }: { enabled: boolean; onChange: () => void }) => (
    <button
      type="button"
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? 'bg-gradient-to-r from-[#F27B66] to-[#FD5477]' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit}>
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Pengaturan Notifikasi</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Kelola preferensi notifikasi Anda</p>
        </div>

        <div className="space-y-6">
          {/* Email Notifications */}
          <div className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Notifikasi Email</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Terima notifikasi melalui email</p>
            </div>
            <ToggleSwitch
              enabled={settings.emailNotifications}
              onChange={() => handleToggle('emailNotifications')}
            />
          </div>

          {/* Push Notifications */}
          <div className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Push Notification</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Terima notifikasi push di browser</p>
            </div>
            <ToggleSwitch
              enabled={settings.pushNotifications}
              onChange={() => handleToggle('pushNotifications')}
            />
          </div>

          {/* Task Reminders */}
          <div className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Pengingat Tugas</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Dapatkan pengingat untuk tugas yang akan datang</p>
            </div>
            <ToggleSwitch
              enabled={settings.taskReminders}
              onChange={() => handleToggle('taskReminders')}
            />
          </div>

          {/* Deadline Alerts */}
          <div className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Peringatan Deadline</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Terima peringatan sebelum deadline</p>
            </div>
            <ToggleSwitch
              enabled={settings.deadlineAlerts}
              onChange={() => handleToggle('deadlineAlerts')}
            />
          </div>

          {/* Team Updates */}
          <div className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Update Tim</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Notifikasi tentang aktivitas tim</p>
            </div>
            <ToggleSwitch
              enabled={settings.teamUpdates}
              onChange={() => handleToggle('teamUpdates')}
            />
          </div>

          {/* Weekly Digest */}
          <div className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Ringkasan Mingguan</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Terima ringkasan mingguan</p>
            </div>
            <ToggleSwitch
              enabled={settings.weeklyDigest}
              onChange={() => handleToggle('weeklyDigest')}
            />
          </div>

          {/* Sound */}
          <div className="flex items-center justify-between py-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Suara Notifikasi</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Putar suara untuk notifikasi</p>
            </div>
            <ToggleSwitch
              enabled={settings.soundEnabled}
              onChange={() => handleToggle('soundEnabled')}
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F27B66] to-[#FD5477] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
          >
            <FontAwesomeIcon icon={faSave} />
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>
  );
};
