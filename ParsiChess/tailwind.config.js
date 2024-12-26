/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
"./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'text': '#f4ecdc',
        'background': '#181208',
        'primary': '#dfcc9d',
        'secondary': '#5d862b',
        'accent': '#87cd62',
       },
       
    },
  },
  plugins: [],
}

