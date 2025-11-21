import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faColumns, faCalendar, faCog, faCheckCircle, faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';

const DemoSection = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: faChartLine, gradient: 'linear-gradient(135deg, #F27B66 0%, #FD5477 100%)' },
    { id: 'board', label: 'Kanban Board', icon: faColumns, gradient: 'linear-gradient(135deg, #9F83D8 0%, #7B5EAE 100%)' },
    { id: 'calendar', label: 'Calendar', icon: faCalendar, gradient: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)' },
    { id: 'settings', label: 'Settings', icon: faCog, gradient: 'linear-gradient(135deg, #7B5EAE 0%, #6B4C9A 100%)' }
  ];

  const screenshots = {
    dashboard: {
      title: 'Dashboard Analytics',
      description: 'Pantau produktivitas Anda dengan statistik real-time, grafik progres, dan daftar tugas prioritas.',
      image: '/assets/feature/dashboard.png',
      gradient: 'linear-gradient(135deg, #F27B66 0%, #FD5477 100%)',
      features: ['Statistik Real-time', 'Grafik Progres', 'Deadline Tracker', 'Priority Tasks']
    },
    board: {
      title: 'Kanban Board',
      description: 'Kelola tugas dengan visual drag-and-drop yang smooth. Pindahkan kartu antar kolom dengan mudah.',
      image: '/assets/feature/alltask.png',
      gradient: 'linear-gradient(135deg, #9F83D8 0%, #7B5EAE 100%)',
      features: ['Drag & Drop', 'Multi Column', 'Card Details', 'Quick Filter']
    },
    calendar: {
      title: 'Smart Calendar',
      description: 'Jadwalkan tugas dengan view harian, mingguan, atau bulanan. Atur reminder dan lihat durasi setiap tugas.',
      image: '/assets/feature/calendar.png',
      gradient: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
      features: ['Multiple Views', 'Time Blocks', 'Reminders', 'Color Coding']
    },
    settings: {
      title: 'Personalisasi',
      description: 'Sesuaikan pengalaman Anda dengan tema, notifikasi, integrasi, dan pengaturan lainnya.',
      image: '/assets/feature/dashboard.png',
      gradient: 'linear-gradient(135deg, #7B5EAE 0%, #6B4C9A 100%)',
      features: ['Dark/Light Theme', 'Notifications', 'Integrations', 'Preferences']
    }
  };

  return (
    <section id="demo" className="py-20 bg-[#F3F5F7] dark:bg-gray-900">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header - matching style */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full text-xs font-semibold shadow-sm mb-6 border border-gray-200 dark:border-gray-700">
            <FontAwesomeIcon icon={faPlay} className="text-purple-600 w-3 h-3" />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Demo Interaktif</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Lihat Taskify Dalam <span className="bg-gradient-to-r from-[#F27B66] to-[#FD5477] bg-clip-text text-transparent">Aksi</span>
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Jelajahi fitur-fitur Taskify dan lihat bagaimana platform kami dapat meningkatkan produktivitas Anda
          </p>
        </div>

        {/* Tab Navigation - modern card style */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fadeInUp">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg scale-105 border-2'
                  : 'bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md hover:scale-105 border border-gray-200 dark:border-gray-700'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                borderColor: activeTab === tab.id ? tab.gradient.split('(')[1].split(' ')[0] : undefined
              }}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                activeTab === tab.id ? 'text-white' : 'text-gray-400'
              }`}
                style={activeTab === tab.id ? { background: tab.gradient } : undefined}
              >
                <FontAwesomeIcon icon={tab.icon} className="w-4 h-4" />
              </div>
              <span className="text-sm">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto">
          {Object.entries(screenshots).map(([key, content]) => (
            <div
              key={key}
              className={`transition-all duration-500 ${
                activeTab === key ? 'block animate-fadeIn' : 'hidden'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                {/* Left - Content */}
                <div className="space-y-5">
                  {/* Title and Description at top */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {content.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {content.description}
                    </p>
                  </div>

                  {/* Features List - using FontAwesome */}
                  <div className="grid grid-cols-2 gap-3">
                    {content.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
                      >
                        <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-[#34D399] flex-shrink-0" />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons - matching hero style */}
                  <div className="flex gap-3 pt-2">
                    <Link
                      to="/dashboard"
                      className="px-5 py-2.5 text-sm text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                      style={{ background: content.gradient }}
                    >
                      Coba Sekarang
                      <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
                    </Link>
                    <Link
                      to="/tasks"
                      className="px-5 py-2.5 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300"
                    >
                      Explore Board
                    </Link>
                  </div>
                </div>

                {/* Right - Screenshot with modern browser mockup */}
                <div className="relative">
                  {/* Browser Window */}
                  <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-500">
                    {/* Browser Header */}
                    <div className="bg-gray-100 dark:bg-gray-700 px-4 py-3 flex items-center gap-3 border-b border-gray-200 dark:border-gray-600">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"></div>
                      </div>
                      <div className="flex-1 mx-4 bg-white dark:bg-gray-600 rounded-lg px-3 py-1.5 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <span>taskify.app/{key}</span>
                      </div>
                    </div>

                    {/* Screenshot */}
                    <div className="relative bg-gray-50 dark:bg-gray-900">
                      <img
                        src={content.image}
                        alt={content.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>

                  {/* Live indicator badge - matching style */}
                  <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-3 border border-gray-200 dark:border-gray-700 animate-float z-20">
                    <div className="flex items-center gap-2">
                      <div className="relative w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: content.gradient }}>
                        <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-white" />
                        <div className="absolute inset-0 rounded-lg animate-ping opacity-20"
                          style={{ background: content.gradient }}></div>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900 dark:text-white">Live Demo</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Interactive</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
