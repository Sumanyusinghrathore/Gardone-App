import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../themes/theme'
import { ACTIVE_OPACITY } from '../../themes/genericStyles'
import { Divider } from '@rneui/themed'
import Rightarrow from '../../assets/Icons/Rightcoupanicon.svg';
import { ScrollView } from 'react-native-gesture-handler'
import AppButton from '../../components/CustomButton/AppButton'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types';

type NavigationProp = StackNavigationProp<RootStackParamList>;
const OrderSummary = () => {
    const navigation = useNavigation<NavigationProp>();
    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Price Details Section */}
                <View style={styles.priceDetails}>
                    <View>
                        <Text style={styles.heading}>Deliver to <Text style={styles.name}>Sumanyu Singh, 313001</Text> </Text>
                        <Text style={styles.heading}>Geetanjali institute of technical Studies</Text>
                        <Text style={styles.heading}>Dabok,313022 Udaipur,</Text>
                        <Text style={styles.heading}>Rajasthan</Text>
                        <Text style={styles.heading}>India</Text>
                        <Text style={styles.heading}>9876543201</Text>
                    </View>
                    <TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
                        <View style={styles.addressBorder}>
                            <View style={styles.addresscard}>
                                <Text style={styles.addAddressText}>Change Or Add Address</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.OrderDetail}>
                    <Text style={styles.Mainheading}>Order Details</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/Images/Product_details.png')} style={styles.image} />
                        <View style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <Text style={styles.heading}>Monstera Plant</Text>
                            <Text style={styles.heading}>Outdoor</Text>
                        </View>
                    </View>
                    <Divider style={styles.dividercontainer} />
                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.Mainheading}>Price Details</Text>
                        <View style={styles.priceRow}>
                            <Text style={styles.priceText}>
                                Cart Total (3 item)
                            </Text>
                            <Text style={styles.price}>₹ 100</Text>
                        </View>
                        <View style={styles.priceRow}>
                            <Text style={styles.priceText}>Additional Discount</Text>
                            <Text style={styles.price}>₹200</Text>
                        </View>
                        <View style={styles.priceRow}>
                            <Text style={styles.priceText}>Delivery Charge</Text>
                            <Text style={styles.price}>-</Text>
                        </View>
                        <View style={styles.priceRow}>
                            <Text style={styles.finalpricetext}>You Pay</Text>
                            <Text style={styles.finalPrice}>₹ 200</Text>
                        </View>
                    </View>
                    <Divider style={styles.dividercontainer} />
                    <View style={styles.couponContainer}>
                        <View style={styles.couponTextContainer}>
                            <Text style={styles.couponText}>Estimate Delivery Date</Text>
                        </View>
                        <TouchableOpacity>
                            <Rightarrow width={50} height={25} />
                        </TouchableOpacity>
                    </View>
                </View>
                <AppButton
                    title="Proceed to Pay"
                    onPress={()=> navigation.navigate("Payment")} // Replace with your custom function
                    disabled={false} // Set to true if you want to disable the button
                    loading={false}  // Set to true if you want to show the loading state
                />
            </ScrollView>
        </View>
    )
}

export default OrderSummary

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: COLORS.white
    },
    heading: {
        fontSize: 18,
        color: COLORS.HeadingColor,
        fontFamily: FONTS.AvenirRegular,
        marginVertical: 3
    },
    Mainheading: {
        fontSize: 20,
        color: COLORS.HeadingColor,
        fontFamily: FONTS.AvenirBold,
        marginVertical: 3
    },
    name: {
        fontSize: 20,
        color: COLORS.HeadingColor,
        fontFamily: FONTS.AvenirBold
    },
    priceDetails: {
        backgroundColor: COLORS.MoodyBlue,
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        marginHorizontal: 10,
        marginVertical: 15,
    },
    OrderDetail: {
        backgroundColor: COLORS.MoodyBlue,
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        marginHorizontal: 10,
        marginVertical: 15,
    },
    addAddressText: {
        color: COLORS.black,
        fontSize: 18,  // Adjusted font size to fit well in button area
        fontFamily: FONTS.AvenirBold,
        textAlign: 'center', // Ensure text is centered in the button
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
        justifyContent: 'center',
        borderWidth: 1, // Adding border to distinguish the card
        borderColor: COLORS.white, // Optional: Customize border color
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 15,
        resizeMode: 'cover',
        marginVertical: 10
    },
    dividercontainer: {
        borderColor: COLORS.white,
        borderWidth: 1, // Adjust thickness
        marginVertical: 5, // Adds padding (top and bottom)
        marginHorizontal: -15
    },
    priceRow: {
        fontSize: 14,
        fontFamily: FONTS.AvenirDemi,
        color: COLORS.black,
        marginVertical: 10,
        flexDirection: 'row', // Aligns text and price in a row
        justifyContent: 'space-between', // Ensures space between the text and price
        alignItems: 'center',
    },
    priceText: {
        fontSize: 16,
        fontFamily: FONTS.AvenirDemi,
        color: COLORS.header,
    },
    price: {
        fontSize: 14,
        color: COLORS.HeadingColor,
        fontFamily: FONTS.AvenirDemi,
        marginVertical: 5
    },
    finalpricetext: {
        fontSize: 18,
        fontFamily: FONTS.AvenirBold,
        color: COLORS.header,
    },
    finalPrice: {
        fontSize: 18,
        fontFamily: FONTS.AvenirBold,
        color: COLORS.header,
    },
    couponContainer: {
        backgroundColor: COLORS.MoodyBlue,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    icon: {
        resizeMode: 'contain',
    },
    couponTextContainer: {
        flex: 1,
        alignItems: 'flex-start',
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
    },
})
