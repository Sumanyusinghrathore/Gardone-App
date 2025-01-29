import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Platform,
} from 'react-native';
import Select from '../../assets/Icons/Select_circle.svg';
import UnSelect from '../../assets/Icons/Unselect_circle.svg';
import { COLORS, FONTS } from '../../themes/theme';
import { ACTIVE_OPACITY } from '../../themes/genericStyles';
import AppButton from '../../components/CustomButton/AppButton';
import Creditcard from '../../assets/Icons/CreditDebitCard.svg'
import Googlepay from '../../assets/Icons/google-pay.svg'
import Cerd from '../../assets/Icons/Cerd.svg'
import Upi from '../../assets/Icons/PhonePe.svg'
import Netbanking from '../../assets/Icons/Netbanking.svg'
import ApplePay from '../../assets/Icons/ApplePay.svg'
import COD from '../../assets/Icons/cash-on-delivery.svg'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types';

type NavigationProp = StackNavigationProp<RootStackParamList>;
const Payment = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const navigation = useNavigation<NavigationProp>();

    const paymentOptions = [
        { label: 'Credit/Debit Card', icon: <Creditcard width={24} height={24} /> },
        { label: 'Google Pay', icon: <Googlepay width={24} height={24} /> },
        { label: 'CRED', icon: <Cerd width={24} height={24} /> },
        { label: 'UPI', icon: <Upi width={24} height={24} /> },
        { label: 'Net Banking', icon: <Netbanking width={24} height={24} /> },
        ...(Platform.OS === 'ios'
            ? [{ label: 'Apple Pay', icon: <ApplePay width={24} height={24} /> }]
            : []),
        { label: 'Cash On Delivery', icon: <COD width={24} height={24} /> },
    ];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.margintop}>
                    {/* Credit & Debit Card Section */}
                    <Text style={styles.heading}>Credit & Debit Card</Text>
                    <TouchableOpacity
                        activeOpacity={ACTIVE_OPACITY}
                        style={styles.optionContainer}
                        onPress={() => setSelectedOption('Add New Card')}
                    >
                        <Creditcard width={24} height={24} />
                        <Text style={styles.optionLabel}>Add New Card</Text>
                        {selectedOption === 'Add New Card' ? (
                            <Select width={24} height={24} />
                        ) : (
                            <UnSelect width={24} height={24} />
                        )}
                    </TouchableOpacity>
                </View>

                {/* More Payment Options */}
                <View style={styles.margintop}>
                    <Text style={styles.heading}>More Payment Option</Text>
                    {paymentOptions.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.optionContainer}
                            onPress={() => setSelectedOption(option.label)}
                            activeOpacity={ACTIVE_OPACITY}
                        >
                            {option.icon}
                            <Text style={styles.optionLabel}>{option.label}</Text>
                            {selectedOption === option.label ? (
                                <Select width={24} height={24} />
                            ) : (
                                <UnSelect width={24} height={24} />
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            {/* Pay Now Button */}
            <AppButton
                title="Pay Now"
                onPress={() => navigation.navigate('OrderConfirmed')}
                disabled={false} // Disables the button if no payment option is selected
                loading={false} // Replace with true to show a loading spinner
            />
        </View>
    );
};

export default Payment;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 20
    },
    heading: {
        fontSize: 18,
        color: COLORS.HeadingColor,
        fontFamily: FONTS.AvenirBold,
        marginVertical: 10
    },
    scrollContainer: {
        paddingBottom: 16,
    },
    margintop: {
        marginVertical: 15
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 8,
        backgroundColor: COLORS.MoodyBlue,
        marginVertical: 10,
    },
    optionLabel: {
        flex: 1,
        marginLeft: 16,
        fontSize: 14,
        color: COLORS.black,
        fontFamily: FONTS.AvenirDemi
    },
    payNowButton: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 16,
    },
    payNowText: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
});
