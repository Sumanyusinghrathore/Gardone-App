import React, { useRef, useState } from "react";
import { View, Image, StyleSheet, FlatList, Dimensions, Text, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; // Import this
import { RootStackParamList } from '../../routes/types';

type NavigationProp = StackNavigationProp<RootStackParamList>;
const Onboarding = () => {
    const navigation = useNavigation<NavigationProp>();
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    const { width, height } = Dimensions.get("window");

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

    const handleLogin = () => {
        console.log("Login button clicked!");
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
                        backgroundColor: index === currentIndex ? "#fff" : "#bbb",
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
                    <TouchableOpacity style={[styles.button, { left: 300, marginBottom: 20 }]} onPress={handleNext}>
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
                        <TouchableOpacity style={[styles.loginButton, { marginBottom: 20 }]} onPress={handleLogin}>
                            <Text style={styles.buttonTextRight}>Get Started</Text>
                        </TouchableOpacity>
                        <Text style={styles.textContainer}>
                            Already have an account?{' '}
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.linkText}>Log in</Text>
                            </TouchableOpacity>
                        </Text>
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
        backgroundColor: "#064e3b",
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
        color: "#fff",
        fontSize: 26,
        paddingHorizontal: 40,
        marginBottom: 600,
        textAlign: "center",
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
        width: "80%",
        marginTop: 20,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
    },
    buttonTextRight: {
        color: "#154E3B",
        fontSize: 20,
    },
    rightButton: {
        position: "absolute",
        right: 0,
    },
    buttonloginContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 30
    },
    loginButton: {
        backgroundColor: "#ffffff",
        borderRadius: 5,
        marginTop: 20,
        alignItems: "center",
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 50,
        width: '80%',
    },
    textContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    linkText: {
        fontSize: 20,
        color: '#ffffff',
    },
});
