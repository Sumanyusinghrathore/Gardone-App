import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Profile from '../../../assets/Icons/Main_Profile.svg';
import History from '../../../assets/Icons/Main_Order_History.svg';
import Privacy from '../../../assets/Icons/Privacy_Policy.svg';
import Settings from '../../../assets/Icons/Settings.svg';
import Help from '../../../assets/Icons/Help.svg';
import Logout from '../../../assets/Icons/Logout.svg';
import Pencil from '../../../assets/Icons/Pencil.svg';
import { COLORS, FONTS, SIZES } from '../../../themes/theme';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { ACTIVE_OPACITY } from '../../../themes/genericStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes/types';


type NavigationProp = StackNavigationProp<RootStackParamList>;

const MainProfile = () => {
  const navigation = useNavigation<NavigationProp>();
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const pickImage = async () => {
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
      if (response.didCancel) return;
      if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        if (uri) {
          setProfileImage(uri);
        }
      }
    });
  };

  const menuItems = [
    { icon: <Profile width={40} height={40} />, label: 'Profile', action: () => navigation.navigate("UpdateProfile")},
    { icon: <History width={40} height={40} />, label: 'Order History', action: () => navigation.navigate("OrderHistory") },
    { icon: <Privacy width={40} height={40} />, label: 'Privacy Policy', action: () => navigation.navigate("Privacy") },
    { icon: <Settings width={40} height={40} />, label: 'Settings', action: () => navigation.navigate("Setting")},
    { icon: <Help width={40} height={40} />, label: 'Help', action: () => navigation.navigate("Help") },
    { icon: <Logout width={40} height={40} />, label: 'Logout', action: () => {} },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={profileImage ? { uri: profileImage } : require('../../../assets/Images/Profile.jpg')} style={styles.profileImage} />
        <TouchableOpacity style={styles.editIcon} activeOpacity={ACTIVE_OPACITY} onPress={pickImage}>
          <Pencil width={30} height={30} />
        </TouchableOpacity>
      </View>
      <Text style={styles.profileName}>Ayushi Jain</Text>
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={item.action}>
            <View style={styles.iconContainer}>{item.icon}</View>
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MainProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingTop: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  editIcon: {
    position: 'absolute',
    bottom: 10,
    right: 0,
  },
  profileName: {
    fontSize: SIZES.h3,
    marginBottom: 20,
    fontFamily:FONTS.AvenirDemi,
    color:COLORS.HeadingColor

  },
  menuContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal:10
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
    fontFamily:FONTS.AvenirRegular,
    color:COLORS.HeadingColor
  },
});
