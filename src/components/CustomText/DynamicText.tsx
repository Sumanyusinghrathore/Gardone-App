import React from 'react';
import { Text, StyleSheet, TextStyle, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../themes/theme';

interface DynamicTextProps {
  content: string;
  style?: TextStyle;
}

const DynamicText: React.FC<DynamicTextProps> = ({ content, style }) => {
  return <Text style={[styles.defaultStyle, style]}>{content}</Text>;
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    defaultStyle: {
    fontSize: 20,
    color: COLORS.HeadingColor,
    marginLeft: width * 0.04,
    marginTop: width * 0.04,
    fontFamily:FONTS.AvenirBold
  },
});

export default DynamicText;
