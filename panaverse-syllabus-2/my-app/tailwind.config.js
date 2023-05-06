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
        'light-navy': '#112240',
        'light-slate': '#a8b2d1',
        'color1': '#2B3467',
        "color2": '#BAD7E9',
        "color3": '#FCFFE7',
        "color4": '#DBEDF3',
        "color5": '#B4162D',
        "color6": '#CCCCCC',
        "color7": '#03001C',
        

      },
      width: {
        '6.5/12': '56.6666%',
        '110': '30rem',
        '112': '35rem',
        '113': '40rem',
        '103': '1000px',
        '102': '25rem',
        '126': '25.5rem',
        '111': '75%',
        '85': '18.75rem',
        '0.5/12': '7.3%'
      },
      height: {
        '68': '17rem',
        '85': '18.75rem',
        '17': '72px',
        '18': '88px',
        '110': '30rem',
      },
      maxWidth: {
        '4.5xl': '56.25rem',
        '4.6xl': '48.40rem',
        '2sm': '24.375rem',
        '3sm': '75%',
        '2xs': '4rem',
        '5/12': '46%',
        '10/12': '83.333333%',
        '110': '30rem',
        '96': '10rem',
      },
      minWidth:{
        '105': '28rem',
        '96': '12rem',
        '110': '30rem'

      },
      gridTemplateColumns: {
        '14': '3fr 2fr',
        '15': '6fr 4fr'
      },
      screens: {
        '2md': '800px',
        '3md': '620px',
        '2lg': '1200px',
        '1lg': '1030px',
        '2sm': '330px',
      },
      transitionProperty: {
        '--transition' : 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)'
      },
      backgroundImage: {
        'bg2' : 'url(/meta5.png)',
        'panaverse2' : 'url(/panaverse3.avif)',
        'pricingui' : 'url(/pricingui2.avif)',
        'meta2': 'url(/bg-28.jpg)',
      },
      boxShadow: {
        '2lg': '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
       borderRadius: {
        '2md': '0px 0px 10px 10px'
       },
       minHeight: {
        '60': '60px'
       }

    },
  },
  plugins: [],
}