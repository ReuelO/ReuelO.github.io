/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Use 'media' for OS-level dark mode
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light Theme Colors
        light: {
          background: "#ffffff", // Default background
          surface: "#f8f9fa", // Cards, panels
          accent: "#0d6efd", // Primary accents
          accentHover: "#0b5ed7", // Hover state for accent
          border: "#dee2e6", // Borders
          text: "#212529", // Primary text
          textSecondary: "#6c757d", // Secondary text
          link: "#0d6efd", // Links
          linkHover: "#0b5ed7", // Hover state for links
          success: "#198754", // Success alerts/buttons
          danger: "#dc3545", // Error alerts/buttons
          warning: "#ffc107", // Warning alerts/buttons
          info: "#0dcaf0", // Info alerts/buttons
        },
        // Dark Theme Colors
        dark: {
          background: "#212529", // Default background
          surface: "#343a40", // Cards, panels
          accent: "#6610f2", // Primary accents
          accentHover: "#520dc2", // Hover state for accent
          border: "#495057", // Borders
          text: "#f8f9fa", // Primary text
          textSecondary: "#adb5bd", // Secondary text
          link: "#6610f2", // Links
          linkHover: "#520dc2", // Hover state for links
          success: "#198754", // Success alerts/buttons
          danger: "#dc3545", // Error alerts/buttons
          warning: "#ffc107", // Warning alerts/buttons
          info: "#0dcaf0", // Info alerts/buttons
        },
      },
    },
  },
  plugins: [],
};
