import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Orderconfirm from '../../assets/Icons/Order_Confirmed.svg';
import { COLORS } from '../../themes/theme';
import { ScrollView } from 'react-native-gesture-handler';

const OrderConfirmed = () => {
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
          <TouchableOpacity style={styles.continueShoppingButton}>
            <Text style={styles.buttonText}>Continue Shopping</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.trackOrderButton}>
            <Text style={styles.buttonText}>Track Order</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: COLORS.gray,
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
    backgroundColor: COLORS.secondary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginVertical:10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});
