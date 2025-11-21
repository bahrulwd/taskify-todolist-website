import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faDesktop, faSave } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../contexts';

export const ThemeSettings: React.FC = () => {
  const { theme: currentTheme, setTheme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pengaturan tema berhasil disimpan!');
  };

  const themes = [
    {
      id: 'light' as const,
      name: 'Terang',
      description: 'Tampilan cerah untuk siang hari',
      icon: faSun,
      preview: 'bg-white border-2',
    },
    {
      id: 'dark' as const,
      name: 'Gelap',
      description: 'Tampilan gelap untuk malam hari',
      icon: faMoon,
      preview: 'bg-gray-900 border-2',
    },
    {
      id: 'auto' as const,
      name: 'Otomatis',
      description: 'Sesuaikan dengan sistem',
      icon: faDesktop,
      preview: 'bg-gradient-to-r from-white to-gray-900 border-2',
    },
  ];

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit}>
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Pengaturan Tema</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Pilih tampilan yang sesuai dengan preferensi Anda</p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          {themes.map((themeOption) => (
            <button
              key={themeOption.id}
              type="button"
              onClick={() => setTheme(themeOption.id)}
              className={`p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
                currentTheme === themeOption.id
                  ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-20 h-20 rounded-xl ${themeOption.preview} flex items-center justify-center mb-4 shadow-md ${
                    currentTheme === themeOption.id ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={themeOption.icon}
                    className={`w-8 h-8 ${
                      themeOption.id === 'dark' ? 'text-white' : themeOption.id === 'auto' ? 'text-gray-500' : 'text-gray-700'
                    }`}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{themeOption.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{themeOption.description}</p>
                {currentTheme === themeOption.id && (
                  <div className="mt-3 px-3 py-1 bg-gradient-to-r from-[#F27B66] to-[#FD5477] text-white text-xs font-medium rounded-full">
                    Aktif
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Additional Theme Options */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-6 transition-colors duration-300">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Kustomisasi Warna</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Warna Aksen</label>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#F27B66] to-[#FD5477] shadow-md border-2 border-white dark:border-gray-700 ring-2 ring-red-300 dark:ring-red-600"
                />
                <button
                  type="button"
                  className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#9F83D8] to-[#7B5EAE] shadow-md hover:ring-2 ring-purple-300 dark:ring-purple-600 transition-all border-2 border-transparent dark:border-gray-700"
                />
                <button
                  type="button"
                  className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] shadow-md hover:ring-2 ring-blue-300 dark:ring-blue-600 transition-all border-2 border-transparent dark:border-gray-700"
                />
                <button
                  type="button"
                  className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#34D399] to-[#10B981] shadow-md hover:ring-2 ring-green-300 dark:ring-green-600 transition-all border-2 border-transparent dark:border-gray-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-6 border-t border-gray-200">
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
