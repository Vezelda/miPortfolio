module.exports = {
  darkMode: 'class', // Activa el modo oscuro basado en clases
  content: [
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#2d2d2d',
        'medium-gray': '#6b6b6b',
        'light-turquoise': '#40e0d0',
      },
      fontFamily: {
        'handwritten': ['Shadows Into Light', 'cursive'], // Usa 'Shadows Into Light'
      },
    },
  },
  plugins: [],
}
