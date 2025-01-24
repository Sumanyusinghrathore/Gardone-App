import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONTS } from '../../themes/theme';
import Profileicon from '../../assets/Icons/Profile.svg';
import Rewards from '../../assets/Icons/Rewards.svg';
import Home from '../../assets/Icons/iconoir_home.svg';
import Order from '../../assets/Icons/Order_History.svg';
import Changepassword from '../../assets/Icons/Change_Password.svg';
import LinearGradient from 'react-native-linear-gradient';
import { ACTIVE_OPACITY } from '../../themes/genericStyles';
import { Divider } from '@rneui/themed';
import Downarrow from '../../assets/Icons/Downarrow.svg';
import Toparrow from '../../assets/Icons/Uparrow.svg';
import { ScrollView } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigationStateType, useApp } from '../../context/AppContext';

type NavigationProp = StackNavigationProp<RootStackParamList>;
const Profile = () => {

  const [customactiveAccordion, setcustomActiveAccordion] = useState<number | null>(null);
  const customtoggleAccordion = (index: number) => {
    setcustomActiveAccordion(customactiveAccordion === index ? null : index);
  };
  const appContext = useApp();
  const navigation = useNavigation<NavigationProp>();

  const handleLogout = async () => {
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
  
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Profile section */}
        <View style={styles.profileContainer}>
          <View style={styles.profileDetails}>
            <Image source={require('../../assets/Images/Profile.png')} style={styles.profileImage} />
            <View style={styles.textContainer}>
              <Text style={styles.userName}>Hello Sumanyu Singh Rathore</Text>
              <Text style={styles.email}>xyz14@gmail.com</Text>
            </View>
          </View>
        </View>

        {/* Profile options with linear gradient borders */}
        <View style={styles.optionsContainer}>
          {/* Profile Option */}
          <TouchableOpacity onPress={() => navigation.navigate("UpdateProfile")} activeOpacity={ACTIVE_OPACITY} style={styles.optionItem}>
            <LinearGradient
              colors={['#ADB815', '#18392A']}
              start={{ x: 0, y: 0 }}  // Start at the top
              end={{ x: 0, y: 1 }}    // End at the bottom
              style={styles.gradientBorder}
            >
              <View style={styles.innerCard}>
                <Profileicon width={30} height={30} />
                <View>
                  <Text style={styles.optionText}>Profile</Text>
                  <Text style={styles.optionsubtext}>Edit Your profile</Text>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* Reward Option */}
          <TouchableOpacity onPress={() => navigation.navigate("Rewards")} activeOpacity={ACTIVE_OPACITY} style={styles.optionItem}>
            <LinearGradient
              colors={['#ADB815', '#18392A']}
              start={{ x: 0, y: 0 }}  // Start at the top
              end={{ x: 0, y: 1 }}    // End at the bottom
              style={styles.gradientBorder}
            >
              <View style={styles.innerCard}>
                <Rewards width={30} height={30} />
                <View>
                  <Text style={styles.optionText}>Rewards</Text>
                  <Text style={styles.optionsubtext}>See how to earn rewards</Text>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* Address Book Option */}
          <TouchableOpacity onPress={() => navigation.navigate("Address")} activeOpacity={ACTIVE_OPACITY} style={styles.optionItem}>
            <LinearGradient
              colors={['#ADB815', '#18392A']}
              start={{ x: 0, y: 0 }}  // Start at the top
              end={{ x: 0, y: 1 }}    // End at the bottom
              style={styles.gradientBorder}
            >
              <View style={styles.innerCard}>
                <Home width={30} height={30} />
                <View>
                  <Text style={styles.optionText}>Address Book</Text>
                  <Text style={styles.optionsubtext}>Manage your saved addresses</Text>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* Order History Option */}
          <TouchableOpacity onPress={() => navigation.navigate("OrderHistory")} activeOpacity={ACTIVE_OPACITY} style={styles.optionItem}>
            <LinearGradient
              colors={['#ADB815', '#18392A']}
              start={{ x: 0, y: 0 }}  // Start at the top
              end={{ x: 0, y: 1 }}    // End at the bottom
              style={styles.gradientBorder}
            >
              <View style={styles.innerCard}>
                <Order width={30} height={30} />
                <View>
                  <Text style={styles.optionText}>Order History</Text>
                  <Text style={styles.optionsubtext}>View your past orders</Text>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* Change Password Option */}
          <TouchableOpacity onPress={() => navigation.navigate("Changepassword")} activeOpacity={ACTIVE_OPACITY} style={styles.optionItem}>
            <LinearGradient
              colors={['#ADB815', '#18392A']}
              start={{ x: 0, y: 0 }}  // Start at the top
              end={{ x: 0, y: 1 }}    // End at the bottom
              style={styles.gradientBorder}
            >
              <View style={styles.innerCard}>
                <Changepassword width={30} height={30} />
                <View>
                  <Text style={styles.optionText}>Change Password</Text>
                  <Text style={styles.optionsubtext}>Edit your password</Text>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          {/* Logout button */}
        </View>
        <View>
          <TouchableOpacity onPress={handleLogout}  activeOpacity={ACTIVE_OPACITY} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.accorioncontainer}>
          {/* Accordion 1 */}
          <View style={styles.accodionmargincontainer}>
            <TouchableOpacity
              style={styles.header}
              onPress={() => customtoggleAccordion(1)}
            >
              <Text style={styles.accodionheader}>Shipping and Return Policy</Text>
              <View>
                {customactiveAccordion === 1 ? (
                  <Toparrow width={25} height={25} />
                ) : (
                  <Downarrow width={25} height={25} />
                )}
              </View>
            </TouchableOpacity>
            {customactiveAccordion === 1 && (
              <View style={styles.content}>
                <Text style={styles.contentText}>
                  This plant requires watering once a week to thrive. Make sure to avoid overwatering.
                </Text>
              </View>
            )}
          </View>
          <Divider />
          {/* Accordion 2 */}
          <View style={styles.accodionmargincontainer}>
            <TouchableOpacity
              style={styles.header}
              onPress={() => customtoggleAccordion(2)}
            >
              <Text style={styles.accodionheader}>Contact Us </Text>
              <View>
                {customactiveAccordion === 2 ? (
                  <Toparrow width={25} height={25} />
                ) : (
                  <Downarrow width={25} height={25} />
                )}
              </View>
            </TouchableOpacity>
            {customactiveAccordion === 2 && (
              <View style={styles.content}>
                <Text style={styles.contentText}>
                  Place this plant in a spot with bright but indirect sunlight to ensure healthy growth.
                </Text>
              </View>
            )}
          </View>
          <Divider />
          {/* Accordion 3 */}
          <View style={styles.accodionmargincontainer}>
            <TouchableOpacity
              style={styles.header}
              onPress={() => customtoggleAccordion(3)}
            >
              <Text style={styles.accodionheader}>Gardnen Services & Maintenance</Text>
              <View>
                {customactiveAccordion === 3 ? (
                  <Toparrow width={25} height={25} />
                ) : (
                  <Downarrow width={25} height={25} />
                )}
              </View>
            </TouchableOpacity>
            {customactiveAccordion === 3 && (
              <View style={styles.content}>
                <Text style={styles.contentText}>
                  Keep this plant away from pets as it may be toxic if ingested.
                </Text>
              </View>
            )}
          </View>
          <Divider />
          {/* Accordion 4 */}
          <View style={styles.accodionmargincontainer}>
            <TouchableOpacity
              style={styles.header}
              onPress={() => customtoggleAccordion(4)}
            >
              <Text style={styles.accodionheader}>Privacy Policy</Text>
              <View>
                {customactiveAccordion === 4 ? (
                  <Toparrow width={25} height={25} />
                ) : (
                  <Downarrow width={25} height={25} />
                )}
              </View>
            </TouchableOpacity>
            {customactiveAccordion === 4 && (
              <View style={styles.content}>
                <Text style={styles.contentText}>
                  This plant is easy to care for, making it perfect for beginners.
                </Text>
              </View>
            )}
          </View>
          <Divider />
          {/* Accordion 5 */}
          <View style={styles.accodionmargincontainer}>
            <TouchableOpacity
              style={styles.header}
              onPress={() => customtoggleAccordion(5)}
            >
              <Text style={styles.accodionheader}>Terms of Service</Text>
              <View>
                {customactiveAccordion === 5 ? (
                  <Toparrow width={25} height={25} />
                ) : (
                  <Downarrow width={25} height={25} />
                )}
              </View>
            </TouchableOpacity>
            {customactiveAccordion === 5 && (
              <View style={styles.content}>
                <Text style={styles.contentText}>
                  This plant is easy to care for, making it perfect for beginners.
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  profileContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  profileDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  textContainer: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily:FONTS.AvenirBold
  },
  email: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily:FONTS.AvenirRegular
  },
  optionsContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  optionItem: {
    marginVertical: 10
  },
  gradientBorder: {
    borderRadius: 10,
    padding: 2,
    elevation: 0, // Optional: adds a subtle shadow for better separation
  },
  innerCard: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  optionText: {
    fontSize: 14,
    color: COLORS.black,
    marginLeft: 10,
    fontFamily:FONTS.AvenirBold
  },
  optionsubtext:{
    fontSize: 12,
    color: COLORS.black,
    marginLeft: 10,
    fontFamily:FONTS.AvenirDemi
  },
  logoutButton: {
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    borderColor: COLORS.bordercolor,
    borderWidth: 1,
    marginVertical: 15
  },
  logoutText: {
    fontSize: 24,
    color: COLORS.black,
    fontFamily:FONTS.AvenirDemi
  },
  accorioncontainer: {
    borderWidth: 1,
    borderColor: COLORS.bordercolor2,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  accodionmargincontainer: {
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  accodionheader: {
    fontSize: 16,
    color: COLORS.HeadingColor,
    fontFamily: FONTS.AvenirDemi
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 5,
  },
  headerText: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: FONTS.AvenirBold
  },
  content: {
    backgroundColor: COLORS.white,
    padding: 10,
    paddingHorizontal: 5
  },
  contentText: {
    fontSize: 14,
    color: COLORS.black,
    lineHeight: 24,
    fontFamily: FONTS.AvenirRegular,
    marginHorizontal: 0
  },
});
