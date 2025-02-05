import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import Customerservice from '../../assets/Icons/Customerservice.svg';
import WhatsApp from '../../assets/Icons/WhatsappHelp.svg';
import Facebook from '../../assets/Icons/Facebook.svg';
import Instagram from '../../assets/Icons/Instagram.svg';
import Downarrow from '../../assets/Icons/Downarrow.svg';
import { COLORS, FONTS, SIZES } from '../../themes/theme';

const Help = () => {
  
  const handlePress = async (type: string) => {
    switch (type) {
      case 'whatsapp':
        // Open WhatsApp
        const whatsappURL = 'whatsapp://send?phone=+1234567890&text=Hello';
        try {
          await Linking.openURL(whatsappURL);
        } catch (error) {
          console.error("Error opening WhatsApp", error);
        }
        break;

      case 'facebook':
        // Open Facebook
        const facebookURL = 'fb://profile';
        try {
          await Linking.openURL(facebookURL);
        } catch (error) {
          console.error("Error opening Facebook", error);
        }
        break;

      case 'instagram':
        // Open Instagram
        const instagramURL = 'instagram://';
        try {
          await Linking.openURL(instagramURL);
        } catch (error) {
          console.error("Error opening Instagram", error);
        }
        break;

      case 'call':
        // Make a call
        const phoneNumber = 'tel:+1234567890';
        try {
          await Linking.openURL(phoneNumber);
        } catch (error) {
          console.error("Error making call", error);
        }
        break;

      default:
        console.log("Unknown action");
        break;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={() => handlePress('call')}>
        <View style={styles.iconContainer}>
          <Customerservice width={40} height={40} />
        </View>
        <Text style={styles.text}>Customer Service</Text>
        <Downarrow width={25} height={25} style={styles.arrow} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => handlePress('whatsapp')}>
        <View style={styles.iconContainer}>
          <WhatsApp width={40} height={40} />
        </View>
        <Text style={styles.text}>WhatsApp</Text>
        <Downarrow width={25} height={25} style={styles.arrow} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => handlePress('facebook')}>
        <View style={styles.iconContainer}>
          <Facebook width={40} height={40} />
        </View>
        <Text style={styles.text}>Facebook</Text>
        <Downarrow width={25} height={25} style={styles.arrow} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => handlePress('instagram')}>
        <View style={styles.iconContainer}>
          <Instagram width={40} height={40} />
        </View>
        <Text style={styles.text}>Instagram</Text>
        <Downarrow width={25} height={25} style={styles.arrow} />
      </TouchableOpacity>
    </View>
  );
};

export default Help;

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
    fontFamily: FONTS.AvenirRegular,
    marginLeft: 12,
    color: COLORS.HeadingColor,
  },
  arrow: {
    marginRight: 8,
  },
});
