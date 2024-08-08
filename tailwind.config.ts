import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        btnbg: "#CC399E",
        contentbg: "#FFEDF9",
        optionborder: "#FFE3F6",
        bggrey: "#EDF2F7",
        bg1: "rgba(255, 237, 249, 0.1)",
        bg2: "rgba(255, 237, 249, 0.2)",
        bg3: "rgba(255, 237, 249, 0.3)",
        black: "#101725",
        bgd: "#E2E8F0",
        textblack: "#4D2259",
        iconcolor: "#A0AEC0",
        lightwhite: "#FAFAFA",
        lightblack: "#27303F",
        lighterblack: "#27303F",
        lightgreen: "#A0AEC0",
        lightgrey: "#F4F7FA",
        lightergreen: "#718096",
      },
      boxShadow: {
        pink: "0 0 0 2px #FFEDF9",
        pinkdlg: "0px 4px 13.8px 1px rgba(187, 44, 164, 0.16)", // ,Example blue shadow
      },
      fontSize: {
        f18: "18px",
        f28: "28px",
        f32: "32px",
        f43: "43px",
        f48: "48px",
      },
      fontFamily: {
        fpublic: "Public Sans",
        circular: ["CircularStd"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        jump: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        jump: "jump 0.5s ease-in-out",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

export default config;
