import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheckCircle, faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F3F5F7] dark:bg-gray-900 pt-29">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-5">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full text-xs font-semibold shadow-sm animate-slideIn border border-gray-200 dark:border-gray-700">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 w-3 h-3" />
              <span className="bg-gradient-to-r from-[#F27B66] to-[#FD5477] bg-clip-text text-transparent">Portfolio Project - Web Development</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight animate-slideIn animation-delay-200">
              Kelola Tugas dan Proyek dengan{' '}
              <span className="bg-gradient-to-r from-[#F27B66] to-[#FD5477] bg-clip-text text-transparent">
                Mudah
              </span>
            </h1>

            {/* Sub-heading */}
            <div className="space-y-3 text-base text-gray-600 dark:text-gray-300 animate-slideIn animation-delay-400">
              <p>
                Monitor progres, atur jadwal, dan fokus pada prioritas Anda dalam satu platform terpadu.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-[#34D399] flex-shrink-0" />
                  <span>Visualisasi kanban yang intuitif</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-[#34D399] flex-shrink-0" />
                  <span>Kalender terintegrasi dengan pengingat otomatis</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-[#34D399] flex-shrink-0" />
                  <span>Dashboard analytics untuk track produktivitas</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-slideIn animation-delay-600">
              <Link
                to="/dashboard"
                className="px-5 py-2.5 text-sm text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #F27B66 0%, #FD5477 100%)' }}
              >
                Coba Sekarang
                <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
              </Link>
              
              <a
                href="https://github.com/bahrulwd/taskify-todolist-website"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faPlay} className="w-3 h-3" />
                View on GitHub
              </a>
            </div>

            {/* Tech Stack Indicators */}
            <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start text-xs text-gray-600 dark:text-gray-400 animate-slideIn animation-delay-800">
              <div className="flex items-center gap-1.5">
                <FontAwesomeIcon icon={faCheckCircle} className="w-3.5 h-3.5 text-[#34D399]" />
                <span className="font-medium">React + TypeScript</span>
              </div>
              <div className="h-3 w-px bg-gray-300 dark:bg-gray-600"></div>
              <div className="flex items-center gap-1.5">
                <FontAwesomeIcon icon={faCheckCircle} className="w-3.5 h-3.5 text-[#34D399]" />
                <span className="font-medium">Tailwind CSS</span>
              </div>
              <div className="h-3 w-px bg-gray-300 dark:bg-gray-600"></div>
              <div className="flex items-center gap-1.5">
                <FontAwesomeIcon icon={faCheckCircle} className="w-3.5 h-3.5 text-[#34D399]" />
                <span className="font-medium">Responsive Design</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-slideIn animation-delay-1000">
            {/* Floating gradient orbs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#F27B66]/20 to-[#FD5477]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-[#9F83D8]/20 to-[#7B5EAE]/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
            
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <img
                src="/assets/feature/dashboard.png"
                alt="Taskify Dashboard Preview"
                className="w-full h-auto max-h-[450px] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
