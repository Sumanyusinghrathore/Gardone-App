import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Password from '../../assets/Icons/Password.svg';
import Profile from '../../assets/Icons/Profile.svg';
import ArrowRight from '../../assets/Icons/Rightarrow.svg';
import { COLORS, FONTS, SIZES } from '../../themes/theme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = StackNavigationProp<RootStackParamList>;
const Settings = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> navigation.navigate("Changepassword")} style={styles.item}>
        <View style={styles.iconContainer}>
          <Password width={30} height={30} />
        </View>
        <Text style={styles.text}>Password Manager</Text>
        <ArrowRight width={20} height={20} style={styles.arrow} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.iconContainer}>
          <Profile width={30} height={30} />
        </View>
        <Text style={styles.text}>Delete Account</Text>
        <ArrowRight width={20} height={20} style={styles.arrow} />
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  iconContainer: {
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: SIZES.h4,
    fontFamily:FONTS.AvenirRegular,
    marginLeft: 12,
    color:COLORS.HeadingColor
  },
  arrow: {
    marginRight: 8,
  },
});
