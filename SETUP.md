# Bettingator Setup Guide

## Prerequisites

- Node.js v20.x or higher (recommended: v20.11.0)
- npm v9.x or higher

## Quick Start

### For all platforms (Windows, macOS, Linux):

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bettinggator-main
   ```

2. **Run the setup script**
   ```bash
   npm run setup
   ```
   This will clean any existing installations and install fresh dependencies.

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at http://localhost:3000

## Troubleshooting

### Windows-specific Issues

If you encounter the rollup error on Windows:
```
Error: Cannot find module @rollup/rollup-win32-x64-msvc
```

Try these solutions:

1. **Use the setup script**
   ```bash
   npm run setup
   ```

2. **Manual clean install**
   ```powershell
   Remove-Item -Recurse -Force node_modules
   Remove-Item -Force package-lock.json
   npm cache clean --force
   npm install
   ```

3. **Use pnpm instead**
   ```bash
   npm install -g pnpm
   pnpm install
   pnpm run dev
   ```

### Linux/macOS Issues

If you have permission issues:
```bash
sudo npm install -g npm@latest
npm run setup
```

### All Platforms

If dependencies fail to install:
```bash
npm install --legacy-peer-deps
```

## Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run setup` - Clean install dependencies
- `npm run clean` - Same as setup

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── base/          # Core UI primitives
│   ├── buttons/       # Button components
│   ├── cards/         # Card components
│   ├── features/      # Feature-specific components
│   ├── inputs/        # Form inputs
│   ├── layout/        # Layout components
│   └── navigation/    # Navigation components
├── pages/             # Page components
├── assets/            # Images and static files
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── config/            # Configuration files
├── constants/         # Constants and enums
└── types/             # TypeScript types
```

## Development Tips

1. The project uses Vite for fast development
2. Hot Module Replacement (HMR) is enabled
3. TypeScript is configured for type safety
4. TailwindCSS for styling
5. ESLint for code quality

## Building for Production

```bash
npm run build
npm run preview  # To test the production build
```

The production build will be in the `dist` folder.