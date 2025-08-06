
import type { Config } from "tailwindcss";
import {heroui} from "@heroui/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(button|dropdown|ripple|spinner|menu|divider|popover).js"
  ],
  theme: {
    extend: {
      animation: {
        spin: "spin 4s linear infinite",
        "spin-paused": "spin 4s linear paused",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      minHeight: {
        screenHeightWithoutHeader: "calc(100vh - 101px)",
      },
      height: {
        screenHeightWithoutHeader: "calc(100vh - 101px)",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()]};
export default config;
