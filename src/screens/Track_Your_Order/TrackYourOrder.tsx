import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, FONTS, REMOVESTRING, SIZES } from '../../themes/theme';
import Order_Placed from '../../assets/Icons/Order_Place.svg';
import Order_Dispatched from '../../assets/Icons/Dispatched.svg';
import Order_inTransit from '../../assets/Icons/Order_in_Transit.svg';
import Order_Successful from '../../assets/Icons/Delivery_Successful.svg';
import { ScrollView } from 'react-native-gesture-handler';

const TrackYourOrder = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.card}>
                    <Text style={styles.title}>My Orders</Text>
                    <View style={styles.cardContent}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../../assets/Images/Houseplant.png')}
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>Monstera Plant</Text>
                            <Text style={styles.subtitle}>Outdoor</Text>
                            <Text style={styles.subtitle}>{REMOVESTRING(200)}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginHorizontal: 40, marginVertical: 20 }}>
                    {/* Repeat for each order */}
                    {[
                        { status: 'Order Placed', time: 'June 10, 2024 | 4:00 pm', icon: <Order_Placed width={70} height={70} /> },
                        { status: 'Order Dispatched', time: 'June 12, 2024 | 10:30 am', icon: <Order_Dispatched width={70} height={70} /> },
                        { status: 'Order in Transit', time: 'June 14, 2024 | 2:15 pm', icon: <Order_inTransit width={70} height={70} /> },
                        { status: 'Delivery Successful', time: 'June 15, 2024 | 5:00 pm', icon: <Order_Successful width={70} height={70} /> }
                    ].map((orderStatus, index, array) => (
                        <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 60 }}>
                            <View style={styles.iconContainer}>
                                {orderStatus.icon}
                                {/* Hide bottomBorder for last item */}
                                {index !== array.length - 1 && <View style={styles.bottomBorder} />}
                            </View>
                            <View style={{ marginHorizontal: 15 }}>
                                <Text style={styles.title}>{orderStatus.status}</Text>
                                <Text style={styles.subtitle}>{orderStatus.time}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default TrackYourOrder;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    card: {
        backgroundColor: COLORS.cardbgcolor,
        marginHorizontal: 20,
        borderRadius: 10,
        padding: 10,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginVertical: 10,
    },
    imageContainer: {
        backgroundColor: COLORS.white,
        padding: 2,
        borderRadius: 5,
    },
    image: {
        width: 100, // Responsive width
        height: 100,
        borderRadius: 5,
        resizeMode: 'contain', // Fit image inside the container
    },
    iconContainer: {
        alignItems: 'center',
        position: 'relative',
    },
    bottomBorder: {
        position: 'absolute', // Position it under the image
        top: '100%', // Position at the bottom of the icon container
        left: '50%', // Center the line horizontally
        width: 2, // Width of the dashed line (thickness)
        height: '100%', // Height of the dashed line (adjust based on the content height)
        borderWidth: 1, // Border thickness
        borderColor: COLORS.linecolor, // Border color (can be customized)
        borderStyle: 'dashed', // Dashed line style
        transform: [{ translateX: -0 }], // Center line by adjusting position
    },
    textContainer: {
        marginLeft: 10,
    },
    title: {
        color: COLORS.HeadingColor,
        fontFamily: FONTS.AvenirDemi,
        fontSize: SIZES.h4,
    },
    subtitle: {
        color: COLORS.HeadingColor,
        fontFamily: FONTS.AvenirLight,
        fontSize: SIZES.body5,
    },
});
