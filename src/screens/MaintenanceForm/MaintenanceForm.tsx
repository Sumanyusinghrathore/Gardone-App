import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Uploadimg from '../../assets/Icons/Uploadimg.svg'; // Importing the SVG file
import { launchImageLibrary } from 'react-native-image-picker';
import { COLORS, FONTS } from '../../themes/theme';

const MaintenanceForm = () => {
  const { control, handleSubmit, formState: { errors }, setValue } = useForm();
  const [imageUri, setImageUri] = useState<string | null>(null);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleImageUpload = () => {
    // Launch image picker to open the gallery
    launchImageLibrary({ 
      mediaType: 'photo', 
      quality: 0.5, 
      includeBase64: false 
    }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const selectedImageUri = response.assets?.[0].uri;
        if (selectedImageUri) {
          setImageUri(selectedImageUri); // Set the image URI to state
          setValue('image', selectedImageUri); // Update the form with selected image
        }
      }
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      {/* Image Upload */}
      <View style={styles.uploadContainer}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <View style={styles.uploadWrapper}>
              <TextInput
                style={[styles.input, errors.image && styles.errorInput]}
                placeholder="Upload Image"
                placeholderTextColor={COLORS.HeadingColor}
                editable={false} // Make the input non-editable
                value={imageUri ? "Image Selected" : value}
                onChangeText={onChange}
              />
              {/* Upload icon below the input */}
              <TouchableOpacity onPress={handleImageUpload} style={styles.uploadIconContainer}>
                <Uploadimg width={24} height={24} />
              </TouchableOpacity>
            </View>
          )}
          name="image"
          rules={{ required: 'Image is required' }} // Validation rule
        />
      </View>

      {/* Area Size Input */}
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, errors.areaSize && styles.errorInput]}
            placeholder="Area Size"
            placeholderTextColor={COLORS.HeadingColor}
            value={value}
            onChangeText={onChange}
          />
        )}
        name="areaSize"
        rules={{ required: 'Area Size is required' }}
      />

      {/* Type of Plants Input */}
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, errors.plantType && styles.errorInput]}
            placeholder="Type of Plants"
            placeholderTextColor={COLORS.HeadingColor}
            value={value}
            onChangeText={onChange}
          />
        )}
        name="plantType"
        rules={{ required: 'Type of Plants is required' }}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  uploadContainer: {
    alignItems: 'center', // Center the input and icon below
  },
  uploadWrapper: {
    alignItems: 'center', // Center the input and icon inside the wrapper
    width: "100%", // Ensure it's the same width as the input
  },
  input: {
    height: 50,
    borderColor: COLORS.bordercolor,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 10,
    width: '100%', // Take up full width of the container
    fontSize: 14,
    fontFamily: FONTS.AvenirMedium,
    color: COLORS.HeadingColor
  },
  uploadIconContainer: {
    marginTop: 0, // Space between input and icon
    padding: 10,
    position: 'absolute',
    right: 0
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,  // Adjust distance from bottom
    left: 20,    // Add some horizontal padding
    right: 20,   // Add some horizontal padding
  },
  submitButtonText: {
    color: COLORS.white,
    fontSize: 20,
    fontFamily:FONTS.AvenirBold,
  },
});

export default MaintenanceForm;
