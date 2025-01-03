import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "tan": "#d6b5a7",
        "rose_red": "#bb3e47",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        dynapuff: ['var(--font-dynapuff)'],
      }
    },
  },
  plugins: [],
};
export default config;
