import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
} from "react-native";
import { useForm } from "react-hook-form";
import { launchImageLibrary } from "react-native-image-picker";
import { COLORS } from "../../themes/theme";
import { ACTIVE_OPACITY } from "../../themes/genericStyles";
import CustomInput from "../../components/CustomInputs/Custominputs"; // Ensure the path is correct
import Pencil from "../../assets/Icons/Pencil.svg";

const UpdateProfile = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      dob: "",
    },
  });

  const pickImage = async () => {
    launchImageLibrary({ mediaType: "photo", quality: 1 }, (response) => {
      if (response.didCancel) return;
      if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        if (uri) {
          setProfileImage(uri);
        }
      }
    });
  };

  const onSubmit = (data: any) => {
    console.log("Updated Profile:", data);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Image */}
      <View style={styles.profileContainer}>
        <Image
          source={
            profileImage
              ? { uri: profileImage }
              : require("../../assets/Images/Profile.jpg")
          }
          style={styles.profileImage}
        />
        <TouchableOpacity
          style={styles.editIcon}
          activeOpacity={ACTIVE_OPACITY}
          onPress={pickImage}
        >
          <Pencil width={30} height={30} />
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <CustomInput
        control={control}
        name="name"
        label="Name"
        placeholder="Enter your name"
        errors={errors}
        rules={{ required: "Name is required" }}
      />
      <CustomInput
        control={control}
        name="phone"
        label="Phone Number"
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        errors={errors}
        rules={{
          required: "Phone number is required",
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Invalid phone number",
          },
        }}
      />
      <CustomInput
        control={control}
        name="email"
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
        errors={errors}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Invalid email format",
          },
        }}
      />
      <CustomInput
        control={control}
        name="dob"
        label="Date of Birth"
        placeholder="YYYY-MM-DD"
        errors={errors}
        rules={{
          required: "Date of Birth is required",
          pattern: {
            value: /^\d{4}-\d{2}-\d{2}$/,
            message: "Invalid date format (YYYY-MM-DD)",
          },
        }}
      />

      {/* Update Profile Button */}
      <TouchableOpacity
        style={styles.Updateprofile}
        activeOpacity={ACTIVE_OPACITY}
        onPress={handleSubmit(onSubmit)}
      >
                <Text style={styles.menuText}>Update Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
    padding: 20,
  },
  profileContainer: {
    position: "relative",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: "absolute",
    bottom: -12,
    marginLeft:'auto',
    right:150,
  },
  Updateprofile: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.HeadingColor, // Adjust color as needed
    padding: 12,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    marginTop: 20,
  },
  menuText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
