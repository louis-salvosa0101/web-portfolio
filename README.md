# Web Portfolio

A modern, responsive web portfolio built with React and Vite, featuring smooth animations and a clean design.

## 🚀 Tech Stack

### Frontend Framework
- **React 19.2.0** - Latest React with modern hooks and concurrent features
- **Vite 7.2.4** - Fast build tool and development server with HMR

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework for rapid UI development
- **PostCSS** - CSS processing tool with Autoprefixer for cross-browser compatibility
- **Framer Motion 12.29.2** - Production-ready motion library for React animations
- **Lucide React** - Beautiful & consistent icon library

### Development Tools
- **ESLint** - JavaScript linting with React-specific rules
- **Vite Plugin React** - Official React plugin for Vite with Fast Refresh

### Additional Libraries
- **clsx** - Utility for constructing conditional className strings
- **tailwind-merge** - Utility for merging Tailwind CSS classes
- **PropTypes** - Runtime type checking for React props

## ✨ Features

- **Responsive Design** - Optimized for all device sizes
- **Smooth Animations** - Powered by Framer Motion
- **Modern UI** - Clean, professional design with Tailwind CSS
- **Fast Performance** - Built with Vite for optimal loading speeds
- **Component-Based Architecture** - Modular React components
- **SEO-Friendly** - Static site generation ready

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Landing section with introduction
│   ├── Projects.jsx      # Portfolio projects showcase
│   ├── Skills.jsx        # Technical skills display
│   ├── Contact.jsx       # Contact information and form
│   ├── Footer.jsx        # Site footer
│   ├── Navbar.jsx        # Navigation component
│   └── Layout.jsx        # Main layout wrapper
├── assets/               # Static assets (images, icons)
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd web-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🌐 Deployment

This is a static site that can be deployed to various platforms:

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to GitHub Pages

### Netlify/Vercel
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Other Static Hosts
- Firebase Hosting
- AWS S3 + CloudFront
- Any static file server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React, Vite, and Tailwind CSS
