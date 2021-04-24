module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    scale: {
      0: 0,
      25: '.25',
      30: '.3',
      33: '.33',
      40: '.4',
      50: '.5',
      60: '.6',
      66: '.66',
      70: '.7',
      75: '.75',
      80: '.80',
      90: '.90',
      100: '1'
    }
  },
  variants: {
    extend: {
      display: ['hover', 'focus'],
      opacity: ['disabled']
    }
  },
  plugins: []
}
