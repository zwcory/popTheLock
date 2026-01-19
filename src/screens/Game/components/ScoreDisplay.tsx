import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../../theme/index';
import { spacing } from '../../../theme/index';


interface ScoreDisplayProps {
    score: number;
    highScore: number;
}

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
    score,
    highScore,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pop the Lock</Text>
            <View style={styles.scoreContainer}>
                <Text style={styles.scoreLabel}>Score</Text>
                <Text style={styles.scoreLabel}>{score}</Text>
            </View>
            <Text style={styles.highScore}>Best: {highScore} </Text>
        </View>
);
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: spacing.lg,
    },
    title: {
        fontSize : 32,
        fontWeight: 'bold',
        color: colors.text.primary,
        marginBottom: spacing.md,
    },
    scoreContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: spacing.sm,
    },
    scoreLabel: {
        fontSize: 18,
        color: colors.text.secondary,
        marginRight: spacing.sm,
    },
    score: {
        fontSize: 48,
        fontWeight: 'bold',
        color: colors.text.accent,
    },
    highScore: {
        fontSize: 16,
        color: colors.text.secondary,
    },
});