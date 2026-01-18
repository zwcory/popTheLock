import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, fontSize } from '../theme';

export function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Text style={styles.subtitle}>Expo Template Working! 🚀</Text>
            <Text style={styles.platform}>iOS + Android Support ✅</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        padding: spacing.md,
    },
    title: {
        fontSize: fontSize.xl,
        color: colors.text,
        fontWeight: 'bold',
        marginBottom: spacing.sm,
    },
    subtitle: {
        fontSize: fontSize.md,
        color: colors.textSecondary,
        marginBottom: spacing.xs,
    },
    platform: {
        fontSize: fontSize.sm,
        color: colors.primary,
    },
});