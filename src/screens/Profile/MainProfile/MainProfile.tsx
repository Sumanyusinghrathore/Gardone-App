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
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigationStateType, useApp } from '../../../context/AppContext';

type NavigationProp = StackNavigationProp<RootStackParamList>;

interface LogoutModalProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ isVisible, onClose, onConfirm }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose} // Closes modal when tapping outside
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropOpacity={0.5}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Log Out</Text>
        <Text style={styles.modalText}>Are you sure you want to log out?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
            <Text style={styles.confirmText}>Yes, Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const MainProfile = () => {
  const navigation = useNavigation<NavigationProp>();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const pickImage = async () => {
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
      if (response.didCancel) return;
      if (response.errorCode) {
        console.error('Image picker error: ', response.errorMessage);
        return;
      }
      if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        if (uri) {
          setProfileImage(uri);
        }
      }
    });
  };
  const appContext = useApp();
  const handleLogout =  async () => {
    setModalVisible(false);
    try {
      // Clear the user data from AsyncStorage
      await AsyncStorage.removeItem('userData');
      console.log("User data cleared from AsyncStorage");

      // Update navigation state to AUTH
      appContext?.setNavigationState(navigationStateType.AUTH);
      console.log("Navigating to AUTH state");
      
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const menuItems = [
    { icon: <Profile width={40} height={40} />, label: 'Profile', action: () => navigation.navigate("UpdateProfile") },
    { icon: <History width={40} height={40} />, label: 'Order History', action: () => navigation.navigate("OrderHistory") },
    { icon: <Privacy width={40} height={40} />, label: 'Privacy Policy', action: () => navigation.navigate("Privacy") },
    { icon: <Settings width={40} height={40} />, label: 'Settings', action: () => navigation.navigate("Setting") },
    { icon: <Help width={40} height={40} />, label: 'Help', action: () => navigation.navigate("Help") },
    { icon: <Logout width={40} height={40} />, label: 'Logout', action: () => setModalVisible(true) },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={profileImage ? { uri: profileImage } : require('../../../assets/Images/Profile.jpg')} style={styles.profileImage} />
        <TouchableOpacity style={styles.editIcon} activeOpacity={ACTIVE_OPACITY} onPress={pickImage}>
          <Pencil width={30} height={30} />
        </TouchableOpacity>
      </View>
      <Text style={styles.profileName}>Sumanyu Singh Rathore</Text>
      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity key={item.label} style={styles.menuItem} onPress={item.action}>
            <View style={styles.iconContainer}>{item.icon}</View>
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <LogoutModal isVisible={isModalVisible} onClose={() => setModalVisible(false)} onConfirm={handleLogout} />
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
    fontFamily: FONTS.AvenirDemi,
    color: COLORS.HeadingColor,
  },
  menuContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
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
    fontFamily: FONTS.AvenirRegular,
    color: COLORS.HeadingColor,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontFamily:FONTS.AvenirDemi,
    color:COLORS.HeadingColor
  },
  modalText: {
    fontSize: 14,
    fontFamily:FONTS.AvenirThin,
    color:COLORS.HeadingColor,
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    marginHorizontal:10
  },
  cancelButton: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.HeadingColor,
    marginRight: 5, // Adjusted margin for spacing
    flex: 1, // Makes button take up 50% of the width
  },
  cancelText: {
    color: COLORS.primary,
    textAlign: 'center',
    fontFamily: FONTS.AvenirDemi,
  },
  confirmButton: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 10, // Added borderRadius to make it consistent with cancelButton
    flex: 1, // Makes button take up 50% of the width
  },
  confirmText: {
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: FONTS.AvenirDemi,
  },  
});
