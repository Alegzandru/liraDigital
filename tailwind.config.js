module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    colors: {
      ui: {
        white: '#FFFFFF',
        grey: '#AFAFAF',
        dark: '#121212',
        black: '#000000',
        black100: '#080808',
        black90: '#0D0D0D',
        black80: '#121212',
        black75: '#1C1C1C',
        black70: '#262626',
        pink: '#FF498A',
        peach: '#FAB984',
        gradient: 'linear-gradient(87.28deg, #FAB984 0%, #FF498A 99.79%)',
        darkGrey: '#696969',
        mainButtonLBg: '#0D0D0D',
        mainButtonRBg: '#FAA782',
        error: '#E9344A',
        cardBg: '#151515',
      },
    },
    screens: {
      sm: '340px',
      md: '640px',
      mdNoZero: '1000px',
      mdAdaptive: '1100px',
      lg: '1280px',
      xl: '1920px',
    },
    extend: {
      spacing: {
        'container-sm-error': '20px',
        'container-lg-error': '32px',
        'container-xl-error': 'calc( ( 100vw - 1440px ) / 2 )',
        'container-sm': '24px',
        'container-md': '32px',
        'container-lg': 'calc( ( 100vw - 1200px ) / 2 )',
        '30': '120px',
        '22': '88px',
        '18': '72px',
        '15': '60px',
        '720px': '720px',
        '690px': '690px',
        '620px': '620px',
        '578px': '578px',
        '568px': '568px',
        '516px': '516px',
        '484px': '484px',
        '480px': '480px',
        '424px': '424px',
        '384px': '384px',
        '372px': '372px',
        '356px': '356px',
        '348px': '348px',
        '316px': '316px',
        '332px': '332px',
        '320px': '320px',
        '300px': '300px',
        '256px': '256px',
        '250px': '250px',
        '240px': '240px',
        '238px': '238px',
        '220px': '220px',
        '212px': '212px',
        '200px': '200px',
        '190px': '190px',
        '166px': '166px',
        '120px': '120px',
        '100px': '100px',
        '58px' : '58px',
        '52px': '52px',
        '42px' : '42px',
        '38px': '38px',
        '22px': '22px',
      },
      maxWidth: {
        '1200px': '1200px',
        '1000px': '1000px',
        '792px': '792px',
        '720px': '720px',
        '528px': '528px',
        '450px': '450px',
        '384px': '384px',
        '1/3': '33%',
      },
      maxHeight: {
        '720px': '720px',
        '528px': '528px',
        '40' : '160px',
        '53px': '53px',
      },
      minHeight: {
        '8': '32px',
        '220px': '220px',
      },
      minWidth: {
        '8': '32px',
        '384px': '384px',
        '690px': '690px',
      },
      animation: {
        'show-text': 'show-text 0.2s cubic-bezier(0, 0, 0.5, 1) forwards'
      },
      keyframes: {
        'show-text': {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        }
      }
    },
    fontSize: {
      'lg-h1-tangosans': ['88px', '120%'],
      'lg-h1-poppins': ['64px', '70px'],
      'lg-h1-error': ['72px', '72px'],
      'lg-h2-poppins': ['48px', '58px'],
      'lg-h2-tangosans': ['48px', '58px'],
      'lg-h3-tangosans': ['32px', '38px'],
      'lg-h3-poppins': ['32px', '48px'],
      'lg-h4-poppins': ['24px', '28px'],
      'lg-h5-poppins': ['18px', '22px'],
      'lg-digits': ['492px', '496px'],
      'lg-p-error': ['21px', '130%'],
      'lg-p': ['18px', '25px'],
      'lg-p2': ['16px', '28px'],
      'lg-p-spaced': ['18px', '38px'],
      'lg-button': ['15px', '22px'],
      'lg-button-md': ['15px', '22px'],
      'lg-links-sm': ['14px', '20px'],
      'lg-links-md': ['18px', '18px'],
      'lg-advantages': ['230px', '230px'],
      'md-h1-tangosans': ['64px', '130%'],
      'md-h1-poppins': ['48px', '52px'],
      'md-h1-error': ['58px', '58px'],
      'md-h2-poppins': ['32px', '42px'],
      'md-h2-tangosans': ['32px', '38px'],
      'md-h3-tangosans': ['24px', '30px'],
      'md-h3-poppins': ['24px', '29px'],
      'md-h4-poppins': ['18px', '22px'],
      'md-h5-poppins': ['16px', '18px'],
      'md-p': ['16px', '20px'],
      'md-p-spaced': ['16px', '30px'],
      'md-button-md': ['14px', '20px'],
      'md-links-md': ['16px', '22px'],
      'md-links-sm': ['14px', '20px'],
      'md-digits': ['388px', '388px'],
      'md-advantages': ['130px', '180px'],
      'sm-h1-tangosans': ['24px', '28px'],
      'sm-h1-poppins': ['36px', '120%'],
      'sm-h1-error': ['48px', '48px'],
      'sm-h2-poppins': ['20px', '28px'],
      'sm-h2-tangosans': ['28px', '34px'],
      'sm-h3-poppins': ['18px', '22px'],
      'sm-h3-tangosans': ['18px', '22px'],
      'sm-h5-poppins': ['14px', '18px'],
      'sm-links-sm': ['12px', '15px'],
      'sm-p': ['14px', '18px'],
      'sm-p2': ['14px', '25px'],
      'md-p-spaced': ['16px', '25px'],
      'sm-button-md': ['12px', '15px'],
      'sm-links-md': ['14px', '20px'],
      'sm-digits': ['182px', '182px'],
      'smallest-h1': ['32px', '32px'],
      'smallest-p': ['16px', '18px'],
      'smallest-button': ['14px', '14px'],
      'copyright': ['12px', '17px'],
    },
    fontFamily: {
      TangoSans: ['TangoSans', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif']
    },
  },
  variants: {
    extend: {
      margin: ['hover', 'focus', 'group-hover'],
      scale: ['group-hover'],
      padding: ['hover'],
      grayscale: ['hover'],
      borderWidth: ['hover'],
      maxHeight: ['group-hover']
    },
  },
  plugins: [],
}
