import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, REMOVESTRING, SIZES } from '../../themes/theme';
import { ACTIVE_OPACITY } from '../../themes/genericStyles';
import DeleteIcon from '../../assets/Icons/delete-outline.svg';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/types';
import { StackNavigationProp } from '@react-navigation/stack';
import Rightarrow from '../../assets/Icons/Rightcoupanicon.svg';
import CoupanIcon from '../../assets/Icons/coupon-line.svg';
import Righticon from '../../assets/Icons/ep_right.svg';
import { Divider } from '@rneui/themed';
import DynamicText from '../../components/CustomText/DynamicText';
type NavigationProp = StackNavigationProp<RootStackParamList>;

const Cart = () => {
  const navigation = useNavigation<NavigationProp>();
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Monstera Plant',
      description: 'Select Planter: Lotus Bowl',
      age: 'Plant Age: 1 Month',
      price: 400.25,
      quantity: 1,
      image: require('../../assets/Images/Product_details.png'),
    },
    {
      id: 2,
      title: 'Snake Plant',
      description: 'Select Planter: Cylinder Pot',
      age: 'Plant Age: 2 Months',
      price: 250.75,
      quantity: 1,
      image: require('../../assets/Images/Product_details.png'),
    },
    {
      id: 3,
      title: 'Snake Plant',
      description: 'Select Planter: Cylinder Pot',
      age: 'Plant Age: 2 Months',
      price: 250.75,
      quantity: 1,
      image: require('../../assets/Images/Product_details.png'),
    },
  ]);
  const calculateTotalPrice = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const calculateDiscount = () => {
    // Example discount logic: 10% of the total price
    return calculateTotalPrice() * 0.1;
  };

  const calculateFinalPrice = () => {
    const total = calculateTotalPrice();
    const discount = calculateDiscount();
    return total - discount; // No delivery charges in this example
  };


  const increment = (id: number) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id: number) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeProduct = (id: number) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  const renderProduct = ({ item }: { item: typeof products[0] }) => (
    <LinearGradient
      colors={['rgba(173, 184, 21, 1)', 'rgba(24, 57, 42, 1)']}
      style={styles.gradientCard}
    >
      <View style={styles.cardContent}>
        <Image source={item.image} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.description}>{item.age}</Text>
          <View style={styles.pricecontainer}>
            <Text style={styles.price}>{REMOVESTRING(item.price)}</Text>
            <View style={styles.quantityContainer}>
              <Text style={styles.quantityLabel}>Qty:</Text>
              <LinearGradient
                colors={['rgba(173, 184, 21, 1)', 'rgba(24, 57, 42, 1)']}
                style={styles.gradientBorder}
              >
                <View style={styles.quantityBox}>
                  <TouchableOpacity
                    onPress={() => decrement(item.id)}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity
                    onPress={() => increment(item.id)}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => removeProduct(item.id)}
        >
          <DeleteIcon width={30} height={30} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );

  const renderHeader = () => (
    <TouchableOpacity
      onPress={() => navigation.navigate('AddAddress')}
      activeOpacity={ACTIVE_OPACITY}
    >
      <LinearGradient
        colors={['rgba(173, 184, 21, 1)', 'rgba(24, 57, 42, 1)']}
        style={styles.addressBorder}
      >
        <View style={styles.addresscard}>
          <Text style={styles.addAddressText}>Add New Address</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  const renderFooter = () => (
    <>
      <View style={styles.couponContainer}>
        <CoupanIcon width={40} height={40} />
        <View style={styles.couponTextContainer}>
          <Text style={styles.couponText}>1 Coupon applied</Text>
          <TouchableOpacity>
            <Text style={styles.couponLink}>View more Coupons</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Rightarrow width={50} height={25} />
        </TouchableOpacity>
      </View>

      {/* Price Details Section */}
      <View style={styles.priceDetails}>
        <Text style={styles.priceRow}>
          <DynamicText content="Price Details" />
        </Text>
        <Divider style={styles.dividercontainer} />
        <View style={styles.priceRow}>
          <Text style={styles.priceText}>
            Cart Total ({products.reduce((total, item) => total + item.quantity, 0)} items)
          </Text>
          <Text style={styles.price}>₹{calculateTotalPrice().toFixed(2)}</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.priceText}>Additional Discount</Text>
          <Text style={styles.price}>₹{calculateDiscount().toFixed(2)}</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.priceText}>Delivery Charge</Text>
          <Text style={styles.price}>-</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.finalpricetext}>You Pay</Text>
          <Text style={styles.finalPrice}>₹{calculateFinalPrice().toFixed(2)}</Text>
        </View>
      </View>

      {/* Total & Pay Button */}
      <View style={styles.footer}>
        <View style={styles.footercontainer}>
          <Text style={styles.grandTotal}>₹{calculateFinalPrice().toFixed(2)}</Text>
          <Text style={styles.priceText}>Grand Total</Text>
        </View>
        <TouchableOpacity
          style={styles.payButton}
          activeOpacity={ACTIVE_OPACITY}
          onPress={() => navigation.navigate("OrderSummary")}
        >
          <Text style={styles.payButtonText}>
            Proceed to Pay
            <View style={styles.iconContainer}>
              <Righticon style={styles.Righticon} />
            </View>
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderProduct}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
      contentContainerStyle={styles.container}
    />
  );
};

