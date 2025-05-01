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
        // --- Original Names Mapped to New Arbitrum-Inspired Values ---

        // Backgrounds (Dark Neutrals)
        'primary-bg': '#121212',      // Was dark blue, now very dark gray
        'secondary-bg': '#1E1E1E',    // Was lighter dark blue, now slightly lighter dark gray
        'cards-bg': '#2A2A2A',      // Was blue-gray, now card/surface dark gray

        // Accents (Arbitrum Brand Colors)
        'primary-accent': '#28A0F0',  // Was medium blue, now Arbitrum vibrant blue
        'secondary-accent': '#F05C28',// Was purple, now Arbitrum red-orange/coral

        // Supporting & Text Colors
        'highlights': '#EAEAEA',     // Was teal, now high-contrast off-white (good for primary text)
        'alerts': '#F87171',         // Was bright red, now a suitable error red
        'white': '#FFFFFF',         // Kept as pure white
        'light-gray': '#A0AEC0',     // Was light blue-gray, now lighter gray (good for secondary text)

        // --- Additional Useful Colors (Optional, but recommended) ---
        'arb-border': '#444444',      // Neutral border color for this dark theme
        'arb-success': '#34D399',     // A suitable green for success states
        'arb-warning': '#FBBF24',     // A suitable yellow/orange for warnings
      },
      boxShadow: {
        // Updated Glows/Shadows to use new accent color values
        // Note: Naming these after the original keys might be less intuitive now
        'glow': `0 0 12px theme('colors.primary-accent / 0.5')`,  // Glow using the new primary-accent (Arb Blue)
        'glow-intense': `0 0 20px theme('colors.primary-accent / 0.6')`, // Intense glow using Arb Blue
        'glow-sm': `0 0 8px theme('colors.primary-accent / 0.4')`, // Smaller glow using Arb Blue

        // Alternate glows using the secondary accent
        'glow-secondary': `0 0 12px theme('colors.secondary-accent / 0.5')`, // Glow using the new secondary-accent (Arb Red-Orange)

        // Standard Shadows
        'card-hover': '0 4px 15px rgba(0, 0, 0, 0.2)',      // Standard elevation on hover
        'focus-ring-primary': `0 0 0 3px theme('colors.primary-accent / 0.4')`, // Focus ring using Arb Blue
        'focus-ring-secondary': `0 0 0 3px theme('colors.secondary-accent / 0.4')`,// Focus ring using Arb Red-Orange
      },
      backgroundImage: {
        // Updated Patterns/Gradients
        'grid-pattern': `radial-gradient(theme('colors.arb-border / 0.3') 1px, transparent 1px)`, // Changed to subtle dots using arb-border
        // Example Gradient using new Accent colors - apply selectively
        'arbitrum-gradient': `linear-gradient(90deg, theme('colors.primary-accent'), theme('colors.secondary-accent'))`,
      },
      backgroundSize: {
        'dots-size': '5px 5px', // Define size for the new dot pattern
      },
      animation: {
        // Keeping useful animations, adding others
        'fadeIn': 'fadeIn 0.3s ease-in-out forwards',
        // Removed 'float', added others
        'pulse-subtle': 'pulseSubtle 2.5s ease-in-out infinite',
        'slideInUp': 'slideInUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.03)', opacity: '0.85' },
        },
        slideInUp: {
            '0%': { transform: 'translateY(30px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        // Float keyframe removed as animation was removed
      },
      // Optional: Define specific font families if Arbitrum uses unique ones
      // fontFamily: {
      //   sans: ['Inter', 'sans-serif'], // Example using Inter
      // },
    },
  },
  plugins: [],
}