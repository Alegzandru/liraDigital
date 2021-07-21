module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
    // Add more here
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ui: {
        white: '#FFFFFF',
        grey: '#B0B0B0',
        dark: '#121212',
      },
    },
    screens: {
      sm : '480px',
      md: '768px',
      lg: '992px',
      xl: '1504px',
    },
    extend: {
      spacing: {
        'container-sm' : '20px',
        'container-lg' : '32px',
        'container-xl' : 'calc( ( 100vw - 1440px ) / 2 )',
        '720px' : '720px',
        '568px' : '568px',
        '300px' : '300px',
        '120px' : '120px',
        '100px' : '100px',
      },
      maxWidth : {
        '720px' : '720px',
        '528px' : '528px',
      },
      maxHeight : {
        '720px' : '720px',
        '528px' : '528px',
      },
    },
    fontSize: {
      'lg-h1' : ['72px', '72px'],
      'lg-p' : ['21px', '130%'],
      'lg-button' : ['15px', '22px'],
      'md-h1' : ['58px', '58px'],
      'sm-h1' : ['48px', '48px'],
      'smallest-h1' : ['32px', '32px'],
      'smallest-p' : ['16px', '18px'],
      'smallest-button' : ['14px', '14px'],
    },
    fontFamily: {
      TangoSans : ['TangoSans', 'sans-serif' ],
      Poppins : ['Poppins', 'sans-serif' ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
