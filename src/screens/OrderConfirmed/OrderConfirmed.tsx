import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Orderconfirm from '../../assets/Icons/Order_Confirmed.svg';
import { COLORS, FONTS, SIZES } from '../../themes/theme';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type NavigationProp = StackNavigationProp<RootStackParamList>;
type tabNavigation = BottomTabNavigationProp<RootStackParamList>;

const OrderConfirmed = () => {
   const navigation = useNavigation<NavigationProp>();
   const tabNavigation = useNavigation<tabNavigation>();

   const ContinueShopping =  () => {
    navigation.navigate('HomeScreen'); 
   }

   const handleTrackOrder = () => {
    // Ensure Cart tab stays active and navigate to Track page
    tabNavigation.navigate('Cart');// Navigate to the Cart tab if needed
    navigation.navigate('Track'); // Then navigate to the Track page
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Centered image and text */}
        <View style={styles.content}>
          <Orderconfirm width={100} height={100} />
          <Text style={styles.title}>Order Confirmed!</Text>
          <Text style={styles.description}>
            Your order has been confirmed. We will send you a confirmation email shortly.
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleTrackOrder} style={styles.continueShoppingButton}>
            <Text style={styles.shoppingText}>Track Order</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ContinueShopping} style={styles.trackOrderButton}>
            <Text style={styles.buttonText}>Continue Shopping </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderConfirmed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between', // Ensures the content is spaced between top and bottom
  },
  content: {
    flex: 1, // Takes up the available space
    alignItems: 'center', // Centers content horizontally
    justifyContent: 'center', // Centers content vertically within its space
    marginBottom: 20,
  },
  title: {
    fontSize: SIZES.h1,
    color: COLORS.HeadingColor,
    marginTop: 20,
  },
  description: {
    fontSize: SIZES.h4,
    color: COLORS.black,
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%', // Ensures buttons are full-width
  },
  trackOrderButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginVertical:10
  },
  continueShoppingButton: {
    backgroundColor: COLORS.white,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginVertical:10,
    borderColor:COLORS.HeadingColor,
    borderWidth:1
  },
  buttonText: {
    fontSize:SIZES.body4,
    color: COLORS.white,
    fontFamily:FONTS.AvenirDemi
  },
  shoppingText:{
    color:COLORS.HeadingColor,
    fontFamily:FONTS.AvenirDemi,
    fontSize:SIZES.body4,
  }
});
