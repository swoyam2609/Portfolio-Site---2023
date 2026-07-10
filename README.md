# Swoyam's Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features a sleek design with interactive components, multiple portfolio sections, and theme support.

## Overview

This is a static portfolio site showcasing work experience, projects, skills, education, writing, and testimonials. The site is built with modern web technologies and includes:

- **Hero Section** with animated waveform visualization
- **Projects Showcase** highlighting key work
- **Experience Timeline** detailing career progression
- **Skills & Expertise** display
- **Education** information
- **Writing** section for articles/blog posts
- **Testimonials** from colleagues and collaborators
- **Dark/Light Theme Toggle** for user preference
- **Responsive Design** that works on all devices

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.2.10
- **UI Library**: [React](https://react.dev/) 19.2.7
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4.3.2
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5.9.3
- **Deployment**: Static export (no server needed)

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Portfolio-Site---2023

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The site will be available at `http://localhost:3000`. The development server supports hot module reloading for instant updates.

### Build

```bash
# Create a production build
npm run build

# Start the production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page
├── components/
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx        # Hero section with waveform
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Experience.tsx  # Career timeline
│   │   ├── Skills.tsx      # Skills display
│   │   ├── Education.tsx   # Education info
│   │   ├── Writing.tsx     # Articles/posts
│   │   ├── Testimonials.tsx # Social proof
│   │   ├── Contact.tsx     # Contact section
│   │   ├── Nav.tsx         # Navigation bar
│   │   └── Footer.tsx      # Footer
│   ├── HeroWaveform.tsx    # Animated waveform component
│   ├── ThemeToggle.tsx     # Dark/light theme switcher
│   ├── common.tsx          # Shared UI components
│   └── ui.tsx              # UI utilities
├── lib/
│   ├── hooks.ts            # Custom React hooks
│   └── utils.ts            # Utility functions
└── data/
    └── portfolio.ts        # Portfolio content data

public/                      # Static assets
```

## Features

### Interactive Components

- **Waveform Animation**: Dynamic visual element in the hero section
- **Theme Toggle**: Switch between dark and light modes with persistent user preference
- **Responsive Navigation**: Mobile-friendly navigation with smooth scrolling
- **Type-safe**: Full TypeScript support for better developer experience

### Content Sections

All portfolio content is centralized in `src/data/portfolio.ts`, making it easy to update without modifying components.

## Customization

### Update Portfolio Content

Edit `src/data/portfolio.ts` to update:
- Project information
- Experience timeline
- Skills list
- Education details
- Writing/articles
- Testimonials
- Contact information

### Styling

The site uses Tailwind CSS with a custom configuration. Modify `tailwind.config.ts` to customize:
- Color scheme
- Typography
- Spacing
- Breakpoints

### Components

Custom UI components are located in:
- `src/components/common.tsx` - Reusable UI elements
- `src/components/ui.tsx` - Utility components

## Deployment

Since this is a static site (built with `output: "export"`), it can be deployed to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect GitHub repo for automatic deployments
- **GitHub Pages**: Push to a `gh-pages` branch
- **AWS S3**: Upload the `out/` directory after build
- **Any web server**: Serve the `out/` directory

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Serve production build locally
- `npm run lint` - Run ESLint

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Private project

## Contact

For inquiries, visit the contact section on the site or reach out directly.
