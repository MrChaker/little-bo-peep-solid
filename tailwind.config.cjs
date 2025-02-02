/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,emu}"],
  theme: {
    extend: {
      fontFamily: {
        baskerville: ["Baskerville Regular"],
        "baskerville-bold": ["Baskerville Bold"],
        "baskerville-italic": ["Baskerville Italic"],
        clickerscript: ["Clicker Script"],
        "glass-antiqua": ["GlassAntiqua"],
        lora: ["Lora"],
      },
      width: {
        128: "32.5rem",
        192: "42rem",
        256: "64rem",
        300: "100rem",
        512: "128rem",
        "3/1": "300%",
      },
      strokeWidth: {
        1: "1.5px",
        2: "3px",
      },
      animation: {
        appear: "appear 0.3s ease 0s 1 normal forwards",
        "appear-slow": "appear 1s ease 0s 1 normal forwards",

        /*  height_increase: "height_increase 1s ease 0.2s 1 normal forwards" */
      },
      transitionProperty: {
        dropdown: "all 1s",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        /* height_increase: {
          "0%": { height: "0" },
          "100%": { height: "100%" },
        }, */
      },
      screens: {
        sm: "520px",
        "menu-button-bg": "580px",
      },
    },
  },
  plugins: [],
};
