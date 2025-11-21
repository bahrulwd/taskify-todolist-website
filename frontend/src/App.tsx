import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { TaskProvider, ThemeProvider } from './contexts';
import { Sidebar } from './components/layout';
import { AllTaskPage, DashboardPage, CalendarPage, SettingsPage, LandingPage } from './pages';
import './App.css';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Redirect root to landing page */}
            <Route path="/" element={<Navigate to="/landing" replace />} />
            
            {/* Landing Page Route - No Sidebar */}
            <Route path="/landing" element={<LandingPage />} />
            
            {/* App Routes - With Sidebar */}
            <Route path="/*" element={
              <div className="flex overflow-x-hidden min-h-screen bg-[#F3F5F7] dark:bg-gray-900 transition-colors duration-300">
                <Sidebar />
                <div className="flex-1 overflow-x-hidden" style={{ marginLeft: '240px' }}>
                  <Routes>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/tasks" element={<AllTaskPage />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                  </Routes>
                </div>
              </div>
            } />
          </Routes>
        </Router>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
