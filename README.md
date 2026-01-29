# Portfolio App

A modern React portfolio application built with Tailwind CSS, featuring a clean and responsive design with dark mode support.

## Features

- 🎨 **Modern Design** - Clean and minimal UI with smooth animations
- 🌙 **Dark Mode** - Toggle between light and dark themes (persisted in localStorage)
- 📱 **Responsive** - Looks great on all devices
- 🚀 **Vercel Ready** - Optimized for Vercel deployment with automatic rebuilds
- 🔧 **Modular Code** - Well-organized and commented codebase

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding New Projects

To add a new project to your portfolio, edit the `src/data/projects.js` file:

```javascript
{
  id: 7, // Unique ID
  title: "Project Name",
  description: "Short description of your project",
  image: "/images/project-image.png", // Place image in public/images/
  type: "webapp/game", // or "project"
  github: "https://github.com/username/repo",
  liveLink: "https://project.vercel.app" // Optional, only for webapp/game
}
```

### Project Types

- **`project`** - Regular projects (shows only GitHub button)
- **`webapp/game`** - Web applications or games (shows GitHub + Live Demo buttons)

## Project Structure

```
portfolio/
├── public/
│   ├── images/         # Project images
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js       # Navigation & dark mode toggle
│   │   ├── Projects.js     # Projects grid with filtering
│   │   └── ProjectCard.js  # Individual project card
│   ├── data/
│   │   └── projects.js     # Projects data
│   ├── App.js              # Main app component
│   ├── index.js            # Entry point
│   └── index.css           # Tailwind CSS styles
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Deployment to Vercel

### Automatic Deployment

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically deploy on every push to the main branch

### Manual Deployment

```bash
npm run build
```

The build output will be in the `build/` folder, ready for deployment.

## Customization

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#6366f1', // Your primary color
    }
  }
}
```

### Adding Images

Place your project images in `/public/images/` and reference them in projects.js:

```javascript
image: "/images/your-project.png"
```

## Technologies Used

- [React](https://reactjs.org/) - UI Framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vercel](https://vercel.com/) - Deployment

## License

MIT License - feel free to use this template for your own portfolio!
