import React from 'react';

/**
 * Header Component
 *
 * Floating navigation bar with logo, links and dark mode toggle.
 *
 * @param {boolean} darkMode - Current dark mode state
 * @param {function} toggleDarkMode - Function to toggle dark mode
 */
const Header = ({ darkMode, toggleDarkMode }) => {
  const linkClass = 'rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white';

  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="mx-auto flex max-w-4xl items-center justify-between rounded-2xl border border-zinc-200/80 bg-white/70 px-4 py-2.5 shadow-lg shadow-zinc-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/60 dark:shadow-black/20">
        {/* Logo / Brand */}
        <a href="/" className="font-display text-lg font-semibold tracking-tight">
          <span className="gradient-text">Portfolio</span>
        </a>

        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-1 sm:flex">
            <a href="#projects" className={linkClass}>Projects</a>
            <a href="#contact" className={linkClass}>Contact</a>
            <a href="https://github.com/o-MrNobody-o" target="_blank" rel="noopener noreferrer" className={linkClass}>
              GitHub
            </a>
          </nav>

          <span className="mx-2 hidden h-5 w-px bg-zinc-200 sm:block dark:bg-white/10" />

          <button
            onClick={toggleDarkMode}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-zinc-600 transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-white"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i className={darkMode ? 'fa-solid fa-sun text-amber-400' : 'fa-solid fa-moon'}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
