/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],  
  theme: {
    extend: {
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-vertical": "marquee-vertical 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-vertical": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },

      fontFamily: {
        anton: ["Anton", "sans-serif"],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        'scroll': 'scroll 20s linear infinite'
      }
    },
  },
  plugins: [],
};
