/**
 * Projects Data File
 *
 * Every entry is a project. The `category` tag only groups them on the page
 * (filter tabs + badge) — it no longer changes how a card behaves.
 *
 * Project Object Structure:
 * - id: unique identifier (number)
 * - title: project title (string)
 * - category: key from `categories` below, e.g. "project", "game", "extra" (string)
 * - shortDescription: brief description for card display (string)
 * - fullDescription: detailed description for expanded view (string, optional)
 * - image: path to image in /public/images folder (string)
 * - github: link to GitHub repository (string)
 * - demo: { type: "live" | "video", url: string }
 *     "live"  → the project is hosted, the button opens it
 *     "video" → not hosted, the button opens a YouTube walkthrough
 *     empty url → button shows as "Demo soon"
 */

/**
 * Category tags. To add a new kind of entry later, add a key here and use it
 * as a project's `category`. Tabs only appear for categories that have projects.
 */
export const categories = {
  project: {
    label: 'Projects',
    name: 'Project',
    icon: 'fa-solid fa-code',
    badge: 'bg-sky-500/15 text-sky-600 dark:text-sky-300 ring-sky-500/30',
  },
  game: {
    label: 'Games',
    name: 'Game',
    icon: 'fa-solid fa-gamepad',
    badge: 'bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-300 ring-fuchsia-500/30',
  },
  extra: {
    label: 'Extras',
    name: 'Extra',
    icon: 'fa-solid fa-flask',
    badge: 'bg-amber-500/15 text-amber-600 dark:text-amber-300 ring-amber-500/30',
  },
};

const projects = [
  {
    id: 6,
    title: "Gym Progress Tracker",
    category: "project",
    shortDescription: "A full-stack fitness tracker with workout logging, nutrition, and a coach/client relationship secured by Postgres row-level security.",
    fullDescription: "A full-stack fitness application built with Next.js 15, TypeScript, Supabase (Postgres, Auth, Realtime) and Drizzle ORM. Users log workouts set by set, track calories against Mifflin-St Jeor targets using dual-source food search (USDA FoodData Central and Open Food Facts), and monitor sleep, water and body weight. Progress analytics compute estimated 1RM and weekly training volume entirely in SQL. The distinguishing feature is a coach/client relationship: coaches invite clients through an enumeration-safe lookup, view their analytics, build and assign workout programs, and message them in real time. Authorization uses a two-layer model — Server Action ownership checks on the ORM path and Postgres row-level security guarding the public API path — verified by 105 integration tests that attempt to break the permission model. Also includes an admin role with a configurable coach approval workflow, a PWA install surface, and a persistent rest timer that survives backgrounding.",
    image: "/images/GymTracker.png",
    github: "https://github.com/o-MrNobody-o/Gym-APP",
    demo: { type: "live", url: "https://gymtrack.achref.org" }
  },
  {
    id: 2,
    title: "InfraDocs Manager",
    category: "project",
    shortDescription: "A full-stack web application that centralizes IT asset management and technical documentation.",
    fullDescription: "A full-stack web application that centralizes IT asset management, software tracking, and technical documentation. It features secure LDAP authentication, role-based access control, and a modern dashboard for efficient enterprise IT operations. Built with a robust backend API and a responsive frontend interface for seamless user experience across all devices.",
    image: "/images/infraDocs.png",
    github: "https://github.com/o-MrNobody-o/Projet-Documentation-Prototype/tree/docs",
    demo: { type: "video", url: "" }
  },
  {
    id: 3,
    title: "Cupcake Mobile App",
    category: "project",
    shortDescription: "A mobile application for ordering, customizing, and reserving cupcakes with a smooth user experience.",
    fullDescription: "A mobile application designed for a fictional pastry shop called Cupcake. The app allows users to browse pastry products, customize cupcakes, place online orders, and manage reservations. It also includes client management and a structured backend following MVVM architecture with CRUD functionality. The project focuses on usability, clean design, and a seamless ordering experience tailored for mobile users.",
    image: "/images/cupcake.png",
    github: "https://github.com/o-MrNobody-o/CupcakeV1/tree/lighting",
    demo: { type: "video", url: "" }
  },
  {
    id: 5,
    title: "Memory Matching Game",
    category: "game",
    shortDescription: "A React-based Memory Matching game with multiple themes, smooth animations, and responsive gameplay.",
    fullDescription: "A front-end only Memory Matching game built with React. Players flip cards to find all matching pairs. The game features multiple selectable themes, including countries, animals, and technology. Cards have smooth flip animations, a responsive grid layout, and a move counter with a timer. The game state can be restarted at any time. The project emphasizes clean UI, modular React components, and a fun, interactive gameplay experience suitable for all ages.",
    image: "/images/MemoryGame.png",
    github: "https://github.com/o-MrNobody-o/Memory-Game",
    demo: { type: "live", url: "https://memory-game-puce-zeta.vercel.app/" }
  },
  {
    id: 4,
    title: "Hangman Game",
    category: "game",
    shortDescription: "A React-based Hangman game with bilingual support, riddles, and progress tracking.",
    fullDescription: "A front-end only Hangman game built with React. It features English and French languages, 3 levels of difficulty with progressively fewer hints, and words/phrases sourced from proverbs, riddles, or sentences. Users can track all solved riddles, which are stored in localStorage, and reset progress with a dedicated button. A small form collects the user's name and email at the start, and the game state is saved for continuity. The project emphasizes clean UI, modular components, and a fun, interactive gameplay experience.",
    image: "/images/hangman.png",
    github: "https://github.com/o-MrNobody-o/Hangman",
    demo: { type: "live", url: "https://hangman-kappa-three.vercel.app/" }
  },
  {
    id: 1,
    title: "Rock Paper Scissors",
    category: "game",
    shortDescription: "A fun and interactive Rock-Paper-Scissors game where you can play against the computer.",
    fullDescription: "A fun and interactive Rock-Paper-Scissors game where you can play against the computer. Built with HTML, CSS, and JavaScript. Features include animated hand gestures, score tracking, and a responsive design that works seamlessly on both desktop and mobile devices.",
    image: "/images/rps.png",
    github: "https://github.com/o-MrNobody-o/RockPaperScissors",
    demo: { type: "live", url: "https://o-mrnobody-o.github.io/RockPaperScissors/" }
  }
];

export default projects;
