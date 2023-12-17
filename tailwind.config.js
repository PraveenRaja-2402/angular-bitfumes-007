module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
  // Debug configuration
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
    mode: 'all', // Include all classes for debugging
    safelist: ['...'], // Optionally, safelist some classes
  },
};
