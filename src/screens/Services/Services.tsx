import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
// Import your SVG icon
import GardenMaintenance from '../../assets/Icons/Garden-Maintenance.svg';
import VerticalGarden from '../../assets/Icons/Vertical-Garden.svg';
import Corporate from '../../assets/Icons/Corporate-Renting.svg'
import { COLORS, FONTS } from '../../themes/theme';
import { ACTIVE_OPACITY } from '../../themes/genericStyles';
import { ScrollView } from 'react-native-gesture-handler';

const bannerimage = require('../../assets/Images/Maintenance-img.png');
const Services = () => {
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
  <TouchableOpacity activeOpacity={ACTIVE_OPACITY} style={styles.enquiryButton}>
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
  <TouchableOpacity activeOpacity={ACTIVE_OPACITY} style={styles.enquiryButton}>
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
  <TouchableOpacity activeOpacity={ACTIVE_OPACITY} style={styles.enquiryButton}>
    <Text style={styles.enquiryButtonText}>Enquire Now</Text>
  </TouchableOpacity>
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
    paddingHorizontal:10
  },
  bannerimage: {
    width:'100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
    borderRadius:10,
  },
  card: {
    flexDirection: 'column', // Stack elements vertically
    padding: 16,
    borderLeftWidth:6,
    borderLeftColor:COLORS.darkgreen,
    backgroundColor:COLORS.white,
    borderTopRightRadius:15,
    borderBottomRightRadius:15,
    marginVertical:20
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    flex: 1,
    fontSize: 24,
    color:COLORS.darkgreen,
    fontFamily:FONTS.AvenirBold,
  },
  bulletPointsContainer: {
    marginVertical:20
  },
  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:5
  },
  bulletText: {
    fontSize: 14,
    color: COLORS.black,
    marginLeft: 8,
    fontFamily:FONTS.AvenirDemi
  },
  enquiryButton: {
    backgroundColor: COLORS.darkgreen,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    width:120,
  },
  enquiryButtonText: {
    fontSize: 14,
    color: COLORS.white,
    fontFamily:FONTS.AvenirDemi
  },
})
