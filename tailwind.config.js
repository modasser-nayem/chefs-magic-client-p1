/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            "yellow-cs": "#F5A84C",
         },
         fontFamily: {
            kaushan: "'Kaushan Script',cursive",
            Lato: "'Lato', sans-serif",
            Montserrat: "'Montserrat', sans-serif",
         },
      },
   },
   plugins: [require("daisyui")],
};
