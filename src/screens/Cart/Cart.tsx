import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, REMOVESTRING } from '../../themes/theme';
import { ACTIVE_OPACITY } from '../../themes/genericStyles';
import DeleteIcon from '../../assets/Icons/delete-outline.svg'

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const decrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Add New Address Button */}
      <View>
        <TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
          <LinearGradient
            colors={['rgba(173, 184, 21, 1)', 'rgba(24, 57, 42, 1)']}
            style={styles.addressBorder}>
            <View style={styles.addresscard}>
              <Text style={styles.addAddressText}>Add New Address</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <View>
          <LinearGradient
            colors={['rgba(173, 184, 21, 1)', 'rgba(24, 57, 42, 1)']}
            style={styles.gradientCard}>
            <View style={styles.cardContent}>
              {/* Image */}
              <Image
                source={require('../../assets/Images/Product_details.png')}
                style={styles.image}
              />
              {/* Text Content */}
              <View style={styles.textContainer}>
                <Text style={styles.title}>Monstera Plant</Text>
                <Text style={styles.description}>
                  Select Planter: Lotus Bowl
                </Text>
                <Text style={styles.description}>Plant Age: 1 Month</Text>
                <View style={styles.pricecontainer}>
                  <Text style={styles.price}>{REMOVESTRING(400.25)}</Text>
                  <View style={styles.quantityContainer}>
                    <Text style={styles.quantityLabel}>Qty:</Text>
                    <LinearGradient
                      colors={['rgba(173, 184, 21, 1)', 'rgba(24, 57, 42, 1)']}
                      style={styles.gradientBorder}>
                      <View style={styles.quantityBox}>
                        <TouchableOpacity onPress={decrement} style={styles.button}>
                          <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <TouchableOpacity onPress={increment} style={styles.button}>
                          <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </LinearGradient>
                  </View>
                </View>
              </View>
              {/* Remove Button */}
              <TouchableOpacity style={styles.deleteButton}>
                <DeleteIcon width={30} height={30} />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </View>

    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
  },
  addAddressButton: {
    backgroundColor: COLORS.white,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addAddressText: {
    color: COLORS.black,
    fontSize: 20,
    fontFamily: FONTS.AvenirBold
  },
  addressBorder: {
    borderRadius: 10,
    marginRight: 20,
    padding: 2,
    marginVertical: 10,
    marginLeft: 10
  },
  addresscard: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    flex: 1, // Allows the content to expand and fill the available space
    justifyContent: 'center', // Ensures content stays centered
  },
  gradientCard: {
    borderRadius: 10,
    marginRight: 20,
    padding: 2,
    marginVertical: 10,
    marginLeft: 10
  },
  cardContent: {
    backgroundColor: COLORS.white, // White card background
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 5,
    marginRight: 15,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    marginVertical: 5
  },
  title: {
    fontSize: 16,
    color: COLORS.HeadingColor,
    fontFamily: FONTS.AvenirBold,
    marginVertical: 5
  },
  description: {
    fontSize: 12,
    color: COLORS.HeadingColor,
    fontFamily: FONTS.AvenirDemi,
    marginVertical: 5
  },
  price: {
    fontSize: 14,
    color: COLORS.HeadingColor,
    fontFamily: FONTS.AvenirDemi,
    marginVertical: 5
  },
  deleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 40
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20
  },
  quantityLabel: {
    fontSize: 14,
    color: COLORS.HeadingColor,
    marginRight: 5,
    fontFamily: FONTS.AvenirDemi,
  },
  quantityBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white, // Ensure the inside has a solid color
    borderRadius: 5,
    overflow: 'hidden',
  },
  gradientBorder: {
    borderRadius: 5, // Matches the `quantityBox` radius
    padding: 2, // Adds space for the gradient effect
  },
  button: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.HeadingColor,
    fontFamily:FONTS.AvenirBold,
    fontSize:20
  },
  quantityText: {
    width: 40,
    textAlign: 'center',
    fontSize: 16,
    color: COLORS.HeadingColor,
    fontFamily:FONTS.AvenirBold,
    backgroundColor: COLORS.white,
  },
  pricecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
