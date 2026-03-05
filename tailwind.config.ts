import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-cyan-100', 'bg-orange-100', 'bg-purple-100', 'bg-red-100', 'bg-teal-100',
    'bg-violet-100', 'bg-blue-100', 'bg-green-100', 'bg-slate-100', 'bg-sky-100',
    'bg-amber-100', 'bg-rose-100', 'bg-fuchsia-100',
    'text-cyan-500', 'text-cyan-600', 'text-orange-500', 'text-orange-600',
    'text-purple-500', 'text-purple-600', 'text-violet-500', 'text-violet-600',
    'hover:border-brand-coral', 'hover:border-brand-orange', 'hover:border-brand-purple',
    'hover:border-brand-turquoise', 'hover:border-brand-violet', 'hover:border-brand-teal',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      // ── COLORES CORPORATIVOS FORJACONSULTING (oficial) ───
      colors: {
        brand: {
          'blue-deep': '#1D1A70',
          'blue-anchor': '#27325A',
          'blue-corp': '#33487A',
          'blue-dark-bg': '#152E57',
          violet: {
            DEFAULT: '#8560C0',
            light: '#9B7DD4',
            subtle: 'rgba(133, 96, 192, 0.08)',
          },
          orange: {
            DEFAULT: '#EE8028',
            dark: '#AA2F0C',
            warm: '#EC8E48',
            subtle: 'rgba(238, 128, 40, 0.08)',
          },
          teal: {
            DEFAULT: '#4CCED5',
            mid: '#73CFCE',
            subtle: 'rgba(76, 206, 213, 0.08)',
          },
          // Compatibilidad con código existente (alias)
          navy: {
            DEFAULT: '#27325A',
            light: '#33487A',
            dark: '#152E57',
          },
          purple: {
            DEFAULT: '#8560C0',
            light: '#9B7DD4',
            dark: '#6741A8',
          },
          turquoise: {
            DEFAULT: '#4CCED5',
            light: '#73CFCE',
            dark: '#3AB8C8',
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
        surface: {
          darkest: '#0D0F1A',
          deep: '#1D1A70',
          dark: '#27325A',
          mid: '#33487A',
          'dark-bg': '#152E57',
          white: '#FFFFFF',
          off: '#F8FAFC',
          subtle: '#F1F5F9',
          light: '#EEF2FF',
        },
        content: {
          primary: '#0F172A',
          secondary: '#334155',
          muted: '#64748B',
          subtle: '#94A3B8',
          'on-dark': '#FFFFFF',
          'on-dark-muted': '#94A3B8',
        },
        /* Alias para clases existentes forja-* (sin cambiar contenido) */
        forja: {
          navy: '#27325A',
          fire: '#EE8028',
          teal: '#4CCED5',
          purple: '#8560C0',
        },
        // Shadcn/ui (HSL vars)
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
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
        // Paletas de iconos (megamenu, etc.)
        cyan: { 100: '#E0F7FA', 500: '#00BCD4' },
        orange: { 100: '#FFE0B2', 500: '#FF9800' },
        purple: { 100: '#E1BEE7', 500: '#9C27B0' },
        red: { 100: '#FFCDD2', 500: '#F44336' },
        teal: { 100: '#B2DFDB', 500: '#009688' },
        violet: { 100: '#D1C4E9', 500: '#673AB7' },
        slate: {
          50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1',
          400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155',
          800: '#1e293b', 900: '#0f172a',
        },
      },

      // ── TIPOGRAFÍA CORPORATIVA ───────────────────────────
      fontFamily: {
        display: ['var(--font-display)', 'DM Sans', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
        sans: ['var(--font-body)', 'Inter', 'sans-serif'],
        heading: ['var(--font-heading)', 'var(--font-display)', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'display-xs': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.005em' }],
        'body-xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '0' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65', letterSpacing: '0' }],
        'body-base': ['1rem', { lineHeight: '1.75', letterSpacing: '0' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'body-xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        eyebrow: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.15em' }],
        'h1-mobile': ['2rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        'h1-desktop': ['4.5rem', { lineHeight: '5rem', fontWeight: '700' }],
        'h2-mobile': ['1.75rem', { lineHeight: '2.25rem', fontWeight: '600' }],
        'h2-desktop': ['3rem', { lineHeight: '3.5rem', fontWeight: '600' }],
        'h3-mobile': ['1.375rem', { lineHeight: '2rem', fontWeight: '600' }],
        'h3-desktop': ['2rem', { lineHeight: '2.5rem', fontWeight: '600' }],
      },

      // ── GRADIENTES CORPORATIVOS OFICIALES ─────────────────
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #1D1A70 0%, #152E57 100%)',
        'gradient-hero-vertical': 'linear-gradient(180deg, #1D1A70 0%, #152E57 100%)',
        'gradient-signature': 'linear-gradient(135deg, #8560C0 0%, #73CFCE 100%)',
        'gradient-signature-h': 'linear-gradient(90deg, #8560C0 0%, #73CFCE 100%)',
        'gradient-energy': 'linear-gradient(135deg, #AA2F0C 0%, #EC8E48 100%)',
        'gradient-energy-h': 'linear-gradient(90deg, #AA2F0C 0%, #EC8E48 100%)',
        'gradient-blue': 'linear-gradient(135deg, #27325A 0%, #1D1A70 100%)',
        'gradient-orange-flat': 'linear-gradient(135deg, #EE8028 0%, #AA2F0C 100%)',
        'gradient-teal': 'linear-gradient(135deg, #4CCED5 0%, #73CFCE 100%)',
        'overlay-hero': 'linear-gradient(to right, rgba(29,26,112,0.92) 0%, rgba(21,46,87,0.75) 100%)',
        'overlay-dark': 'linear-gradient(to bottom, rgba(13,15,26,0) 0%, rgba(13,15,26,0.9) 100%)',
      },

      // ── SOMBRAS ───────────────────────────────────────────
      boxShadow: {
        card: '0 4px 24px -4px rgba(15,23,42,0.08)',
        'card-hover': '0 12px 40px -8px rgba(15,23,42,0.15)',
        'glow-orange': '0 0 24px rgba(238,128,40,0.35)',
        'glow-violet': '0 0 24px rgba(133,96,192,0.35)',
        'glow-teal': '0 0 24px rgba(76,206,213,0.35)',
        'brand-cta': '0 8px 24px -4px rgba(238,128,40,0.4)',
        'brand-violet': '0 8px 24px -4px rgba(133,96,192,0.4)',
        'mega-menu': '0 20px 60px rgba(0,0,0,0.12)',
        'glow-turquoise': '0 8px 16px rgba(76,206,213,0.3)',
      },

      // ── BORDES Y RADIOS ───────────────────────────────────
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: '1rem',
        '2xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        card: '0.75rem',
        button: '0.5rem',
      },

      // ── TRANSICIONES ─────────────────────────────────────
      transitionDuration: { '250': '250ms', '350': '350ms', '400': '400ms' },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-sm': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      spacing: { section: '4rem', 'section-lg': '6rem' },

      // Animaciones existentes (preservadas)
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        float: 'float 3s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        scaleIn: { '0%': { opacity: '0', transform: 'scale(0.9)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        slideInRight: { '0%': { opacity: '0', transform: 'translateX(50px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}

export default config
