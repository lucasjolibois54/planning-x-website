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
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
