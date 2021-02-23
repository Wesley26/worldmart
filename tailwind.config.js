/**
 *  TailwindCSS config file. Leave purge enabled: false for now.
 * 
 *  Notes:
 *  width and height are recommended to configure as percentage strings.
 *  flex must be manually configured.
 *  inset manual configs are strongly recommended for top/left/right/bottom.
 */

module.exports = {
  purge: {
    enabled: false,
    content: [ '' ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'appRed': '#fc5c65',
        'appGreen': '#4ECDC4',
      },
      flex: {
        '2': '2 2 0%',
      },
      fontSize: {
        '18': '18px',
      },
      spacing: {
        '20e': '20px',
        '70': '70px',
        '100e': '100px',
      },
      width: {
        '70': '70px',
        '150': '150px',
      },
      height : {
        '70': '70px',
        '150': '150px',
        '200': '200px',
        '300': '300px',
      },
      inset: {
        '40px': '40px',
        '30px': '30px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
