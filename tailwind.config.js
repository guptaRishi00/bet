/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['dark'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        blink: 'blink 1.5s infinite',
        'spin-slow': 'spin 13s linear infinite',
      },
      backgroundColor: {
        'custom-glow': 'rgba(87, 87, 130, 0.55)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        'color-video-card-border': 'var(--color-video-card-border)',
        'color-bg-font-family': 'var(--color-bg-font-family)',
        'color-bg-history-filter-icon': 'var(--color-bg-history-filter-icon)',
        'color-bg-history-search-bar-placeholder': 'var(--color-bg-history-search-bar-placeholder)',
        'color-bg-history-search-bar': 'var(--color-bg-history-search-bar)',
        'color-bg-history-counter': 'var(--color-bg-history-counter)',
        'color-from-left-most-panel-icon': 'var(--color-from-left-most-panel-icon)',
        'color-via-left-most-panel-icon': 'var(--color-via-left-most-panel-icon)',
        'color-to-left-most-panel-icon': 'var(--color-to-left-most-panel-icon)',
        'color-bg-left-most-panel-icon': 'var(--color-bg-left-most-panel-icon)',
        'background-left-most-panel': 'var(--background-left-most-panel)',
        background: '#09090b;',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        chart: {
          1: 'var(--chart-1)',
          2: 'var(--chart-2)',
          3: 'var(--chart-3)',
          4: 'var(--chart-4)',
          5: 'var(--chart-5)',
        },
      },
      boxShadow: {
        'box-shadow-left-most-panel': 'var(--box-shadow-left-most-panel)',
      },
      backgroundImage: {
        'gradient-left-most-panel-active-icon': 'var(--gradient-left-most-panel-active-icon)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        jersey: ['Jersey 10', 'ui-sans-serif', 'system-ui'],
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui'],
        roboto_flex: ['Roboto Flex', 'ui-sans-serif', 'system-ui'],
        bebas: ['Bebas Neue', 'cursive'],
        lexend: ['Lexend', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
