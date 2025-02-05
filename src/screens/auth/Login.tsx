import React, { useState } from 'react';
import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Facebook from '../../assets/Icons/FbIcon.svg';
import Google from '../../assets/Icons/GoogleIcon.svg';
import Appleid from '../../assets/Icons/AppleIcon.svg';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS, FONTS, SIZES } from '../../themes/theme';
import { LinearGradientText } from 'react-native-linear-gradient-text'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; // Import this
import { RootStackParamList } from '../../routes/types';
import AppButton from '../../components/CustomButton/AppButton';
import { navigationStateType, useApp } from '../../context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

type NavigationProp = StackNavigationProp<RootStackParamList>;
const Login = () => {
    const navigation = useNavigation<NavigationProp>();
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const appContext = useApp();

    const onSubmit = (data: any) => {
        console.log(data); // Replace with actual login logic
        console.log(Facebook);
    };

    const ClickSkip = async () => {
        try {
            const dummyId = "12345";
            await AsyncStorage.setItem('userData', JSON.stringify({ id: dummyId }));
            console.log("Dummy ID saved:", dummyId);
            appContext?.setNavigationState(navigationStateType.HOME);

        } catch (error) {
            console.error("Error saving data:", error);
        }
    };



    return (
        <View style={styles.container}>
            <ScrollView>
                <View >
                    <Image
                        source={require('../../assets/Logo/logo.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />

                    <Text style={styles.headerText}>Log in to your Account</Text>

                    <Controller
                        control={control}
                        name="email"
                        rules={{ required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' } }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                            
                                style={[styles.input, errors.email && styles.inputError]}
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
                    {/* {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>} */}

                    <Controller
                        control={control}
                        name="password"
                        rules={{ required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    style={[styles.input, errors.password && styles.inputError]}
                                    placeholder="Password"
                                    placeholderTextColor="#aaa"
                                    secureTextEntry={!isPasswordVisible}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                    <FontAwesome
                                        name={isPasswordVisible ? 'eye-slash' : 'eye'}
                                        size={20}
                                        color={COLORS.primary} // You can adjust the color based on your theme
                                        style={styles.togglePasswordVisibility}
                                    />
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                    {/* {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>} */}

                    <TouchableOpacity style={styles.forgotPasswordButton}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>



                    <View style={styles.socialButtonsContainer}>
                        <TouchableOpacity style={[styles.socialButton]}>
                            <View style={styles.iconAndText}>
                                <Google width={30} height={30} style={styles.icon} />
                                <Text style={styles.socialButtonText}>Continue with Google</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.socialButton]}>
                            <View style={styles.iconAndText}>
                                <Facebook width={30} height={30} style={styles.icon} />
                                <Text style={styles.socialButtonText}>Continue with Facebook</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.socialButton]}>
                            <View style={styles.iconAndText}>
                                <Appleid width={30} height={30} style={styles.icon} />
                                <Text style={styles.socialButtonText}>Continue with Apple</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <AppButton
                        title="Log In"
                        onPress={handleSubmit(onSubmit)} // Replace with your custom function
                        disabled={false} // Set to true if you want to disable the button
                        loading={false}  // Set to true if you want to show the loading state
                    />

                    <View style={styles.signUpContainer}>
                        <Text style={styles.signUpText}>Don't have an account yet?  </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.skipButton}>
                            <LinearGradientText
                                colors={['#ADB815', '#18392A']}
                                text='Sign Up'
                                start={{ x: 0.5, y: 0 }}  // Start at the top center
                                end={{ x: 0.5, y: 1 }}
                                textStyle={styles.signUpLink}
                                textProps={{ allowFontScaling: true }}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={styles.skipButton}
                        onPress={ClickSkip}
                    >
                        <LinearGradientText
                            colors={['#ADB815', '#18392A']}
                            text="Skip"
                            start={{ x: 0.5, y: 0 }} // Start at the top center
                            end={{ x: 0.5, y: 1 }}
                            textStyle={styles.skipButtonText}
                            textProps={{ allowFontScaling: true }}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    headerText: {
        fontSize: SIZES.h3,
        marginBottom: 20,
        color: COLORS.header,
        textAlign: 'center',
        fontFamily:FONTS.AvenirBold
    },
    input: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: COLORS.bordercolor,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: COLORS.white,
        color: COLORS.header
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    passwordContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    eyeIcon: {
        marginLeft: -50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        paddingTop: 10
    },
    forgotPasswordButton: {
        alignSelf: 'flex-end',
        marginBottom: 20,
    },
    forgotPasswordText: {
        color: COLORS.header,
        fontSize: 14,
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginBottom: 20,
    },
    loginButtonText: {
        color: COLORS.white,
        fontSize: 20,
        fontFamily:FONTS.AvenirBold
    },
    socialButtonsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    socialButton: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginHorizontal: 25,
        marginVertical: 10,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        backgroundColor: COLORS.white,
    },
    socialButtonText: {
        color: COLORS.header,
        fontSize: 16,
        fontFamily:FONTS.AvenirRegular
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    signUpText: {
        fontSize: 14,
        color: '#333',
    },
    signUpLink: {
        color: '#007BFF',
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 14
    },
    skipButton: {
        marginTop: 10,

    },
    skipButtonText: {
        color: '#007BFF',
        fontSize: 16,
        textDecorationLine: 'underline',
        textAlign: 'center'
    },
    iconAndText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    signUpButtonText: {
        fontSize: 16,
        color: '#007bff', // Example color for the link text
        textDecorationLine: 'underline', // Optional for a link effect
    },
    togglePasswordVisibility: {
        marginLeft: -50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        paddingTop: 10,
        color: COLORS.primary,
    },
});