/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brunswick-green': '#335145', // Primary
        'asparagus': '#7fb069', // Primary light variation
        'persian-orange': '#cd9071', // Secondary
        'cool-gray': '#767699', // neutral
        'baby-powder': '#fffffc', // Background & neutral
        'black': '#000000', // Default text color
        primary: {
          DEFAULT: '#335145', // Brunswick Green
          light: '#4a6e57', // Light Brunswick Green
          dark: '#233a30', // Dark Brunswick Green
        },
        secondary: {
          DEFAULT: '#cd9071', // Persian Orange
          light: '#dba98a', // Light Persian Orange
          dark: '#ac745b', // Dark Persian Orange
        },
        background: {
          DEFAULT: '#fffffc', // Baby Powder
        },
        text: {
          primary: '#000000', // Black
          secondary: '#767699', // Cool Gray
          disabled: '#a8a8a8', // Light Gray (disabled text)
        },
        error: {
          DEFAULT: '#d32f2f', // Error Red
          light: '#ef5350', // Light Error Red
          dark: '#c62828', // Dark Error Red
        },
        warning: {
          DEFAULT: '#ffa000', // Warning Orange
          light: '#ffca28', // Light Warning Orange
          dark: '#ff8f00', // Dark Warning Orange
        },
        info: {
          DEFAULT: '#1976d2', // Info Blue
          light: '#64b5f6', // Light Info Blue
          dark: '#1565c0', // Dark Info Blue
        },
        success: {
          DEFAULT: '#388e3c', // Success Green
          light: '#81c784', // Light Success Green
          dark: '#2e7d32', // Dark Success Green
        },
      },
    },
  },
  plugins: [],
};