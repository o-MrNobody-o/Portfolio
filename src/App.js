import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';

/**
 * Main App Component
 * 
 * Handles the overall app structure and dark mode state management.
 * The dark mode preference is persisted in localStorage.
 */
function App() {
  // Initialize dark mode from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Update document class and localStorage when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Toggle dark mode handler
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="min-h-screen transition-theme bg-gray-50 dark:bg-gray-900">
      {/* Header with navigation and dark mode toggle */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Main content area */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12 md:py-20">
          {/* Motto - elegant Latin phrase */}
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase italic mb-6 transition-theme text-gray-400 dark:text-gray-500">
            tum dixit deus fiat lux et facta est lux
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 transition-theme text-gray-900 dark:text-white">
            Welcome to My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto transition-theme text-gray-600 dark:text-gray-300">
            Explore my collection of projects, web applications, and games. 
            Each project represents my passion for building meaningful software.
          </p>
        </section>

        {/* Projects Section */}
        <Projects />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center transition-theme border-t border-gray-200 dark:border-gray-800">
        <p className="transition-theme text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} My Portfolio. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;
