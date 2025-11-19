import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  safelist: [
    'bg-cyan-100',
    'bg-orange-100',
    'bg-purple-100',
    'bg-red-100',
    'bg-teal-100',
    'bg-violet-100',
    'text-cyan-500',
    'text-orange-500',
    'text-purple-500',
    'text-red-500',
    'text-teal-500',
    'text-violet-500',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Brand Colors (del logo)
        brand: {
          navy: {
            DEFAULT: '#2B3E5C',
            light: '#3A5070',
            dark: '#1F2E44',
          },
          orange: {
            DEFAULT: '#F47D3B',
            light: '#F69558',
            dark: '#E06829',
          },
          turquoise: {
            DEFAULT: '#4DD0E1',
            light: '#6DD9E7',
            dark: '#3AB8C8',
          },
          purple: {
            DEFAULT: '#7E57C2',
            light: '#9575CD',
            dark: '#6741A8',
          },
          coral: {
            DEFAULT: '#E74C3C',
            light: '#EC6A5E',
            dark: '#D43725',
          },
          gray: {
            DEFAULT: '#B8B8B8',
            light: '#D4D4D4',
            dark: '#9CA3AF',
          },
        },
        // Colores pasteles para iconos del mega menú
        cyan: {
          100: '#E0F7FA',
          500: '#00BCD4',
        },
        orange: {
          100: '#FFE0B2',
          500: '#FF9800',
        },
        purple: {
          100: '#E1BEE7',
          500: '#9C27B0',
        },
        red: {
          100: '#FFCDD2',
          500: '#F44336',
        },
        teal: {
          100: '#B2DFDB',
          500: '#009688',
        },
        violet: {
          100: '#D1C4E9',
          500: '#673AB7',
        },
        // Semantic Colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#F47D3B',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#4DD0E1',
          foreground: '#2B3E5C',
        },
        accent: {
          DEFAULT: '#7E57C2',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Mobile-first responsive
        'h1-mobile': ['2rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        'h1-desktop': ['4.5rem', { lineHeight: '5rem', fontWeight: '700' }],
        'h2-mobile': ['1.75rem', { lineHeight: '2.25rem', fontWeight: '600' }],
        'h2-desktop': ['3rem', { lineHeight: '3.5rem', fontWeight: '600' }],
        'h3-mobile': ['1.375rem', { lineHeight: '2rem', fontWeight: '600' }],
        'h3-desktop': ['2rem', { lineHeight: '2.5rem', fontWeight: '600' }],
      },
      spacing: {
        'section': '4rem',     // 64px
        'section-lg': '6rem',  // 96px
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        'card': '0.75rem',     // 12px
        'button': '0.5rem',    // 8px
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 24px rgba(0, 0, 0, 0.15)',
        'glow-orange': '0 8px 16px rgba(244, 125, 59, 0.3)',
        'glow-turquoise': '0 8px 16px rgba(77, 208, 225, 0.3)',
        'mega-menu': '0 20px 60px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}

export default config