export default Cart;
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 7,
    paddingVertical: 20
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
    width: width * 0.3, // 30% of screen width
    height: width * 0.2,
    borderRadius: 5,
    marginRight: 15,
    resizeMode:'center'
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
    marginVertical: 3
  },
  deleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 40
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5
  },
  quantityLabel: {
    fontSize: SIZES.body4,
    color: COLORS.HeadingColor,
    marginRight: 5,
    fontFamily: FONTS.AvenirDemi,
  },
  quantityBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 5,
    overflow: 'hidden',
  },
  gradientBorder: {
    borderRadius: 5,
    padding: 2,
  },
  button: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.HeadingColor,
    fontFamily: FONTS.AvenirBold,
    fontSize: 16
  },
  quantityText: {
    width: 35,
    textAlign: 'center',
    fontSize: 14,
    color: COLORS.HeadingColor,
    fontFamily: FONTS.AvenirBold,
    backgroundColor: COLORS.white,
  },
  pricecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  couponContainer: {
    backgroundColor: COLORS.MoodyBlue,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 25,
    marginVertical: 20,
    marginHorizontal: 10
  },
  icon: {
    resizeMode: 'contain',
  },
  couponTextContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginHorizontal: 25
  },
  couponText: {
    fontSize: 16,
    fontFamily: FONTS.AvenirBold,
    color: COLORS.header,
  },
  couponLink: {
    fontSize: 12,
    fontFamily: FONTS.AvenirMedium,
    color: COLORS.header,
    marginTop: 5,
  },
  priceDetails: {
    backgroundColor: COLORS.MoodyBlue,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    marginHorizontal: 10,
    marginVertical: 15,
  },
  priceRow: {
    color: COLORS.black,
    marginVertical: 10,
    flexDirection: 'row', // Aligns text and price in a row
    justifyContent: 'space-between', // Ensures space between the text and price
    alignItems: 'center',
  },
  priceText: {
    fontSize: SIZES.body5,
    fontFamily: FONTS.AvenirDemi,
    color: COLORS.header,
  },
  finalpricetext: {
    fontSize: SIZES.body4,
    fontFamily: FONTS.AvenirBold,
    color: COLORS.header,
  },
  finalPrice: {
    fontSize: SIZES.body4,
    fontFamily: FONTS.AvenirDemi,
    color: COLORS.header,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: COLORS.MoodyBlue,
    borderRadius: 10,
    marginHorizontal: 10
  },
  footercontainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  grandTotal: {
    fontSize: SIZES.body3,
    fontFamily: FONTS.AvenirBold,
    color: COLORS.black,
    marginVertical: 5
  },
  payButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center', // Centers the content horizontally
    justifyContent: 'center', // Centers the content vertically
  },
  payButtonText: {
    fontSize: SIZES.h4,
    fontFamily: FONTS.AvenirBold,
    color: COLORS.white,
    textAlign: 'center',
  },
  iconContainer: {
    paddingHorizontal:10,
  },
  Righticon:{
    top:5,
    bottom:5
  },
  dividercontainer: {
    borderColor: COLORS.white,
    borderWidth: 1, // Adjust thickness
    marginVertical: 5, // Adds padding (top and bottom)
    marginHorizontal: -15
  }
});
