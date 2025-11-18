# Velocity AI Landing Page

A modern React + TypeScript landing page built with Vite, Tailwind CSS, and Radix UI components.

> **Note**: This project was converted from Next.js to React.js using Vite for improved development experience and build performance.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Recharts** - Data visualization
- **React Hook Form** - Form handling

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install --legacy-peer-deps
```

The `--legacy-peer-deps` flag is required due to some peer dependency conflicts in the project dependencies.

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page will hot-reload as you edit files.

### Build for Production

```bash
npm run build
```

Outputs to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── ...             # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── visual-edits/       # Visual editing support
├── App.tsx             # Root component
├── main.tsx            # Entry point
└── globals.css         # Global styles
```

## Key Changes from Next.js to React

1. **Removed Next.js dependencies** - Replaced with React + Vite
2. **Updated configuration** - `vite.config.ts` replaces `next.config.ts`
3. **Restructured entry point** - `index.html` + `src/main.tsx` instead of app router
4. **Updated TypeScript config** - Changed JSX from "preserve" to "react-jsx"
5. **Modified build scripts** - Using Vite commands instead of Next.js
6. **Script loading** - External scripts now loaded via `useEffect` in `App.tsx`

## Features

- ✨ Fast development with Vite HMR
- 🎨 Beautiful UI with Tailwind CSS
- ♿ Accessible components with Radix UI
- 🔤 TypeScript support
- 📱 Responsive design
- 🎬 Smooth animations with Framer Motion
- 📊 Data visualization with Recharts

## Linting

```bash
npm run lint
```

## License

This project is open source and available under the MIT License.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
