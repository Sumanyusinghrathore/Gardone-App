import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ViewStyle, TextStyle, StyleProp } from 'react-native';
import { COLORS, FONTS } from '../../themes/theme';
import { ACTIVE_OPACITY } from '../../themes/genericStyles';

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
            activeOpacity={ACTIVE_OPACITY}
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
        width: '95%',
        height: 50,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical:5,
        marginLeft:'auto',
        marginRight:'auto'
        
    },
    registerButtonText: {
        color: COLORS.white,
        fontSize: 20,
        fontFamily:FONTS.AvenirBold,
    },
    disabledButton: {
        backgroundColor: COLORS.gray, // Adjust based on the disabled state
    },
});
