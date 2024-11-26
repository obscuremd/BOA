/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
import daisyui from "daisyui"

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    daisyui: {
      themes: ["light", "dark", "cupcake"]
    },

    extend: {
      fontFamily: {
        connections: ['Connections', 'serif'],
        roboto: ['Roboto', 'serif'],
      },
    }
  },
  plugins: [
    daisyui
  ],
})