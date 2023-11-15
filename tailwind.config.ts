import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": {
            width: "100%",
          },
          "100%": {
            width: "0%",
          },
        },
      },
      animation: {
        wiggle: "wiggle 120s linear",
      },
    },
  },
  plugins: [],
};
export default config;
