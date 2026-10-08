import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import projects, { categories } from './data/projects';

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
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Hero stats derived from the data, one per category in use
  const stats = Object.keys(categories)
    .map(key => ({ label: categories[key].label, count: projects.filter(p => p.category === key).length }))
    .filter(stat => stat.count > 0);
  const liveCount = projects.filter(p => p.demo?.type === 'live' && p.demo.url).length;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc-50 text-zinc-900 transition-theme dark:bg-zinc-950 dark:text-white">
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-0">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/25 via-violet-500/20 to-fuchsia-500/25 blur-3xl dark:from-indigo-600/25 dark:via-violet-600/20 dark:to-fuchsia-600/20" />
        <div className="absolute bottom-0 right-[-10%] h-[400px] w-[400px] rounded-full bg-sky-400/10 blur-3xl dark:bg-sky-500/10" />
      </div>

      <div className="relative z-10">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="flex flex-col items-center pb-16 pt-20 text-center md:pb-24 md:pt-28">
            <span className="animate-rise mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/60 px-4 py-1.5 text-xs italic tracking-[0.2em] text-zinc-500 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px] shadow-emerald-500" />
              tum dixit deus fiat lux et facta est lux
            </span>
            <h1 className="animate-rise font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl" style={{ animationDelay: '80ms' }}>
              Welcome to my <br className="hidden sm:block" />
              <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="animate-rise mt-6 max-w-2xl text-lg text-zinc-600 md:text-xl dark:text-zinc-400" style={{ animationDelay: '160ms' }}>
              A collection of projects, web applications, and games.
              Each one represents my passion for building meaningful software.
            </p>

            <div className="animate-rise mt-10 flex flex-wrap justify-center gap-3" style={{ animationDelay: '240ms' }}>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-zinc-900"
              >
                Browse projects
                <i className="fa-solid fa-arrow-down text-xs"></i>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white/60 px-6 py-3 text-sm font-semibold text-zinc-800 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
              >
                Get in touch
              </a>
            </div>

            {/* Stats */}
            <dl className="animate-rise mt-14 flex flex-wrap justify-center gap-x-10 gap-y-4" style={{ animationDelay: '320ms' }}>
              {[...stats, { label: 'Live demos', count: liveCount }].map(stat => (
                <div key={stat.label} className="flex flex-col items-center">
                  <dt className="order-2 text-xs uppercase tracking-widest text-zinc-500">{stat.label}</dt>
                  <dd className="order-1 font-display text-3xl font-semibold">{stat.count}</dd>
                </div>
              ))}
            </dl>
          </section>

          <Projects />

          <Contact />
        </main>

        <footer className="border-t border-zinc-200/80 py-8 text-center text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-500">
          © {new Date().getFullYear()} Achref Bouali · Built with React & Tailwind CSS
        </footer>
      </div>
    </div>
  );
}

export default App;
