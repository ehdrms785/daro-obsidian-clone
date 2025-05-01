module.exports = {
  theme: {
    extend: {
      animation: {
        "text-flicker": "flicker 3s ease-in-out infinite",
        wiggle: "wiggle 0.5s ease-in-out",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-8deg) scale(1)" },
          "50%": { transform: "rotate(8deg) scale(1.2)" },
        },
      },
    },
  },
  // ...기타 설정
};
