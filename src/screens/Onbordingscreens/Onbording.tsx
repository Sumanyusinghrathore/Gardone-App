import React, { useRef, useState } from "react";
import { View, Image, StyleSheet, FlatList, Dimensions, Text, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types';
import { COLORS, FONTS } from "../../themes/theme";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigationStateType, useApp } from '../../context/AppContext';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const Onboarding = () => {
    const navigation = useNavigation<NavigationProp>();
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    const appContext = useApp();
    const { width } = Dimensions.get("window");

    const screens = [
        {
            id: 1,
            text: "Discover, grow, and thrive with ease.",
            image: require("../../assets/Onboarding_Image/Onboarding_Screen1.png"),
        },
        {
            id: 2,
            text: "Trust us to bring your greenery safely and swiftly.",
            image: require("../../assets/Onboarding_Image/Onboarding_Screen2.png"),
        },
        {
            id: 3,
            text: "Seamless plant delivery at your doorstep.",
            image: require("../../assets/Onboarding_Image/Onboarding_Screen3.png"),
        },
    ];

    const handleScroll = (event: any) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(index);
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            flatListRef.current?.scrollToIndex({
                index: currentIndex - 1,
                animated: false,
            });
        }
    };

    const handleNext = () => {
        if (currentIndex < screens.length - 1) {
            setCurrentIndex(currentIndex + 1);
            flatListRef.current?.scrollToIndex({
                index: currentIndex + 1,
                animated: false,
            });
        }
    };

    const Started = async () => {
        try {
            const dummyId = "12345";
            await AsyncStorage.setItem('userData', JSON.stringify({ id: dummyId }));
            console.log("Dummy ID saved:", dummyId);
            appContext?.setNavigationState(navigationStateType.HOME);

        } catch (error) {
            console.error("Error saving data:", error);
        }
    };

    const renderDot = (index: number) => {
        if (currentIndex === screens.length - 1) {
            return null;
        }

        return (
            <View
                key={index}
                style={[
                    styles.dot,
                    {
                        backgroundColor: index === currentIndex ? COLORS.white : COLORS.gray,
                        width: index === currentIndex ? 30 : 10,
                    },
                ]}
            />
        );
    };

    const renderButtons = () => {
        if (currentIndex === 0) {
            return (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, { left: 355, marginBottom: 20 }]} onPress={handleNext}>
                        <Text style={styles.buttonText}>Skip</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else if (currentIndex === 1) {
            return (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, { marginBottom: 20 }]} onPress={handleBack}>
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.rightButton, { marginBottom: 20 }]}
                        onPress={handleNext}
                    >
                        <Text style={styles.buttonText}>Skip</Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (currentIndex === screens.length - 1) {
            return (
                <View style={styles.buttonloginContainer}>
                    <View style={{ flexDirection: 'column' }}>
                    <TouchableOpacity style={[styles.loginButton, { marginBottom: 20 }]} onPress={Started}>
                            <Text style={styles.buttonTextRight}>Get Started</Text>
                    </TouchableOpacity>
                    <View style={styles.textContainer}>
                            <Text style={styles.alreadytext}>Already have an account?{' '}</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.linkText}>Log in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                translucent={true}
                backgroundColor="transparent"
            />
            <FlatList
                ref={flatListRef}
                horizontal
                pagingEnabled
                data={screens}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={[styles.slide, { width }]}>
                        <Image source={item.image} style={styles.image} resizeMode="cover" />
                        {item.text && <Text style={styles.text}>{item.text}</Text>}
                    </View>
                )}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            />

            <View style={styles.dotContainer}>
                {screens.map((_, index) => renderDot(index))}
            </View>

            {renderButtons()}
        </View>
    );
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#154E3B",
        alignItems: "center",
    },
    slide: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical:'auto'
    },
    image: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    text: {
        color: COLORS.white,
        fontSize: 24,
        paddingHorizontal: 40,
        marginBottom: 600,
        textAlign: "center",
        fontFamily:FONTS.AvenirDemi
    },
    dotContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    dot: {
        height: 10,
        borderRadius: 5,
        margin: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 15,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily:FONTS.AvenirDemi
    },
    buttonTextRight: {
        color: COLORS.buttontext,
        fontSize: 20,
        fontFamily:FONTS.AvenirDemi
    },
    rightButton: {
        position: "absolute",
        right: 0,
    },
    buttonloginContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        bottom:50
    },
    loginButton: {
        backgroundColor: COLORS.white,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 40,
        width: '100%',
    },
    textContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
        flexDirection: 'row',
        alignItems: 'center', // Ensures the text and button are vertically centered
        justifyContent: 'center', // Centers the content horizontally
        marginTop: 5, // Optional: Adjust the top margin if you need space above the text
        marginBottom: 5, // Optional: Adjust the bottom margin if you need space below the text
    },
    alreadytext:{
        fontSize: 14,
        color: COLORS.white,
        fontFamily:FONTS.AvenirDemi
    },
    linkText: {
        fontSize: 14,
        color: COLORS.white,
        fontFamily:FONTS.AvenirBold
    }
});
