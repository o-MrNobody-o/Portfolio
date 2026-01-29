import React from 'react';

/**
 * Header Component
 * 
 * Displays the navigation bar with logo and dark mode toggle.
 * 
 * @param {boolean} darkMode - Current dark mode state
 * @param {function} toggleDarkMode - Function to toggle dark mode
 */
const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md transition-theme bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <a 
          href="/" 
          className="text-2xl font-bold transition-theme text-gray-900 dark:text-white hover:opacity-80"
        >
          <span className="gradient-text">Portfolio</span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#projects" 
            className="transition-theme text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            Projects
          </a>
          <a 
            href="https://github.com/username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-theme text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            GitHub
          </a>
        </nav>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg transition-all duration-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? (
            // Sun icon for light mode
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            // Moon icon for dark mode
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
