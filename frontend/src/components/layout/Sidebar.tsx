import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faClipboardList, faCalendar, faGear } from '@fortawesome/free-solid-svg-icons';
import { faHouse as faHouseRegular, faClipboard as faClipboardRegular, faCalendar as faCalendarRegular } from '@fortawesome/free-regular-svg-icons';
import { faGear as faGearRegular } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../contexts';

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const { effectiveTheme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const menuItems = [
    { 
      name: 'Dashboard', 
      iconRegular: faHouseRegular,
      iconSolid: faHouse,
      path: '/dashboard' 
    },
    { 
      name: 'All Task', 
      iconRegular: faClipboardRegular,
      iconSolid: faClipboardList,
      path: '/tasks' 
    },
    { 
      name: 'Calendar', 
      iconRegular: faCalendarRegular,
      iconSolid: faCalendar,
      path: '/calendar' 
    },
    { 
      name: 'Settings', 
      iconRegular: faGearRegular,
      iconSolid: faGear,
      path: '/settings' 
    },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="bg-white dark:bg-gray-800 h-screen fixed left-0 top-0 flex flex-col transition-colors duration-300" style={{ width: '264px', paddingLeft: '40px' }}>
      {/* Logo */}
      <div className="py-6">
        <img 
          src={effectiveTheme === 'dark' ? '/assets/logo-white.png' : '/assets/logo.png'}
          alt="Taskify Logo" 
          className="h-10 w-auto object-contain" 
        />
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 pt-3 pr-0 overflow-hidden relative">
        
        <ul className="space-y-1 relative">
          {menuItems.map((item, index) => {
            const active = isActive(item.path);
            
            return (
              <li 
                key={item.name} 
                className="relative"
                ref={(el) => { itemRefs.current[index] = el; }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Active Background - untuk active item */}
                {active && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600"
                    style={{
                      boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)',
                      marginLeft: '8px',
                      marginRight: '8px',
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 35,
                      mass: 0.5,
                    }}
                  />
                )}
                
                {/* Hover Background - hanya untuk non-active */}
                {!active && hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-gray-50 dark:bg-gray-700 rounded-2xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      marginLeft: '8px',
                      marginRight: '8px',
                    }}
                  />
                )}
                
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 py-3.5 px-5 transition-all duration-200 relative z-10 group ${
                    active
                      ? 'text-red-500 font-semibold'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium'
                  }`}
                >
                  <motion.div
                    className="flex items-center gap-3"
                    animate={{
                      scale: active ? 1.05 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {/* Icon with subtle animation */}
                    <motion.div
                      animate={{
                        rotate: active ? [0, -5, 5, 0] : 0,
                      }}
                      transition={{ 
                        duration: 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      <FontAwesomeIcon 
                        icon={active ? item.iconSolid : item.iconRegular} 
                        className="w-5 h-5"
                      />
                    </motion.div>
                    <span className="tracking-wide">{item.name}</span>
                  </motion.div>
                  
                  {/* Active indicator line */}
                  {active && (
                    <motion.div
                      className="absolute left-0 w-1 bg-gradient-to-b from-red-400 to-red-600 rounded-r-full"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: '60%',
                        opacity: 1,
                      }}
                      transition={{ 
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                      }}
                      style={{
                        top: '20%',
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
