/**
 * Projects Data File
 * 
 * This file contains all the project data for the portfolio.
 * To add a new project, simply add a new object to the array below.
 * 
 * Project Object Structure:
 * - id: unique identifier (number)
 * - title: project title (string)
 * - shortDescription: brief description for card display (string)
 * - fullDescription: detailed description for expanded view (string, optional - falls back to shortDescription)
 * - image: path to image in /public/images folder (string)
 * - type: either "project" or "webapp/game" (string)
 * - github: link to GitHub repository (string)
 * - liveLink: optional link to live demo (string, only for "webapp/game" type)
 */

const projects = [
  {
    id: 1,
    title: "Rock Paper Scissors",
    shortDescription: "A fun and interactive Rock-Paper-Scissors game where you can play against the computer.",
    fullDescription: "A fun and interactive Rock-Paper-Scissors game where you can play against the computer. Built with HTML, CSS, and JavaScript. Features include animated hand gestures, score tracking, and a responsive design that works seamlessly on both desktop and mobile devices.",
    image: "/images/rps.png",
    type: "webapp/game",
    github: "https://github.com/o-MrNobody-o/RockPaperScissors",
    liveLink: "https://o-mrnobody-o.github.io/RockPaperScissors/"
  },
  {
    id: 2,
    title: "InfraDocs Manager",
    shortDescription: "A full-stack web application that centralizes IT asset management and technical documentation.",
    fullDescription: "A full-stack web application that centralizes IT asset management, software tracking, and technical documentation. It features secure LDAP authentication, role-based access control, and a modern dashboard for efficient enterprise IT operations. Built with a robust backend API and a responsive frontend interface for seamless user experience across all devices.",
    image: "/images/infraDocs.png",
    type: "project",
    github: "https://github.com/o-MrNobody-o/Projet-Documentation-Prototype/tree/docs",
    liveLink: ""
  },
  {
    id: 3,
    title: "Cupcake Mobile App",
    shortDescription: "A mobile application for ordering, customizing, and reserving cupcakes with a smooth user experience.",
    fullDescription: "A mobile application designed for a fictional pastry shop called Cupcake. The app allows users to browse pastry products, customize cupcakes, place online orders, and manage reservations. It also includes client management and a structured backend following MVVM architecture with CRUD functionality. The project focuses on usability, clean design, and a seamless ordering experience tailored for mobile users.",
    image: "/images/cupcake.png",
    type: "project",
    github: "https://github.com/o-MrNobody-o/CupcakeV1/tree/lighting",
    liveLink: ""
  },
  {
    id: 4,
    title: "Hangman Game (React)",
    shortDescription: "A React-based Hangman game with bilingual support, riddles, and progress tracking.",
    fullDescription: "A front-end only Hangman game built with React. It features English and French languages, 3 levels of difficulty with progressively fewer hints, and words/phrases sourced from proverbs, riddles, or sentences. Users can track all solved riddles, which are stored in localStorage, and reset progress with a dedicated button. A small form collects the user's name and email at the start, and the game state is saved for continuity. The project emphasizes clean UI, modular components, and a fun, interactive gameplay experience.",
    image: "/images/hangman.png",
    type: "webapp/game",
    github: "https://github.com/o-MrNobody-o/Hangman",
    liveLink: "https://hangman-kappa-three.vercel.app/"
},
{
    id: 5,
    title: "Memory Matching Game (React)",
    shortDescription: "A React-based Memory Matching game with multiple themes, smooth animations, and responsive gameplay.",
    fullDescription: "A front-end only Memory Matching game built with React. Players flip cards to find all matching pairs. The game features multiple selectable themes, including countries, animals, and technology. Cards have smooth flip animations, a responsive grid layout, and a move counter with a timer. The game state can be restarted at any time. The project emphasizes clean UI, modular React components, and a fun, interactive gameplay experience suitable for all ages.",
    image: "/images/memory-game.png",
    type: "webapp/game",
    github: "https://github.com/o-MrNobody-o/Memory-Game",
    liveLink: "https://memory-game-puce-zeta.vercel.app/"
}
];

export default projects;
