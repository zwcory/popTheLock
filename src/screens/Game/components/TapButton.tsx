import React, {useRef} from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Animated,
} from 'react-native';
import {colors} from '../../../theme/index';

interface TapButtonProps {
    onPress: () => void;
    gameOver: boolean;
}

export const TapButton: React.FC<TapButtonProps> = ({
    onPress,
    gameOver,
}) => {
    const scaleValue = useRef(new Animated.Value(1)).current;
    const handlePressIn = () => {
        Animated.spring(scaleValue, {
            toValue: 0.9,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleValue, {
            toValue: 1,
            friction: 3,
            tension: 40,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Animated.View style = {[ styles.container, {transform: [{ scale: scaleValue}]} ]}>
            <TouchableOpacity
                style = {[
                    styles.button,
                    gameOver ? styles.resetButton : styles.tapButton,
                ]}
                onPress={onPress}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                activeOpacity={0.8}
                ></TouchableOpacity>
            <Text style = {styles.buttonText}>
                {gameOver? 'PLAY AGAIN' : 'TAP'}
            </Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems : "center",
    },
    button: {
        width: 140,
        height: 140,
        borderRadius: 70,
        justifyContent: "center",
        alignItems : "center",
        elevation: 8,
        shadowColor : "#000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
    tapButton: {
        backgroundColor: colors.accent,
    },
    resetButton: {
        backgroundColor: colors.secondary
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text.primary,
        letterSpacing: 2,
        justifyContent: "center",
        alignItems : "center",

    },
});