/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'navy': '#0a192f',
        'lightest-slate': '#ccd6f6',
        'slate': '#8892b0',
        'lightest-navy': '#233554',
        'light-navy': '#112240'
      },
      width: {
        '6.5/12': '56.6666%',
        '110': '',
        '111': '75%',
        '85': '18.75rem'
      },
      height: {
        '68': '17rem',
        '85': '18.75rem'
      },
      maxWidth: {
        '4.5xl': '56.25rem',
        '4.6xl': '48.40rem',
        '2sm': '24.375rem',
        '3sm': '75%'
      },
      maxWidth: {
        '4.5xl': '56.25rem',
        '4.6xl': '48.40rem',
        '2sm': '24.375rem',
        '3sm': '75%'
      },
      gridTemplateColumns: {
        '14': '3fr 2fr'
      },
      screens: {
        '2md': '800px'
      },
      transitionProperty: {
        '--transition' : 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)'
      }
    },
  },
  plugins: [],
}