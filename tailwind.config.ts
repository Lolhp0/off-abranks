import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "angle-left": "-25px 0px 2px 20px #18181b",
        "angle-right": "25px 0px 2px 20px #18181b",
      },
      fontFamily: {
        "p": "var(--font-poppins)"
      }
    },
  },
  plugins: [nextui()],
};
export default config;
