module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    options: {
      safelist: ['bg-red-200', 'bg-yellow-200', 'bg-purple-200', 'bg-blue-200'],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: '#47535E',
        border: '#cdcfd3',
        mdgray: '#656d78',
        ltgray: '#ABB2BC',
        offgray: '#ffc1c1',
      },
      top: {
        '1/2': '50%',
      },
    },
    fontFamily: {
      body: ['Inter', '-apple-system', 'sans-serif'],
      heading: ['DM Serif Display', 'serif'],
    },
  },
  variants: {
    extend: {
      // ...
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
