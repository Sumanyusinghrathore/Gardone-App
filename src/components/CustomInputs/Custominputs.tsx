import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { Controller } from "react-hook-form";
import { COLORS, FONTS } from "../../themes/theme"; // Assuming you have defined COLORS and FONTS in your theme

type CustomInputProps = {
  control: any;
  name: string;
  label: string; // Added label for the input
  placeholder: string;
  rules?: object;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  errors: any;
};

const CustomInput: React.FC<CustomInputProps> = ({
  control,
  name,
  label,
  placeholder,
  rules = {},
  keyboardType = "default",
  errors,
}) => {
  return (
    <View style={styles.container}>
      {/* Input Label */}
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={[styles.input, errors[name] && styles.inputError]}
            //   placeholder={placeholder}
              placeholderTextColor="#999"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType={keyboardType}
            />
            {/* Error Message */}
            {/* {errors[name] && (
              <Text style={styles.errorText}>
                {errors[name]?.message || "This field is required"}
              </Text>
            )} */}
          </>
        )}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: COLORS.black, // Label text color
    marginBottom: 5,
    fontFamily: FONTS.AvenirDemi,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.black, // Black border color for input
    borderRadius: 10,
    padding: 8,
    fontSize: 12,
    color: COLORS.black, // Black input text color
    backgroundColor: COLORS.white,
    fontFamily: FONTS.AvenirDemi,
  },
  inputError: {
    borderColor: COLORS.red, // Red border on error
  },
  errorText: {
    color: COLORS.red,
    fontSize: 12,
    marginTop: 4,
    fontFamily: FONTS.AvenirDemi,
  },
});
