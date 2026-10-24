import type { Config } from 'tailwindcss';

export default {
  content: [
    './entrypoints/**/*.{html,ts,tsx}',
    './src/**/*.{html,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Semantic Functional Reef Accents
        lobster: {
          DEFAULT: '#E4048A',
          hover: '#C70378',
          subtle: 'rgba(228, 4, 138, 0.12)',
        },
        claw: {
          DEFAULT: '#06B6D4',
          hover: '#0891B2',
          subtle: 'rgba(6, 182, 212, 0.12)',
        },
        tactical: {
          amber: '#F59E0B',
          subtle: 'rgba(245, 158, 11, 0.12)',
        },
        reef: {
          emerald: '#10B981',
          subtle: 'rgba(16, 185, 129, 0.12)',
        },
        // CSS Variable-backed dynamic theme tokens
        carapace: {
          floor: 'var(--color-floor)',
          surface: 'var(--color-surface)',
          focus: 'var(--color-focus)',
          border: 'var(--color-border)',
          accent: 'var(--color-accent)',
        },
        // Static palettes for the 4 Reef Modernist themes
        palette: {
          abyssal: {
            floor: '#0A0D12',
            surface: '#121820',
            focus: '#161F2C',
            border: '#2A3644',
            accent: '#06B6D4',
          },
          trench: {
            floor: '#0D1117',
            surface: '#161B22',
            focus: '#21262D',
            border: '#30363D',
            accent: '#879298',
          },
          coral: {
            floor: '#0F141C',
            surface: '#171F28',
            focus: '#222D3B',
            border: '#384758',
            accent: '#E4048A',
          },
          biolum: {
            floor: '#08141E',
            surface: '#0F2231',
            focus: '#163044',
            border: '#1F415A',
            accent: '#03B5D3',
          },
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Hanken Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      borderRadius: {
        carapace: '12px',
        row: '8px',
        badge: '4px',
      },
      scale: {
        press: '0.97',
      },
      boxShadow: {
        none: 'none',
      },
    },
  },
  plugins: [],
} satisfies Config;
