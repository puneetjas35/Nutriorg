export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: { extend: {
    fontFamily: {
    montserrat: ['Montserrat', 'sans-serif'],
    arimo: ['Arimo', 'sans-serif'],
  },
}
   },
  plugins: [
     require("@tailwindcss/line-clamp"),
  ],


}
