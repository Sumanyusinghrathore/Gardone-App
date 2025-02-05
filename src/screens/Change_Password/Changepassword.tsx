import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from "react-native";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInputs/Custominputs";
import { COLORS, FONTS } from "../../themes/theme";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AppButton from "../../components/CustomButton/AppButton";

const ChangePassword = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [secureTextEntry, setSecureTextEntry] = useState({
    current: true,
    new: true,
    confirm: true,
  });

  const toggleSecureEntry = (field: "current" | "new" | "confirm") => {
    setSecureTextEntry((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const onSubmit = (data: any) => {
    console.log("Password Changed Successfully:", data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.inputContainer}>
          {/* Current Password */}
          <View>
            <CustomInput
              control={control}
              name="currentPassword"
              label="Current Password"
              placeholder="Enter current password"
              errors={errors}
              rules={{ required: "Current password is required" }}
            />
            <TouchableOpacity
              style={styles.togglePasswordVisibility}
              onPress={() => toggleSecureEntry("current")}
            >
              <FontAwesome
                name={secureTextEntry.current ? "eye-slash" : "eye"}
                size={20}
                color={COLORS.primary}
              />
            </TouchableOpacity>
            {/* Forgot Password Text */}
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* New Password */}
          <View>
            <CustomInput
              control={control}
              name="newPassword"
              label="New Password"
              placeholder="Enter new password"
              errors={errors}
              rules={{ required: "New password is required" }}
            />
            <TouchableOpacity
              style={styles.togglePasswordVisibility}
              onPress={() => toggleSecureEntry("new")}
            >
              <FontAwesome
                name={secureTextEntry.new ? "eye-slash" : "eye"}
                size={20}
                color={COLORS.primary}
              />
            </TouchableOpacity>
          </View>

          {/* Confirm Password */}
          <View>
            <CustomInput
              control={control}
              name="confirmPassword"
              label="Confirm New Password"
              placeholder="Re-enter new password"
              errors={errors}
              rules={{ required: "Please confirm your new password" }}
            />
            <TouchableOpacity
              style={styles.togglePasswordVisibility}
              onPress={() => toggleSecureEntry("confirm")}
            >
              <FontAwesome
                name={secureTextEntry.confirm ? "eye-slash" : "eye"}
                size={20}
                color={COLORS.primary}
              />
            </TouchableOpacity>
          </View>
        </View>

      {/* Change Password Button at Bottom */}
      <View style={styles.buttonContainer}>
        <AppButton title="Change Password" onPress={handleSubmit(onSubmit)} />
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  inputContainer: {
    flex: 1,
  },
  togglePasswordVisibility: {
    position: "absolute",
    right: 20,
    top: 40, // Adjust based on text input height
  },
  forgotPassword: {
    marginTop: 5,
    alignSelf: "flex-end",
  },
  forgotPasswordText: {
    fontSize: 12,
    color: COLORS.primary,
    fontFamily: FONTS.AvenirDemi,
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: COLORS.white,
  },
});
