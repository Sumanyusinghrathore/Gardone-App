import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#18392A',
  secondary: '#D9D9D9',
  gray: '#C2C2C2', // gray
  third: '#535252', // gray
  textColor: '#292626',
  inputTextColor: '#999999',
  inputBg: '#EFFBFF',
  newGray: '#9C9797',
  textGray: '#505050',
  // colors
  black: '#323643',
  black2: '#303030',
  white: '#FFFFFF',
  red: '#dd2918',
  blue: '#0000FF',
  RoyalBlue: '#2e64e5',
  MoodyBlue: '#DCE8D6',
  header:'#202020',
  bordercolor:'#BFCC97',
  bordercolor2:"#C0DDB2",
  HeadingColor:'#002140',
  startcolor:"#EDD523",
  buttontext:'#154E3B',


  lightGray: '#F5F5F6',
  lightGray2: '#DCDCDC',
  transparent: 'transparent',
  darkgray: '#898C95',
  darkgreen:'#125938',
  opacity: '#f2f2f2',
  newColor: '#F4F5F7',
  lawngreen: '#00FF00',
  success: '#47b913',
  green: '#47b913',
  lightPrimary: '#fbcba6',
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'AvenirNextCyr-Regular',
    // fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  rupeeSymbol: '₹',
  h1: {fontFamily: 'AvenirNextCyr-Demi', lineHeight: 36},
  h2: {fontFamily: 'AvenirNextCyr-Bold', lineHeight: 30},
  h3: {fontFamily: 'AvenirNextCyr-Bold', lineHeight: 22},
  h4: {fontFamily: 'AvenirNextCyr-Bold', lineHeight: 22},
  body1: {
    fontFamily: 'AvenirNextCyr-Regular',
    // fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'AvenirNextCyr-Regular',
    // fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'AvenirNextCyr-Regular',
    // fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'AvenirNextCyr-Regular',
    // fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'AvenirNextCyr-Regular',
    // fontSize: SIZES.body5,
    lineHeight: 22,
  },
  AvenirBold: 'AvenirNextCyr-Bold',
  AvenirBoldItalic: 'AvenirNextCyr-BoldItalic',
  AvenirDemi: 'AvenirNextCyr-Demi',
  AvenirDemiItalic: 'AvenirNextCyr-DemiItalic',
  AvenirHeavy: 'AvenirNextCyr-Heavy',
  AvenirHeavyItalic:"AvenirNextCyr-HeavyItalic",
  AvenirItalic: 'AvenirNextCyr-Italic',
  AvenirLight: 'AvenirNextCyr-Light',
  AvenirMedium: 'AvenirNextCyr-Medium',
  AvenirRegular: 'AvenirNextCyr-Regular',
  AvenirThin: 'AvenirNextCyr-Thin',
  AvenirUltraLight:'AvenirNextCyr-UltraLight'
};

export const REMOVESTRING = (value: number): string => {
  const numericValue = Number(value); // Ensure value is a number
  return `${FONTS.rupeeSymbol}${numericValue.toFixed(2)}`; // Format to 2 decimal places
};

const appTheme = {COLORS,FONTS,REMOVESTRING};

export default appTheme;
