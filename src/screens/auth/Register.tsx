import React, { useState } from 'react';
import { Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { COLORS, FONTS, SIZES } from '../../themes/theme'; // Ensure you have this color set
import { LinearGradientText } from 'react-native-linear-gradient-text'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; // Import this
import { RootStackParamList } from '../../routes/types';
import AppButton from '../../components/CustomButton/AppButton';
import { ScrollView } from 'react-native-gesture-handler';

type NavigationProp = StackNavigationProp<RootStackParamList>;
const Register = () => {
    const navigation = useNavigation<NavigationProp>();
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onSubmit = (data: any) => {
        console.log(data); // Replace with actual signup logic
    };

    return (
        <View style={styles.registerContainer}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <ScrollView>
                        <View>
                            <Image
                                source={require('../../assets/Logo/logo.png')}
                                style={styles.image}
                                resizeMode="contain"
                            />
                            <Text style={styles.registerHeader}>Create an Account</Text>

                            <Controller
                                control={control}
                                name="firstName"
                                rules={{ required: 'First Name is required' }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={[styles.inputField, errors.firstName && styles.inputError]}
                                        placeholder="First Name"
                                        placeholderTextColor="#aaa"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="lastName"
                                rules={{ required: 'Last Name is required' }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={[styles.inputField, errors.lastName && styles.inputError]}
                                        placeholder="Last Name"
                                        placeholderTextColor="#aaa"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="email"
                                rules={{
                                    required: 'Email is required',
                                    pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' }
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={[styles.inputField, errors.email && styles.inputError]}
                                        placeholder="Email"
                                        placeholderTextColor="#aaa"
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="phone"
                                rules={{
                                    required: 'Phone Number is required',
                                    pattern: { value: /^[0-9]{10}$/, message: 'Invalid phone number' }
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={[styles.inputField, errors.phone && styles.inputError]}
                                        placeholder="Phone Number"
                                        placeholderTextColor="#aaa"
                                        keyboardType="phone-pad"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="password"
                                rules={{ required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <View style={styles.passwordWrapper}>
                                        <TextInput
                                            style={[styles.inputField, errors.password && styles.inputError]}
                                            placeholder="Password"
                                            placeholderTextColor="#aaa"
                                            secureTextEntry={!isPasswordVisible}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                        />
                                        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                            <FontAwesome
                                                name={isPasswordVisible ? 'eye-slash' : 'eye'} // Change between eye and eye-slash
                                                size={20}
                                                color={COLORS.primary} // You can adjust the color based on your theme
                                                style={styles.togglePasswordVisibility}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                )}
                            />

                        </View>
                        <View style={{ marginTop: 90 }}>
                            <AppButton
                                title="Sign Up"
                                onPress={handleSubmit(onSubmit)} // Replace with your custom function
                                disabled={false} // Set to true if you want to disable the button
                                loading={false}  // Set to true if you want to show the loading state
                            />

                            <View style={styles.loginRedirectContainer}>
                                <Text style={styles.loginText}>Already have an account? </Text>
                                <TouchableOpacity onPress={() => { navigation.navigate("Login") }} style={styles.loginButton}>
                                    <LinearGradientText
                                        colors={['#ADB815', '#18392A']}
                                        text="Sign In"
                                        start={{ x: 0.5, y: 0 }}
                                        end={{ x: 0.5, y: 1 }}
                                        textStyle={styles.loginLink}
                                        textProps={{ allowFontScaling: true }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    registerContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    registerHeader: {
        fontSize: SIZES.h3,
        marginBottom: 20,
        color: COLORS.header,
        textAlign: 'center',
        fontFamily: FONTS.AvenirBold
    },
    inputField: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: COLORS.bordercolor,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: COLORS.white,
        color: COLORS.header,
    },
    inputError: {
        borderColor: 'red',
    },
    passwordWrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    togglePasswordVisibility: {
        marginLeft: -50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        paddingTop: 10,
        color: COLORS.primary,
    },
    loginRedirectContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    loginText: {
        fontSize: 14,
        color: COLORS.HeadingColor,
    },
    loginLink: {
        marginBottom: 10,
        fontSize: 14,
        fontWeight: 'bold',
    },
    loginButton: {
        marginTop: 10,
    },
});
