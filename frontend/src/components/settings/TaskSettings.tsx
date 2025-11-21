import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

export const TaskSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    defaultView: 'board',
    sortBy: 'dueDate',
    showCompletedTasks: true,
    autoArchive: false,
    defaultPriority: 'medium',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleToggle = (key: keyof typeof settings) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pengaturan tugas berhasil disimpan!');
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Pengaturan Tugas</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Sesuaikan cara mengelola tugas Anda</p>
        </div>

        <div className="space-y-6">
          {/* Default View */}
          <div className="pb-6 border-b border-gray-100 dark:border-gray-700">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Tampilan Default</label>
            <select
              name="defaultView"
              value={settings.defaultView}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            >
              <option value="board">Kanban Board</option>
              <option value="list">List View</option>
              <option value="calendar">Calendar View</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="pb-6 border-b border-gray-100 dark:border-gray-700">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Urutkan Berdasarkan</label>
            <select
              name="sortBy"
              value={settings.sortBy}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            >
              <option value="dueDate">Tanggal Deadline</option>
              <option value="priority">Prioritas</option>
              <option value="status">Status</option>
              <option value="createdDate">Tanggal Dibuat</option>
            </select>
          </div>

          {/* Default Priority */}
          <div className="pb-6 border-b border-gray-100 dark:border-gray-700">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Prioritas Default</label>
            <select
              name="defaultPriority"
              value={settings.defaultPriority}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>

          {/* Show Completed Tasks */}
          <div className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Tampilkan Tugas Selesai</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Tampilkan tugas yang sudah diselesaikan</p>
            </div>
            <ToggleSwitch
              enabled={settings.showCompletedTasks}
              onChange={() => handleToggle('showCompletedTasks')}
            />
          </div>

          {/* Auto Archive */}
          <div className="flex items-center justify-between py-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Arsip Otomatis</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Arsipkan tugas selesai setelah 30 hari</p>
            </div>
            <ToggleSwitch
              enabled={settings.autoArchive}
              onChange={() => handleToggle('autoArchive')}
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
