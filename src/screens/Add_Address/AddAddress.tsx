import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Alert,
} from "react-native";
import { useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/types";
import CustomInput from "../../components/CustomInputs/Custominputs"; // Updated to match your component location
import { COLORS, FONTS } from "../../themes/theme";

// Define the form data structure
type FormData = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    country: string;
    pinCode: string;
    city: string;
    state: string;
    addressLine1: string;
    addressLine2: string;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

const AddAddress = () => {
    const navigation = useNavigation<NavigationProp>();
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            // Fetch existing addresses
            const storedAddresses = await AsyncStorage.getItem("addressData");
            const addressList = storedAddresses ? JSON.parse(storedAddresses) : []; // Default to an empty array if null

            // Ensure addressList is an array
            if (!Array.isArray(addressList)) {
                throw new Error("Stored data is not an array");
            }

            // Add the new address to the list
            const newAddress = {
                id: addressList.length > 0 ? addressList[addressList.length - 1].id + 1 : 1, // Generate a unique ID
                ...data,
            };

            const updatedAddressList = [...addressList, newAddress];

            // Store the updated address list back into AsyncStorage
            await AsyncStorage.setItem("addressData", JSON.stringify(updatedAddressList));

            Alert.alert("Success", "Address added successfully!");

            // Reset form and navigate back
            reset();
            navigation.goBack();  // Replace "Address" with the correct screen name
        } catch (e) {
            console.error("Error saving address data:", e);
            Alert.alert("Error", "Failed to save the address. Please try again.");
        }
    };



    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Personal Information</Text>
            <CustomInput
                control={control}
                name="firstName"
                label="First Name"
                placeholder="Enter your first name"
                rules={{ required: "First Name is required" }}
                errors={errors}
            />
            <CustomInput
                control={control}
                name="lastName"
                label="Last Name"
                placeholder="Enter your last name"
                rules={{ required: "Last Name is required" }}
                errors={errors}
            />
            <CustomInput
                control={control}
                name="phoneNumber"
                label="Phone Number"
                placeholder="Enter your phone number"
                rules={{
                    required: "Phone Number is required",
                    minLength: {
                        value: 10, // Minimum 10 digits
                        message: "Phone number must be at least 10 digits"
                    },
                    maxLength: {
                        value: 15, // Maximum 15 digits
                        message: "Phone number must not exceed 15 digits"
                    },
                    pattern: {
                        value: /^[0-9]{10,15}$/, // Ensure the value is numeric and has between 10 to 15 digits
                        message: "Phone number must be a valid number (10-15 digits)"
                    }
                }}
                keyboardType="numeric"
                errors={errors}
            />


            <Text style={styles.heading}>Shipping Address</Text>
            <CustomInput
                control={control}
                name="country"
                label="Country"
                placeholder="Enter your country"
                rules={{ required: "Country is required" }}
                errors={errors}
            />
            <CustomInput
                control={control}
                name="pinCode"
                label="PIN Code"
                placeholder="Enter your PIN code"
                rules={{ required: "PIN Code is required" }}
                keyboardType="numeric"
                errors={errors}
            />
            <CustomInput
                control={control}
                name="city"
                label="City"
                placeholder="Enter your city"
                rules={{ required: "City is required" }}
                errors={errors}
            />
            <CustomInput
                control={control}
                name="state"
                label="State"
                placeholder="Enter your state"
                rules={{ required: "State is required" }}
                errors={errors}
            />
            <CustomInput
                control={control}
                name="addressLine1"
                label="Address Line 1"
                placeholder="Enter your address"
                rules={{ required: "Address Line 1 is required" }}
                errors={errors}
            />
            <CustomInput
                control={control}
                name="addressLine2"
                label="Address Line 2"
                placeholder="Enter additional address details (optional)"
                errors={errors}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default AddAddress;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: COLORS.white,
    },
    heading: {
        fontSize: 18,
        marginBottom: 12,
        color: COLORS.black,
        fontFamily: FONTS.AvenirBold,
        marginVertical: 15
    },
    button: {
        backgroundColor: "#004400",
        paddingVertical: 12,
        alignItems: "center",
        borderRadius: 5,
        marginTop: 16,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
