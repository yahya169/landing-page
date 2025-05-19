/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode using a class
  theme: {
    extend: {
      colors: {
        navy: '#0A0E33',
        'almost-black': '#05071A', // For dark mode body
        'gradient-start': '#FF007A',
        'gradient-mid': '#C800B1', // Added for a smoother 3-stop gradient
        'gradient-end': '#00EAFF',
        'light-gray': '#D1D5DB', // For subheadings and footer text
        'medium-gray': '#9CA3AF', // For footer links
      },
      backgroundImage: theme => ({
        'custom-gradient': `linear-gradient(to right, ${theme('colors.gradient-start')}, ${theme('colors.gradient-mid')}, ${theme('colors.gradient-end')})`,
      }),
      boxShadow: {
        'gradient-glow': '0 0 15px 0px rgba(255, 0, 122, 0.6), 0 0 15px 0px rgba(0, 234, 255, 0.6)', // Subtle glow for buttons
      },
      animation: {
        'gradient-underline': 'gradientUnderline 0.3s ease-out forwards',
      },
      keyframes: {
        gradientUnderline: {
          '0%': { backgroundSize: '0% 2px' },
          '100%': { backgroundSize: '100% 2px' },
        },
      },
    },
  },
  plugins: [],
}
