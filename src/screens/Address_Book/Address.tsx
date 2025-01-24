import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, FONTS } from "../../themes/theme";
import { ACTIVE_OPACITY } from "../../themes/genericStyles";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/types";
import { StackNavigationProp } from "@react-navigation/stack";

type NavigationProp = StackNavigationProp<RootStackParamList>;

const Address = () => {
  const [selectedAddressId, setSelectedAddressId] = useState(1); // Default select first address
  const [addresses, setAddresses] = useState<any[]>([]); // To store the list of addresses
  const navigation = useNavigation<NavigationProp>();

  // Fetch addresses from AsyncStorage
  const fetchAddresses = async () => {
    try {
      const storedAddresses = await AsyncStorage.getItem("addressData");
      console.log("Stored Addresses:", storedAddresses);
      if (storedAddresses) {
        let parsedAddresses = JSON.parse(storedAddresses);
        if (!Array.isArray(parsedAddresses)) {
          parsedAddresses = [parsedAddresses];
        }
        // Add an id to addresses if not present
        const addressesWithId = parsedAddresses.map((address: any , index: any) => ({
          id: address.id || index + 1, // Assign a unique id if missing
          ...address,
        }));
        setAddresses(addressesWithId);
      } else {
        setAddresses([]);
      }
    } catch (e) {
      console.error("Error fetching addresses:", e);
    }
  };

  const handleAddNewAddress = () => {
    navigation.navigate('AddAddress'); // Navigate to AddAddress screen
  };

  const handleSelectAddress = (id: any) => {
    setSelectedAddressId(id);
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchAddresses();
    }, [])
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <Text style={styles.headingText}>Delivery Address</Text>
          <TouchableOpacity
            activeOpacity={ACTIVE_OPACITY}
            style={styles.addButton}
            onPress={handleAddNewAddress}
          >
            <Text style={styles.addButtonText}>Add New</Text>
          </TouchableOpacity>
        </View>

        {addresses.length > 0 ? (
          addresses.map((address) => (
          <TouchableOpacity
            key={address.id}
            activeOpacity={1}
            onPress={() => handleSelectAddress(address.id)}
          >
            {selectedAddressId === address.id ? (
              <LinearGradient
              colors={["rgba(173, 184, 21, 1)", "rgba(24, 57, 42, 1)"]}
              style={styles.testimonialBorder}
            >
              <View style={styles.testimonial}>
                <Text style={styles.addressname}>Hello {address.firstName} {address.lastName}</Text>
                <Text style={styles.addresstext}>
                  {address.addressLine1}
                </Text>
                <Text style={styles.addresstext}>
                  {address.addressLine2},{address.pinCode} {address.city}
                </Text>
                <Text style={styles.addresstext}>{address.state}</Text>
                <Text style={styles.addresstext}>
                  {address.country}
                </Text>
                <Text style={styles.addresstext}>
                  {address.phoneNumber}
                </Text>
                
              </View>
            </LinearGradient>
            ) : (
                <View style={[styles.testimonialBorder, styles.defaultBorder]}>
                  <View style={styles.testimonial}>
                <Text style={styles.addressname}>Hello {address.firstName} {address.lastName}</Text>
                <Text style={styles.addresstext}>
                  {address.addressLine1}
                </Text>
                <Text style={styles.addresstext}>
                  {address.addressLine2},{address.pinCode} {address.city}
                </Text>
                <Text style={styles.addresstext}>{address.state}</Text>
                <Text style={styles.addresstext}>
                  {address.country}
                </Text>
                <Text style={styles.addresstext}>
                  {address.phoneNumber}
                </Text>
                
              </View>
                </View>
              )}
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noAddressText}>No addresses found.</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headingText: {
    fontSize: 18,
    color: COLORS.black,
    marginLeft: 10,
    fontFamily: FONTS.AvenirBold,
  },
  addButton: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: 10,
  },
  addButtonText: {
    fontSize: 18,
    color: '#729513',
    fontFamily: FONTS.AvenirBold,
  },
  testimonialBorder: {
    borderRadius: 10,
    marginRight: 20,
    padding: 2,
    marginVertical: 10,
    marginLeft: 10,
  },
  defaultBorder: {
    borderWidth: 1,
    borderColor: "#EDEDED",
    borderRadius: 10,
    marginRight: 20,
    padding: 2,
    marginVertical: 10,
    marginLeft: 10,
  },
  testimonial: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 20,
    width: '100%',
  },
  addressname: {
    fontSize: 18,
    color: "#191C1F",
    marginBottom: 5,
    fontFamily: FONTS.AvenirBold,
  },
  addresstext: {
    fontSize: 16,
    color: COLORS.header,
    marginBottom: 5,
    fontFamily: FONTS.AvenirDemi,
  },
  noAddressText: {
    textAlign: "center",
    fontSize: 16,
    color: COLORS.gray,
    fontFamily: FONTS.AvenirRegular,
    marginTop: 20,
  },
});
