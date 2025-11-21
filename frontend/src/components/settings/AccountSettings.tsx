import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faGlobe, faClock } from '@fortawesome/free-solid-svg-icons';

export const AccountSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    language: 'id',
    timezone: 'Asia/Jakarta',
    dateFormat: 'dd/mm/yyyy',
    timeFormat: '24h',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pengaturan akun berhasil disimpan!');
  };

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit}>
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Pengaturan Akun</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Kelola preferensi akun dan lokalisasi</p>
        </div>

        <div className="space-y-6">
          {/* Language */}
          <div className="pb-6 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <FontAwesomeIcon icon={faGlobe} className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Bahasa</label>
            </div>
            <select
              name="language"
              value={settings.language}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            >
              <option value="id">Bahasa Indonesia</option>
              <option value="en">English</option>
              <option value="ja">日本語 (Japanese)</option>
              <option value="zh">中文 (Chinese)</option>
            </select>
          </div>

          {/* Timezone */}
          <div className="pb-6 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <FontAwesomeIcon icon={faClock} className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Zona Waktu</label>
            </div>
            <select
              name="timezone"
              value={settings.timezone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            >
              <option value="Asia/Jakarta">(GMT+7) Jakarta, Bangkok</option>
              <option value="Asia/Tokyo">(GMT+9) Tokyo, Seoul</option>
              <option value="Asia/Singapore">(GMT+8) Singapore, Hong Kong</option>
              <option value="Europe/London">(GMT+0) London</option>
              <option value="America/New_York">(GMT-5) New York</option>
              <option value="America/Los_Angeles">(GMT-8) Los Angeles</option>
            </select>
          </div>

          {/* Date Format */}
          <div className="pb-6 border-b border-gray-100 dark:border-gray-700">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Format Tanggal</label>
            <select
              name="dateFormat"
              value={settings.dateFormat}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            >
              <option value="dd/mm/yyyy">DD/MM/YYYY (31/12/2025)</option>
              <option value="mm/dd/yyyy">MM/DD/YYYY (12/31/2025)</option>
              <option value="yyyy-mm-dd">YYYY-MM-DD (2025-12-31)</option>
            </select>
          </div>

          {/* Time Format */}
          <div className="pb-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Format Waktu</label>
            <select
              name="timeFormat"
              value={settings.timeFormat}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            >
              <option value="24h">24 Jam (13:00)</option>
              <option value="12h">12 Jam (1:00 PM)</option>
            </select>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl transition-colors duration-300">
          <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">Zona Berbahaya</h3>
          <p className="text-sm text-red-700 dark:text-red-400 mb-4">
            Tindakan berikut bersifat permanen dan tidak dapat dibatalkan
          </p>
          <div className="space-y-3">
            <button
              type="button"
              className="w-full px-4 py-2 text-left text-sm font-medium text-red-700 dark:text-red-300 bg-white dark:bg-gray-800 border border-red-300 dark:border-red-700 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
            >
              Hapus Semua Data Tugas
            </button>
            <button
              type="button"
              className="w-full px-4 py-2 text-left text-sm font-medium text-red-700 dark:text-red-300 bg-white dark:bg-gray-800 border border-red-300 dark:border-red-700 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
            >
              Nonaktifkan Akun
            </button>
            <button
              type="button"
              className="w-full px-4 py-2 text-left text-sm font-medium text-white bg-red-600 dark:bg-red-700 rounded-lg hover:bg-red-700 dark:hover:bg-red-800 transition-colors"
            >
              Hapus Akun Permanen
            </button>
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
