/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3563E9",
        secondary: "#54A6FF",
        accent: "#90A3BF",
        icon: "#596780",
      },
      keyframes: {
        pop: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
          "100%": { transform: "scale(1)" },
        },
        shrink: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.7)" },
          "100%": { transform: "scale(1)" },
        },
        moveBackground: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(20%, 20%)" },
        },
        // ✅ Yeni fade-in animasyonu burada
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        pop: "pop 0.3s ease-in-out",
        shrink: "shrink 0.3s ease-in-out",
        moveBackground: "moveBackground 8s linear infinite",
        // ✅ Yeni animation tanımı burada
        fadeIn: "fadeIn 0.6s ease-out forwards",
      },
      backgroundImage: {
        'moving-pattern': `radial-gradient(circle, #3498db 10%, transparent 20%),
                           radial-gradient(circle, transparent 10%, #3498db 20%)`,
        'linear-pattern': `repeating-linear-gradient(45deg, #0050fc, #0050fc 20px, #0684fade 20px, #0684fade 40px)`,
        'repeating-linear-pattern': `repeating-linear-gradient(45deg, #e5e5f7, #e5e5f7 10px, #444cf7 10px, #444cf7 20px)`,
      },
      backgroundSize: {
        'pattern-size': '30px 30px',
      },
    },
  },
  plugins: [],
};
