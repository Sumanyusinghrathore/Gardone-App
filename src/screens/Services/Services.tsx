import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
// Import your SVG icon
import GardenMaintenance from '../../assets/Icons/Garden-Maintenance.svg';
import VerticalGarden from '../../assets/Icons/Vertical-Garden.svg';
import Corporate from '../../assets/Icons/Corporate-Renting.svg'
import { COLORS, FONTS } from '../../themes/theme';
import { ACTIVE_OPACITY } from '../../themes/genericStyles';
import { ScrollView } from 'react-native-gesture-handler';
import Enquiryform from '../../assets/Icons/Enquiry_form.svg'
import Contactyou from '../../assets/Icons/Contact_you.svg'
import Schedule from '../../assets/Icons/Schedule.svg'
import Desiredservice from '../../assets/Icons/Desired_service.svg'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types'; // Adjust the import path as necessary

type NavigationProp = StackNavigationProp<RootStackParamList>;
const bannerimage = require('../../assets/Images/Maintenance-img.png');
const Services = () => {
   const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Image at the top */}
        <Image source={bannerimage} style={styles.bannerimage} />

        {/* Card 1 */}
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Garden{'\n'}Maintenance</Text>

            {/* Use the imported SVG Icon */}
            <GardenMaintenance />
          </View>

          {/* Bullet Points for Garden Maintenance */}
          <View style={styles.bulletPointsContainer}>
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>• One time maintenance services</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>• Potted-Exotic Garden</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>• Annual Maintenance Package</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>• Maintenance Subscription Plans </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>• Herb Garden Setup</Text>
            </View>
          </View>
          {/* Enquiry Button */}
          <TouchableOpacity onPress={()=>navigation.navigate("MaintenanceForm")} activeOpacity={ACTIVE_OPACITY} style={styles.enquiryButton}>
            <Text style={styles.enquiryButtonText}>Enquire Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Vertical
              {'\n'}Garden</Text>

            {/* Use the imported SVG Icon */}
            <VerticalGarden />
          </View>

          {/* Bullet Points for Garden Maintenance */}
          <View style={styles.bulletPointsContainer}>
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>• One time maintenance services</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>• Potted-Exotic Garden</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>• Annual Maintenance Package</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>• Maintenance Subscription Plans </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>• Herb Garden Setup</Text>
            </View>
          </View>
          {/* Enquiry Button */}
          <TouchableOpacity onPress={()=>navigation.navigate("MaintenanceForm")} activeOpacity={ACTIVE_OPACITY} style={styles.enquiryButton}>
            <Text style={styles.enquiryButtonText}>Enquire Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Corporate
              {'\n'}Renting</Text>

            {/* Use the imported SVG Icon */}
            <Corporate />
          </View>

          {/* Bullet Points for Garden Maintenance */}
          <View style={styles.bulletPointsContainer}>
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>• One time maintenance services</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>• Potted-Exotic Garden</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>• Annual Maintenance Package</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>• Maintenance Subscription Plans </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>• Herb Garden Setup</Text>
            </View>
          </View>
          {/* Enquiry Button */}
          <TouchableOpacity onPress={()=>navigation.navigate("MaintenanceForm")} activeOpacity={ACTIVE_OPACITY} style={styles.enquiryButton}>
            <Text style={styles.enquiryButtonText}>Enquire Now</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.headerText}>How It Works</Text>

          <View style={styles.rowContainer}>
            <View style={styles.itemContainer}>
              <Enquiryform width={40} height={40} />
              <Text style={[styles.text]}>Fill the enquiry form</Text>
            </View>
            <View style={styles.itemContainer}>
              <Contactyou width={40} height={40} />
              <Text style={[styles.text]}>Our team will contact you</Text>
            </View>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.itemContainer}>
              <Schedule width={40} height={40}  />
              <Text style={[styles.text]}>Schedule first visit</Text>
            </View>
            <View style={styles.itemContainer}>
              <Desiredservice width={40} height={40}/>
              <Text style={styles.text}>Our garden expert will execute the desired service</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Services

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.MoodyBlue,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  bannerimage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
    borderRadius: 10,
  },
  card: {
    flexDirection: 'column', // Stack elements vertically
    padding: 16,
    borderLeftWidth: 6,
    borderLeftColor: COLORS.darkgreen,
    backgroundColor: COLORS.white,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    marginVertical: 20
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    flex: 1,
    fontSize: 24,
    color: COLORS.darkgreen,
    fontFamily: FONTS.AvenirBold,
  },
  bulletPointsContainer: {
    marginVertical: 20
  },
  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  bulletText: {
    fontSize: 14,
    color: COLORS.black,
    marginLeft: 8,
    fontFamily: FONTS.AvenirDemi
  },
  enquiryButton: {
    backgroundColor: COLORS.darkgreen,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    width: 120,
  },
  enquiryButtonText: {
    fontSize: 14,
    color: COLORS.white,
    fontFamily: FONTS.AvenirDemi
  },
  headerText: {
    textAlign: 'center',
    color: COLORS.header,
    fontSize: 20,
    fontFamily: FONTS.AvenirBold,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal:30
  },
  itemContainer: {
    alignItems: 'center',
    width:150
  },
  text: {
    textAlign: 'center',
    color: COLORS.header,
    fontFamily: FONTS.AvenirDemi,
    marginTop: 8, // Add spacing between icon and text
  },
})
