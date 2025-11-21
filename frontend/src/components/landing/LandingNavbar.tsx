import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faHome, faLayerGroup, faDesktop, faCode } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const LandingNavbar = () => {
  const { effectiveTheme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const toggleTheme = () => {
    setTheme(effectiveTheme === 'dark' ? 'light' : 'dark');
  };

  // Track scroll and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'features', 'demo'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section === 'home' ? 'hero' : section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', icon: faHome, href: '#hero', external: false },
    { id: 'features', label: 'Fitur', icon: faLayerGroup, href: '#features', external: false },
    { id: 'demo', label: 'Demo', icon: faDesktop, href: '#demo', external: false }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50' 
        : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-700/30'
    }`}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/landing" className="flex items-center group">
            <img 
              src={effectiveTheme === 'dark' ? '/assets/logo-white.png' : '/assets/logo.png'}
              alt="Taskify Logo" 
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 font-medium"
                >
                  <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />
                  <span>{link.label}</span>
                </a>
              ) : (
                <a
                  key={link.id}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                    activeSection === link.id
                      ? 'text-[#F27B66] bg-red-50 dark:bg-red-900/20'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />
                  <span>{link.label}</span>
                </a>
              )
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              <FontAwesomeIcon 
                icon={effectiveTheme === 'dark' ? faSun : faMoon} 
                className="w-4 h-4"
              />
            </button>

            {/* CTA Button */}
            <Link
              to="/dashboard"
              className="px-6 py-2.5 rounded-lg text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
              style={{ 
                background: 'linear-gradient(135deg, #F27B66 0%, #FD5477 100%)'
              }}
            >
              Coba Sekarang
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
