import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faColumns, faCalendarCheck, faChartLine, faBolt } from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Tambahkan Tugas & Proyek',
      description: 'Buat tugas baru dengan mudah, tetapkan tenggat waktu, prioritas, dan deskripsi lengkap. Organisir dalam proyek untuk pengelolaan yang lebih baik.',
      iconName: faPlus,
      gradient: 'linear-gradient(135deg, #F27B66 0%, #FD5477 100%)'
    },
    {
      number: '02',
      title: 'Atur di Board',
      description: 'Kelompokkan tugas ke dalam kolom kanban (To Do, Doing, In Review, Done). Ubah status dengan drag-and-drop yang intuitif dan smooth.',
      iconName: faColumns,
      gradient: 'linear-gradient(135deg, #9F83D8 0%, #7B5EAE 100%)'
    },
    {
      number: '03',
      title: 'Jadwalkan di Kalender',
      description: 'Tempatkan tugas pada tanggal dan jam tertentu di kalender. Lihat durasi, dapatkan notifikasi pengingat, dan atur ulang jadwal dengan drag-and-drop.',
      iconName: faCalendarCheck,
      gradient: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)'
    },
    {
      number: '04',
      title: 'Pantau Progres',
      description: 'Dashboard menampilkan statistik real-time, grafik burndown, completion rate, dan daftar deadline terdekat. Analisis produktivitas Anda dengan mudah.',
      iconName: faChartLine,
      gradient: 'linear-gradient(135deg, #7B5EAE 0%, #6B4C9A 100%)'
    }
  ];

  return (
    <section className="py-20 bg-[#F3F5F7] dark:bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full filter blur-3xl"
          style={{ background: 'linear-gradient(135deg, #F27B66 0%, #FD5477 100%)' }}></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full filter blur-3xl"
          style={{ background: 'linear-gradient(135deg, #9F83D8 0%, #7B5EAE 100%)' }}></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-xs font-semibold shadow-md mb-6 border border-gray-200 dark:border-gray-700">
            <FontAwesomeIcon icon={faBolt} className="text-yellow-500" />
            <span className="bg-gradient-to-r from-[#F27B66] to-[#FD5477] bg-clip-text text-transparent">Cara Kerja</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mulai Dalam <span className="bg-gradient-to-r from-[#F27B66] to-[#FD5477] bg-clip-text text-transparent">4 Langkah Mudah</span>
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Dari membuat tugas hingga memantau progres, semuanya dirancang untuk kemudahan Anda
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="hidden lg:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#F27B66] via-[#9F83D8] to-[#34D399]"></div>

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-8 items-start">
                  {/* Timeline Node */}
                  <div className="hidden lg:flex flex-col items-center flex-shrink-0">
                    {/* Number Badge */}
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl z-10 relative"
                      style={{ background: step.gradient }}>
                      <span className="text-xl font-bold text-white">{step.number}</span>
                      {/* Pulse Animation */}
                      <div className="absolute inset-0 rounded-2xl animate-ping opacity-20"
                        style={{ background: step.gradient }}></div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 group">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:-translate-y-1">
                      {/* Mobile Number Badge */}
                      <div className="lg:hidden mb-4">
                        <div className="inline-flex w-12 h-12 rounded-xl items-center justify-center shadow-lg"
                          style={{ background: step.gradient }}>
                          <span className="text-lg font-bold text-white">{step.number}</span>
                        </div>
                      </div>

                      {/* Icon & Title */}
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                          style={{ background: step.gradient, opacity: 0.1 }}>
                          <FontAwesomeIcon 
                            icon={step.iconName} 
                            className="w-5 h-5"
                            style={{ 
                              background: step.gradient,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Decorative Gradient Line */}
                      <div className="mt-4 h-1 w-16 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: step.gradient }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
