import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import DynamicText from '../../components/CustomText/DynamicText';
import { COLORS, FONTS } from '../../themes/theme';

const Rewards = () => {
  return (
    <View style={styles.container}>
      <DynamicText content='My Coupons'/>
      <View style={styles.card}>
        {/* Left Circular Cut */}
        <View style={styles.cutLeft} />
        <View style={styles.cardContent}>
        <Image
            source={require('../../assets/Images/Rewards.png')} // Replace with the correct path to your image
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Extra 5% Off On</Text>
            <Text style={styles.subtitle}>Indoor Plants &gt;</Text>
          </View>
        </View>
        {/* Right Circular Cut */}
        <View style={styles.cutRight} />
      </View>
      <View style={styles.card}>
        {/* Left Circular Cut */}
        <View style={styles.cutLeft} />
        <View style={styles.cardContent}>
        <Image
            source={require('../../assets/Images/Rewards.png')} // Replace with the correct path to your image
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Extra 5% Off On</Text>
            <Text style={styles.subtitle}>Indoor Plants &gt;</Text>
          </View>
        </View>
        {/* Right Circular Cut */}
        <View style={styles.cutRight} />
      </View>
    </View>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingVertical:20
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.MoodyBlue,
    borderRadius: 12,
    position: 'relative',
    width: '90%',
    height: 100,
    overflow: 'hidden',
    marginHorizontal:20,
    marginVertical:10
  },
  cardContent: {
    flexDirection: 'row',
    paddingHorizontal: 0,
    alignItems: 'center',
  },
  cutLeft: {
    position: 'absolute',
    width: 30,
    height: 30,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    left: -15,
    top: '50%',
    transform: [{ translateY: -15 }],
    zIndex:1
  },
  cutRight: {
    position: 'absolute',
    width: 30,
    height: 30,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    right: -15,
    top: '50%',
    transform: [{ translateY: -15 }],
  },
  image: {
    width: 100,
    height: 100,
    resizeMode:'cover',
  },
  textContainer: {
    marginLeft: 12,
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 4,
    fontFamily:FONTS.AvenirBold
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily:FONTS.AvenirDemi
  },
});
