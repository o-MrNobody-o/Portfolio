import React, { useState } from 'react';

/**
 * ProjectCard Component
 * 
 * Displays an individual project card with image, title, description, and action buttons.
 * Features:
 * - Shows shortDescription by default
 * - Toggle button to expand/collapse full description
 * - "Read more" / "Show less" button only shown when fullDescription differs
 * - Shows "Live Demo" button only for webapp/game type with liveLink
 * 
 * @param {object} project - Project data object
 */
const ProjectCard = ({ project }) => {
  const { title, shortDescription, fullDescription, image, type, github, liveLink } = project;
  
  // State for toggling between short and full description
  const [isExpanded, setIsExpanded] = useState(false);

  // Get the description text (support legacy 'description' field for backwards compatibility)
  const cardDescription = shortDescription || project.description || '';
  const expandedDescription = fullDescription || '';

  // Check if we should show the "Read more" button
  // Only show if fullDescription exists and is different from shortDescription
  const hasExpandableContent = expandedDescription && expandedDescription !== cardDescription;

  // Determine which description to display
  const displayDescription = isExpanded ? expandedDescription : cardDescription;

  // Toggle handler
  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div className="group relative rounded-2xl overflow-hidden transition-all duration-500 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl hover:-translate-y-2 card-glow flex flex-col h-full">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            // Fallback for missing images - show a placeholder
            e.target.src = `https://via.placeholder.com/400x300/6366f1/ffffff?text=${encodeURIComponent(title)}`;
          }}
        />
        {/* Project Type Badge */}
        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
          type === 'webapp/game' 
            ? 'bg-green-500 text-white' 
            : 'bg-blue-500 text-white'
        }`}>
          {type === 'webapp/game' ? '🚀 Live' : '📁 Project'}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-bold mb-2 transition-theme text-gray-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400">
          {title}
        </h3>

        {/* Description Container */}
        <div className="mb-4 flex-grow">
          {/* Description Text - No truncation when expanded */}
          <p 
            className={`text-sm transition-theme text-gray-600 dark:text-gray-400 ${
              !isExpanded ? 'line-clamp-2' : ''
            }`}
          >
            {displayDescription}
          </p>
          
          {/* Read More / Show Less Button - Only shown if expandable content exists */}
          {hasExpandableContent && (
            <button
              onClick={toggleExpanded}
              className="mt-2 text-sm font-medium text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors inline-flex items-center gap-1"
            >
              {isExpanded ? 'Show less' : 'Read more'}
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Action Buttons - Pushed to bottom */}
        <div className="flex gap-3 mt-auto">
          {/* GitHub Button */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 hover:scale-105"
          >
            {/* GitHub Icon */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>

          {/* Live Demo Button - Only shown for webapp/game with liveLink */}
          {type === 'webapp/game' && liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 hover:scale-105 shadow-lg shadow-indigo-500/30"
            >
              {/* External Link Icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default ProjectCard;
