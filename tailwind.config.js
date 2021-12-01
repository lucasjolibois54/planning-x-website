module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        //background colors
        'dark-background': '#202832',
        'light-background': '#F3F6FE',
        'maybe-dark-background': '#0E1726',

        //text colors
        'p-tag-light': '#B7B5B5',

        //gradient color
        'purple-text': '#6061D0',
        'orange-text': '#E7A88D',

        //buttons
        'blue-button': '#4472F5',
        'light-outline-button': '#FFFFFF',
        'light-button': '#FFFFFF',
        'black-button': '#000000',
      },
    },
    height: {
			"10v": "10vh",
			"20v": "20vh",
			"30v": "30vh",
			"40v": "40vh",
			"50v": "50vh",
			"60v": "60vh",
			"70v": "70vh",
			"80v": "80vh",
			"90v": "90vh",
			"100v": "100vh",
		},
  },
screens: {
  'xsm': '520px',
  // => @media (min-width: 520px) { ... }

  'sm': '640px',
  // => @media (min-width: 640px) { ... }

  'md': '768px',
  // => @media (min-width: 768px) { ... }

  'lg': '1024px',
  // => @media (min-width: 1024px) { ... }

  '2lg': '1148px',
  // => @media (min-width: 1148px) { ... }

  'xl': '1280px',
  // => @media (min-width: 1280px) { ... }

  '2xl': '1536px',
  // => @media (min-width: 1536px) { ... }
},
  variants: {
    extend: {},
  },
  plugins: [],
}
