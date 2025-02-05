import { Divider } from '@rneui/themed';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS } from '../../themes/theme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types';
import { useNavigation } from '@react-navigation/native';



type NavigationProp = StackNavigationProp<RootStackParamList>;

interface Order {
  id: string;
  productName: string;
  time: string;
  date: string;
  status: string;
  image: any;
}

const orders: Order[] = [
  {
    id: '#1467895',
    productName: 'Monstera Plant',
    time: '4:00 PM',
    date: 'June 10, 2024',
    status: 'Pending',
    image: require('../../assets/Images/Houseplant.png'),
  },
  {
    id: '#1467896',
    productName: 'Aloe Vera',
    time: '3:30 PM',
    date: 'June 8, 2024',
    status: 'Delivered',
    image: require('../../assets/Images/Houseplant.png'),
  },
  {
    id: '#1467897',
    productName: 'Snake Plant',
    time: '2:15 PM',
    date: 'June 5, 2024',
    status: 'Delivered',
    image: require('../../assets/Images/Houseplant.png'),
  },
];

const OrderHistory = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
         <View>
           <TouchableOpacity onPress={()=> (navigation.navigate("OrderDetail", { order: item }))}>
           <View style={styles.orderItem}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.orderDetails}>
              {/* Order ID and Status in the same row */}
              <View style={styles.row}>
                <Text style={styles.orderId}>Order ID : {item.id}</Text>
                <View style={styles.statusContainer}>
                  <Text style={styles.status}>{item.status}</Text>
                </View>
              </View>
              <Text style={styles.productName}>{item.productName}</Text>
              <Text style={styles.orderTime}>
                Order at {item.time} | {item.date}
              </Text>
            </View>
          </View>
           </TouchableOpacity>
            <Divider style={styles.dividercontainer}/>
          </View>
        )}
        />
    </View>
  );
};

export default OrderHistory;

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
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    objectFit:'contain'
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
    fontFamily:FONTS.AvenirDemi
  },
  productName: {
    fontSize: 14,
    color: COLORS.HeadingColor,
    marginTop: 4,
    fontFamily:FONTS.AvenirLight
  },
  orderTime: {
    fontSize: 14,
    color: COLORS.HeadingColor,
    marginTop: 4,
    fontFamily:FONTS.AvenirLight
  },
  statusContainer: {
    backgroundColor: COLORS.HeadingColor,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius:5
  },
  status: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  dividercontainer:{
        borderColor: COLORS.MoodyBlue, 
        borderWidth: 0.5, // Adjust thickness
        marginVertical: 10, // Adds padding (top and bottom)
        marginHorizontal:0
    }
});
