module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        karla: ['Karla', 'sans-serif']
      },
      fontSize: {
        pg: "1.2rem"
      }
    }
  },
  plugins: [],
}
