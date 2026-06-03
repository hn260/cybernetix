/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#050816",
          dark: "#03050c",
          gray: "#0d122b",
          light: "#1b234b",
          cyan: "#00f3ff",
          purple: "#bd00ff",
          emerald: "#00ff87",
          pink: "#f72585",
        }
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
        mono: ["'Share Tech Mono'", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "glitch-1": "glitch-anim-1 2.5s infinite linear alternate-reverse",
        "glitch-2": "glitch-anim-2 3s infinite linear alternate-reverse",
        "scanline": "scanline-anim 6s linear infinite",
        "glow-pulse": "glow-pulse-anim 2s infinite ease-in-out",
        "grid-drift": "grid-drift-anim 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glitch-anim-1": {
          "0%": { clipPath: "inset(40% 0 61% 0)" },
          "20%": { clipPath: "inset(92% 0 1% 0)" },
          "40%": { clipPath: "inset(25% 0 58% 0)" },
          "60%": { clipPath: "inset(75% 0 5% 0)" },
          "80%": { clipPath: "inset(15% 0 80% 0)" },
          "100%": { clipPath: "inset(80% 0 5% 0)" },
        },
        "glitch-anim-2": {
          "0%": { clipPath: "inset(24% 0 29% 0)" },
          "20%": { clipPath: "inset(54% 0 21% 0)" },
          "40%": { clipPath: "inset(80% 0 1% 0)" },
          "60%": { clipPath: "inset(11% 0 79% 0)" },
          "80%": { clipPath: "inset(65% 0 5% 0)" },
          "100%": { clipPath: "inset(5% 0 64% 0)" },
        },
        "scanline-anim": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "glow-pulse-anim": {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 0.9 },
        },
        "grid-drift-anim": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 200px" },
        }
      },
      boxShadow: {
        "neon-cyan": "0 0 10px rgba(0, 243, 255, 0.5), 0 0 20px rgba(0, 243, 255, 0.2)",
        "neon-purple": "0 0 10px rgba(189, 0, 255, 0.5), 0 0 20px rgba(189, 0, 255, 0.2)",
        "neon-emerald": "0 0 10px rgba(0, 255, 135, 0.5), 0 0 20px rgba(0, 255, 135, 0.2)",
        "neon-cyan-strong": "0 0 15px rgba(0, 243, 255, 0.8), 0 0 30px rgba(0, 243, 255, 0.4)",
        "neon-purple-strong": "0 0 15px rgba(189, 0, 255, 0.8), 0 0 30px rgba(189, 0, 255, 0.4)",
      }
    },
  },
  plugins: [],
}
