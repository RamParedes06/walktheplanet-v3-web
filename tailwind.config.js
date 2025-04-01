// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        generalSans: ['GeneralSans', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      keyframes: {
        scrollLeft: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "scroll-left": "scrollLeft 20s linear infinite",
      },
    },
  },
  plugins: [],
};