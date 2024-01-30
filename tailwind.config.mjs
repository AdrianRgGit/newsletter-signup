/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "red-1": "hsl(4, 100%, 67%)",
        "gray-1": "hsl(235, 18%, 26%)",
        "gray-2": "hsl(231, 7%, 60%)",
        "gray-3": "hsl(0, 0%, 100%)",

        "gradient-1": "#FF5476",
        "gradient-2": "#FF673E",
      },
    },
  },
  plugins: [],
};
