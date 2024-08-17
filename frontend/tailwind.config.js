/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //! colori
      colors: {
        //usaato per titoli importanti, link di nav., bottoni, colore del logo,
        primary: "#ffde59",
        secondary: "#303030",
        //usato per colore di stile Focus e Hover e piccoli dettagli
        accent: "#00bcd4", // Colore d'accento
      },

      //! dimensioni
      spacing: {},
      fontSize: {},
    },

    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
      serif: ["Georgia", "Cambria", "serif"],
    },

    screens: {
      xs: "475px", // Per telefoni molto piccoli
      sm: "640px", // Per telefoni più grandi e piccoli tablet
      md: "768px", // Per tablet e dispositivi a schermo medio
      lg: "1024px", // Per laptop e dispositivi a schermo grande
      xl: "1280px", // Per desktop e schermi extra-large
      "2xl": "1536px", // Per schermi molto grandi e monitor ultra-wide
    },
  },
  plugins: [],
};
