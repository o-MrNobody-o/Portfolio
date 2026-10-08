import React from 'react';
import ProjectCard from './ProjectCard';
import projects, { categories } from '../data/projects';

/**
 * Projects Component
 *
 * Renders all projects in one grid. Filter tabs are built from the category
 * tags actually used in the data, so a new category shows up automatically.
 */
const Projects = () => {
  const [filter, setFilter] = React.useState('all');

  const usedCategories = Object.keys(categories).filter(key =>
    projects.some(project => project.category === key)
  );

  const tabs = [
    { key: 'all', label: 'All', icon: 'fa-solid fa-layer-group', count: projects.length },
    ...usedCategories.map(key => ({
      key,
      label: categories[key].label,
      icon: categories[key].icon,
      count: projects.filter(project => project.category === key).length,
    })),
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="scroll-mt-28 py-8">
      {/* Section Header */}
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
          {'// selected work'}
        </span>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 md:text-5xl dark:text-white">
          Things I've built
        </h2>
        <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
          Web apps, mobile apps and games. Open the live demo or watch a walkthrough, and read the code on GitHub.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="mb-12 flex justify-center">
        <div className="inline-flex max-w-full gap-1 overflow-x-auto rounded-2xl border border-zinc-200/80 bg-white/60 p-1.5 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03]">
          {tabs.map(tab => {
            const active = filter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active
                    ? 'bg-zinc-900 text-white shadow-md dark:bg-white dark:text-zinc-900'
                    : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white'
                }`}
              >
                <i className={`${tab.icon} text-xs`}></i>
                {tab.label}
                <span className={`rounded-md px-1.5 py-0.5 font-mono text-[11px] ${
                  active ? 'bg-white/20 dark:bg-zinc-900/10' : 'bg-zinc-200/70 dark:bg-white/10'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid — keyed by filter so cards re-animate on tab change */}
      <div key={filter} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="animate-rise"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-16 text-center text-lg text-zinc-500 dark:text-zinc-400">
          No projects found in this category.
        </div>
      )}
    </section>
  );
};

export default Projects;
