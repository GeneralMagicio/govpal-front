/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0A1929',
        'secondary-bg': '#172554',
        'cards-bg': '#1E293B',
        'primary-accent': '#0077BE',
        'secondary-accent': '#8B5CF6',
        'highlights': '#2DD4BF',
        'alerts': '#F56565',
        'white': '#FFFFFF',
        'light-gray': '#CBD5E1',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(59, 130, 246, 0.3)',
        'glow-intense': '0 0 25px rgba(59, 130, 246, 0.5)',
        'glow-sm': '0 0 10px rgba(59, 130, 246, 0.2)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #172554 1px, transparent 1px), linear-gradient(to bottom, #172554 1px, transparent 1px)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

