module.exports = {
  content: ['./dist/**/*.{html,js}','learntailwind.html','learntypography.html','cardimage.html','helloworld.html','index.html',
'tailwindcss.html','laravel.html','flutter.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
