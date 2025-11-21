import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faBolt, faChartPie, faPalette, faBell, faUsers, faLock, faGlobe } from '@fortawesome/free-solid-svg-icons';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: faRocket,
      title: 'Produktivitas Meningkat',
      description: 'Semua tugas dan jadwal terpusat dalam satu platform, membuat Anda fokus pada prioritas tanpa distraksi.',
      stats: '+45%',
      statsLabel: 'Efisiensi Kerja',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      icon: faBolt,
      title: 'Fleksibilitas Maksimal',
      description: 'Drag-and-drop yang intuitif memudahkan penyesuaian alur kerja. Tugas berulang otomatis mempermudah rutinitas.',
      stats: '100%',
      statsLabel: 'Customizable',
      gradient: 'from-yellow-500 to-amber-500'
    },
    {
      icon: faChartPie,
      title: 'Visualisasi Progres',
      description: 'Grafik dan statistik real-time membantu memantau kinerja tim atau personal dengan jelas.',
      stats: 'Real-time',
      statsLabel: 'Analytics',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: faPalette,
      title: 'Kustomisasi Lengkap',
      description: 'Tema gelap/terang, notifikasi personal, integrasi kalender, multi-bahasa, dan berbagai pengaturan lainnya.',
      stats: '50+',
      statsLabel: 'Opsi Setting',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: faBell,
      title: 'Reminder Cerdas',
      description: 'Notifikasi otomatis untuk deadline, pengingat tugas prioritas, dan update progres tim secara real-time.',
      stats: '24/7',
      statsLabel: 'Notifications',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: faUsers,
      title: 'Kolaborasi Tim',
      description: 'Berbagi proyek, assign tugas, komentar real-time, dan track progres tim dalam satu workspace.',
      stats: 'Unlimited',
      statsLabel: 'Team Members',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: faLock,
      title: 'Keamanan Terjamin',
      description: 'Enkripsi end-to-end, backup otomatis, dan kontrol akses berlapis untuk menjaga data Anda tetap aman.',
      stats: '256-bit',
      statsLabel: 'Encryption',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      icon: faGlobe,
      title: 'Akses Dimana Saja',
      description: 'Sinkronisasi otomatis antar device. Akses dari desktop, tablet, atau mobile dengan pengalaman yang konsisten.',
      stats: 'Cloud',
      statsLabel: 'Sync',
      gradient: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-xs font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Manfaat & Keunggulan</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Kenapa Memilih <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Taskify</span>
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Platform yang dirancang untuk meningkatkan produktivitas dan mempermudah pengelolaan tugas Anda
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${benefit.gradient} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  <FontAwesomeIcon icon={benefit.icon} className="text-white text-2xl" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {benefit.description}
                </p>

                {/* Stats Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${benefit.gradient} bg-opacity-10 rounded-full`}>
                  <span className="text-sm font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent">{benefit.stats}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{benefit.statsLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Taskify vs Aplikasi Lain</h3>
              <p className="text-blue-100">Lihat mengapa ribuan pengguna memilih Taskify</p>
            </div>

            {/* Comparison Table */}
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {[
                { feature: 'Kanban Board Drag & Drop', taskify: true, others: 'Limited' },
                { feature: 'Calendar Integration', taskify: true, others: false },
                { feature: 'Real-time Analytics', taskify: true, others: 'Paid Only' },
                { feature: 'Unlimited Projects', taskify: true, others: 'Paid Only' },
                { feature: 'Dark Mode', taskify: true, others: true },
                { feature: 'Mobile App', taskify: true, others: true },
                { feature: 'Recurring Tasks', taskify: true, others: 'Paid Only' },
                { feature: 'Team Collaboration', taskify: true, others: false },
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <div className="col-span-1 font-medium text-gray-900 dark:text-white flex items-center">
                    {item.feature}
                  </div>
                  <div className="text-center flex items-center justify-center">
                    {item.taskify === true ? (
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <span className="text-sm text-gray-500 dark:text-gray-400">{item.taskify}</span>
                    )}
                  </div>
                  <div className="text-center flex items-center justify-center">
                    {item.others === true ? (
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : item.others === false ? (
                      <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <span className="text-sm text-yellow-600 dark:text-yellow-500">{item.others}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Table Header (for columns) */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 border-t-2 border-gray-300 dark:border-gray-600 font-semibold">
              <div className="text-gray-700 dark:text-gray-300">Fitur</div>
              <div className="text-center text-blue-600 dark:text-blue-400">Taskify</div>
              <div className="text-center text-gray-600 dark:text-gray-400">Lainnya</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
