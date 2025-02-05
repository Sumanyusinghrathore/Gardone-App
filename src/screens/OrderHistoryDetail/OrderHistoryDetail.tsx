import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, REMOVESTRING, SIZES } from '../../themes/theme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types';
import { useNavigation } from '@react-navigation/native';
import DynamicText from '../../components/CustomText/DynamicText';
import Star from '../../assets/Icons/Star.svg';

type NavigationProp = StackNavigationProp<RootStackParamList>;
type OrderDetailRouteProp = RouteProp<RootStackParamList, 'OrderDetail'>;

interface Product {
  id: string;
  productName: string;
  plantAge: string;
  status: string;
  image: ImageSourcePropType;
  price: any;
}

const products: Product[] = [
  {
    id: '#1467895',
    productName: 'Monstera Plant',
    plantAge: '2 Months',
    status: 'Buy Again',
    image: require('../../assets/Images/Product_details.png'),
    price: '400.25',
  },
  {
    id: '#1467896',
    productName: 'Aloe Vera',
    plantAge: '2 Years',
    status: 'Buy Again',
    image: require('../../assets/Images/Product_details.png'),
    price: '400.25',
  },
  {
    id: '#1467897',
    productName: 'Snake Plant',
    plantAge: '5 Years',
    status: 'Buy Again',
    image: require('../../assets/Images/Product_details.png'),
    price: '400.25',
  },
];

const OrderHistoryDetail = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<OrderDetailRouteProp>();
  const { order } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <View>
            <View style={styles.orderItem}>
              <View style={styles.orderDetails}>
                <View style={styles.row}>
                  <Text style={styles.orderId}>Order ID: {order.id}</Text>
                  <View style={styles.statusContainer}>
                    <Text style={styles.status}>{order.status}</Text>
                  </View>
                </View>
                <Text style={styles.productName}>{order.productName}</Text>
                <Text style={styles.orderTime}>Ordered at {order.time} | {order.date}</Text>
                <TouchableOpacity>
                  <View style={styles.invoiceBtn}>
                    <Text style={styles.invoiceText}>Download Invoice</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <DynamicText content="Product" />
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <View>
            <Image source={item.image} style={styles.image} />
            <Star width={100}/>
              </View>
            <View style={styles.orderDetails}>
              <View style={styles.row}>
                <Text style={styles.productName}>{item.productName}</Text>
                <View style={styles.statusContainer}>
                  <Text style={styles.status}>{item.status}</Text>
                </View>
              </View>
              <Text style={styles.orderTime}>Plant Age: {item.plantAge}</Text>
              <Text style={styles.orderTime}>{REMOVESTRING(item.price)}</Text>
              <View style={styles.starContainer}>
                <Text style={styles.rateText}>Rate this Product</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default OrderHistoryDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 10,
    backgroundColor: COLORS.cardbgcolor,
    borderRadius: 15,
    marginVertical: 10,
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  orderDetails: {
    flex: 1,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderId: {
    fontSize: 14,
    color: COLORS.HeadingColor,
    fontFamily: FONTS.AvenirDemi,
  },
  productName: {
    fontSize: 14,
    color: COLORS.HeadingColor,
    marginTop: 4,
    fontFamily: FONTS.AvenirLight,
  },
  orderTime: {
    fontSize: 14,
    color: COLORS.HeadingColor,
    marginTop: 4,
    fontFamily: FONTS.AvenirLight,
  },
  statusContainer: {
    backgroundColor: COLORS.HeadingColor,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
  },
  invoiceBtn: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: '50%',
    marginVertical: 10,
  },
  invoiceText: {
    color: COLORS.HeadingColor,
    fontSize: SIZES.body5,
    textAlign: 'center',
    fontFamily: FONTS.AvenirRegular,
  },
  status: {
    color: COLORS.white,
    fontSize: SIZES.body4,
    fontFamily: FONTS.AvenirRegular,
    textAlign: 'center',
  },
  starContainer: {
    alignItems: 'flex-end',
    marginTop: 5,
  },
  rateText: {
    fontSize: SIZES.body3,
    color: COLORS.HeadingColor,
    marginLeft: 5,
    fontFamily: FONTS.AvenirDemi,
  },
});
