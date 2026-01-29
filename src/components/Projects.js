import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

/**
 * Projects Component
 * 
 * Renders a grid of project cards dynamically from the projects data file.
 * Includes filtering tabs for different project types.
 */
const Projects = () => {
  const [filter, setFilter] = React.useState('all');

  // Filter projects based on selected type
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  return (
    <section id="projects" className="py-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-theme text-gray-900 dark:text-white">
          My Projects
        </h2>
        <p className="transition-theme text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          A collection of projects I've worked on, from web applications to games and developer tools.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {['all', 'project', 'webapp/game'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === type
                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {type === 'all' ? 'All' : type === 'project' ? 'Projects' : 'Web Apps & Games'}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="transition-theme text-gray-500 dark:text-gray-400 text-lg">
            No projects found in this category.
          </p>
        </div>
      )}
    </section>
  );
};

export default Projects;
