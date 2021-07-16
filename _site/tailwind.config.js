module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.html',
    './*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#017BF6',
        background: '#fff',
        foreground: '#000000',
        accent: '#A5F0B6'
      }
    },
    fontFamily: {
      'sans': ['Be Vietnam', 'system-ui'],
      'display': ['Be Vietnam', 'system-ui'],
      'body': ['Be Vietnam', 'system-ui']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
