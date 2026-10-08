import React, { useState } from 'react';
import { categories } from '../data/projects';

/**
 * ProjectCard Component
 *
 * Every card has the same two actions:
 * - Demo: opens the hosted app ("live") or a YouTube walkthrough ("video")
 * - GitHub: opens the repository
 * The category tag is only a label.
 *
 * @param {object} project - Project data object
 */
const ProjectCard = ({ project }) => {
  const { title, shortDescription, fullDescription, image, category, github, demo } = project;
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const tag = categories[category] || { label: category, name: category, icon: 'fa-solid fa-tag', badge: 'bg-zinc-500/15 text-zinc-600 dark:text-zinc-300 ring-zinc-500/30' };

  const cardDescription = shortDescription || '';
  const hasExpandableContent = fullDescription && fullDescription !== cardDescription;
  const displayDescription = isExpanded ? fullDescription : cardDescription;

  const isVideo = demo?.type === 'video';
  const hasDemo = Boolean(demo?.url);

  // Spotlight that follows the cursor across the card
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <article
      onMouseMove={handleMouseMove}
      className="spotlight group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/70 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-indigo-400/30"
    >
      {/* Image */}
      <div className="relative m-2 mb-0 aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-fuchsia-500/20">
        {imageFailed ? (
          <div className="flex h-full w-full items-center justify-center text-4xl text-indigo-400/60">
            <i className={tag.icon}></i>
          </div>
        ) : (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            onError={() => setImageFailed(true)}
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Category tag */}
        <span className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 backdrop-blur-md bg-white/80 dark:bg-zinc-950/60 ${tag.badge}`}>
          <i className={`${tag.icon} text-[10px]`}></i>
          {tag.name}
        </span>
      </div>

      {/* Content */}
      <div className="relative flex flex-grow flex-col p-6">
        <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          {title}
        </h3>

        <div className="mb-6 mt-2 flex-grow">
          <p className={`text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 ${!isExpanded ? 'line-clamp-3' : ''}`}>
            {displayDescription}
          </p>

          {hasExpandableContent && (
            <button
              onClick={() => setIsExpanded(prev => !prev)}
              className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              {isExpanded ? 'Show less' : 'Read more'}
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}></i>
            </button>
          )}
        </div>

        {/* Actions */}
        <div className="mt-auto flex gap-3">
          {hasDemo ? (
            <a
              href={demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-[length:200%_100%] bg-left px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-500 hover:bg-right hover:shadow-indigo-500/40"
            >
              <i className={isVideo ? 'fa-brands fa-youtube' : 'fa-solid fa-arrow-up-right-from-square'}></i>
              {isVideo ? 'Watch Demo' : 'Live Demo'}
            </a>
          ) : (
            <span
              className="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-dashed border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-400 dark:border-white/15 dark:text-zinc-500"
              title="Demo video coming soon"
            >
              <i className="fa-regular fa-clock"></i>
              Demo soon
            </span>
          )}

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 transition-all duration-300 hover:border-zinc-300 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
          >
            <i className="fa-brands fa-github text-base"></i>
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
