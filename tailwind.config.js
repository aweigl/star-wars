module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Deep space / UI
        "sw-space": "#05070a", // near-black space
        "sw-deepsky": "#071330", // deep navy background
        "sw-nebula-ink": "#0b1320", // dark blue-black
        "sw-Imperial": "#9aa5b1", // cold metal (Imperial panels)
        "sw-holo": "#7fffd4", // hologram teal / cyan (soft)
        // Lightsabers & accents
        "sw-saber-blue": "#4fc3ff",
        "sw-saber-green": "#40e070",
        "sw-saber-red": "#ff6b6b",
        "sw-amber": "#ffb74d",
        // Nebula / accent colors
        "sw-nebula-magenta": "#b36cff",
        "sw-nebula-indigo": "#6f42c1",
        // Droids / utility
        "sw-droid-yellow": "#ffdd57",
        "sw-jawa-orange": "#f29d3e",
      },
      backgroundImage: {
        "sw-stars":
          "radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.00) 40%), linear-gradient(180deg, rgba(7,19,48,0.55), rgba(5,7,10,0.95))",
        "sw-nebula":
          "linear-gradient(120deg, rgba(111,66,193,0.12), rgba(179,108,255,0.08)), radial-gradient(circle at 10% 20%, rgba(255,183,120,0.06), transparent 20%)",
      },

      boxShadow: {
        "sw-holo":
          "0 4px 30px rgba(127,255,212,0.12), 0 0 8px rgba(127,255,212,0.18)",
        "sw-saber-blue":
          "0 6px 30px rgba(79,195,255,0.12), 0 0 12px rgba(79,195,255,0.45)",
        "sw-saber-red":
          "0 6px 30px rgba(255,107,107,0.12), 0 0 12px rgba(255,107,107,0.45)",
        "sw-ship": "0 10px 40px rgba(4,8,15,0.6)",
      },

      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        wobble: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        crawl: {
          "0%": { transform: "rotateX(25deg) translateY(100%)", opacity: "1" },
          "100%": {
            transform: "rotateX(25deg) translateY(-300%)",
            opacity: "0",
          },
        },
      },
      animation: {
        twinkle: "twinkle var(--anim-duration, 7s) infinite ease-in-out",
        crawl: "crawl 180s linear infinite",
        "animate-crawl": "crawl 60s linear forwards",
      },
    },
  },
  plugins: [],
};
