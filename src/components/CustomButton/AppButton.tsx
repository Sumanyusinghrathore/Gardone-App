import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ViewStyle, TextStyle, StyleProp } from 'react-native';
import { COLORS } from '../../themes/theme';

interface AppButtonProps {
    disabledTitleStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    disabledStyle?: StyleProp<ViewStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
    onPress?: () => void;
    loading?: boolean;
    title?: string;
    loadingProps?: object;
    children?: React.ReactNode;
}

const AppButton: React.FC<AppButtonProps> = ({
    disabledTitleStyle,
    containerStyle,
    disabledStyle,
    buttonStyle,
    titleStyle,
    disabled,
    onPress,
    loading,
    title,
    loadingProps,
    children,
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.registerButton,
                buttonStyle,
                disabled && styles.disabledButton, // Add disabled style if needed
                containerStyle,
                containerStyle,
            ]}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.7}
        >
            {loading ? (
                <Text style={[styles.registerButtonText, disabledTitleStyle]}>Loading...</Text>
            ) : (
                <Text style={[styles.registerButtonText, titleStyle]}>
                    {title || children}
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default AppButton;

const styles = StyleSheet.create({
    registerButton: {
        width: '100%',
        height: 50,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginBottom: 20,
    },
    registerButtonText: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
    disabledButton: {
        backgroundColor: COLORS.gray, // Adjust based on the disabled state
    },
});
