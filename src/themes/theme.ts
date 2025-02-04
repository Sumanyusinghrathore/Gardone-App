import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');


// Function to scale font size based on screen width
const getResponsiveFontSize = (baseSize: number) => {
  if (width >= 1024) {
    return baseSize * 1.4; // Larger screens (Tablets, Desktops)
  } else if (width >= 768) {
    return baseSize * 1.2; // Medium screens (Large Phones, Small Tablets)
  } else {
    return baseSize; // Default for mobile
  }
};

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
  cardbgcolor:'#EAF6E4',
  linecolor:"#C6C6C6",


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

export const SIZES = {
  largeTitle: getResponsiveFontSize(32),
  h1: getResponsiveFontSize(26),
  h2: getResponsiveFontSize(22),
  h3: getResponsiveFontSize(18),
  h4: getResponsiveFontSize(16),
  body1: getResponsiveFontSize(24),
  body2: getResponsiveFontSize(20),
  body3: getResponsiveFontSize(16),
  body4: getResponsiveFontSize(14),
  body5: getResponsiveFontSize(12),
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'AvenirNextCyr-Regular',
    fontSize: SIZES.largeTitle,
    lineHeight: SIZES.largeTitle * 1.5,
  },
  rupeeSymbol: '₹',
  h1: { fontFamily: 'AvenirNextCyr-Demi', fontSize: SIZES.h1, lineHeight: SIZES.h1 * 1.4 },
  h2: { fontFamily: 'AvenirNextCyr-Bold', fontSize: SIZES.h2, lineHeight: SIZES.h2 * 1.4 },
  h3: { fontFamily: 'AvenirNextCyr-Bold', fontSize: SIZES.h3, lineHeight: SIZES.h3 * 1.3 },
  h4: { fontFamily: 'AvenirNextCyr-Bold', fontSize: SIZES.h4, lineHeight: SIZES.h4 * 1.3 },
  body1: { fontFamily: 'AvenirNextCyr-Regular', fontSize: SIZES.body1, lineHeight: SIZES.body1 * 1.5 },
  body2: { fontFamily: 'AvenirNextCyr-Regular', fontSize: SIZES.body2, lineHeight: SIZES.body2 * 1.4 },
  body3: { fontFamily: 'AvenirNextCyr-Regular', fontSize: SIZES.body3, lineHeight: SIZES.body3 * 1.3 },
  body4: { fontFamily: 'AvenirNextCyr-Regular', fontSize: SIZES.body4, lineHeight: SIZES.body4 * 1.3 },
  body5: { fontFamily: 'AvenirNextCyr-Regular', fontSize: SIZES.body5, lineHeight: SIZES.body5 * 1.3 },
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

const appTheme = {COLORS,FONTS,SIZES, REMOVESTRING};

export default appTheme;
