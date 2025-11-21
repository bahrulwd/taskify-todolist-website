import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faClipboardList, faCalendar, faCog, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const FeaturesSection = () => {
  const features = [
    {
      iconName: faChartLine,
      title: 'Dashboard',
      description: 'Menampilkan statistik tugas, grafik progres (to-do, in-progress, completed), daftar tugas terbaru dan deadline. Gambaran cepat untuk melihat perkembangan Anda.',
      gradient: 'linear-gradient(135deg, #F27B66 0%, #FD5477 100%)',
      features: [
        'Statistik real-time',
        'Grafik progres visual',
        'Deadline terdekat',
        'Tugas prioritas tinggi'
      ]
    },
    {
      iconName: faClipboardList,
      title: 'All Task (Board)',
      description: 'Visualisasi kanban dengan kolom To Do, Doing, In Review, dan Done. Fitur drag-and-drop memungkinkan Anda memindahkan tugas dengan mudah.',
      gradient: 'linear-gradient(135deg, #9F83D8 0%, #7B5EAE 100%)',
      features: [
        'Kanban board intuitif',
        'Drag & drop smooth',
        'Filter & pencarian',
        'Tugas berulang'
      ]
    },
    {
      iconName: faCalendar,
      title: 'Calendar',
      description: 'Tampilan harian/mingguan/bulanan dengan penempatan tugas berdasarkan jam. Tugas diberi warna berdasarkan status atau prioritas dengan pengingat otomatis.',
      gradient: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
      features: [
        'View harian/mingguan/bulanan',
        'Drag & drop scheduling',
        'Notifikasi & reminder',
        'Color coding status'
      ]
    },
    {
      iconName: faCog,
      title: 'Settings',
      description: 'Personalisasi pengalaman Anda dengan pengaturan profil, notifikasi, tema gelap/terang, tugas berulang, zona waktu, dan integrasi aplikasi lain.',
      gradient: 'linear-gradient(135deg, #7B5EAE 0%, #6B4C9A 100%)',
      features: [
        'Tema gelap/terang',
        'Pengaturan notifikasi',
        'Integrasi aplikasi',
        'Zona waktu & bahasa'
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#F3F5F7] dark:bg-gray-900">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-[#F27B66]/10 to-[#FD5477]/10 dark:from-[#F27B66]/20 dark:to-[#FD5477]/20 rounded-full text-xs font-semibold text-[#F27B66] border border-[#F27B66]/20">
              ✨ Fitur Lengkap
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Fitur Utama Yang Akan Membantu Anda
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Semua yang Anda butuhkan untuk mengelola tugas dan proyek dalam satu platform terpadu
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{ background: feature.gradient }}></div>
              
              {/* Icon and Title - Side by Side */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                  style={{ background: feature.gradient }}>
                  <FontAwesomeIcon icon={feature.iconName} className="w-6 h-6" />
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-xl animate-ping opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: feature.gradient }}></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#F27B66] transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Feature List */}
              <ul className="space-y-3">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                    <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#34D399] flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none"
                style={{ background: feature.gradient }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
