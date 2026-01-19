import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GameCircle, TapButton, ScoreDisplay } from './components';
import { GameService } from '../../services/GameService';
import { colors, spacing } from '../../theme/index';
import { DIFFICULTY_SETTINGS } from '../../types/game.types';

export const GameScreen = () => {
    const [angle, setAngle] = useState(0);
    const [targetAngle, setTargetAngle] = useState(45);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [clockwise, setClockwise] = useState(true);

    const animationRef = useRef<number | null>(null);
    const difficulty = DIFFICULTY_SETTINGS.medium;

    // Load highScore on mount
    useEffect(() => {
        loadHighScore();
    }, []);

    // Animation Loop
    useEffect(() => {
        if (gameOver) return;

        const animate = () => {
            setAngle((prev) => {
                let newAngle = clockwise
                ? prev + difficulty.speed
                    : prev - difficulty.speed;
                return GameService.normalizeAngle(newAngle);
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [clockwise, gameOver, difficulty.speed]);

    const loadHighScore = async () => {
        const savedHighScore = await GameService.getHighScore();
        setHighScore(savedHighScore);
    };

    const handleTap = async () => {
        if (gameOver) {
            resetGame();
            return;
        }

        const normalizedAngle = GameService.normalizeAngle(angle);
        const isHit = GameService.isHit(
            normalizedAngle,
            targetAngle,
            difficulty.tolerance
        );

        if (isHit) {
            const newScore = score + 1;
            setScore(newScore);
            setTargetAngle(GameService.generateRandomTarget());
            setClockwise(!clockwise);

            if (newScore > highScore) {
                setHighScore(newScore);
                await GameService.setHighScore(newScore);
            }
        } else {
            setGameOver(true);
        }
    };

    const resetGame = () => {
        setScore(0);
        setAngle(0);
        setTargetAngle(GameService.generateRandomTarget());
        setClockwise(true);
        setGameOver(false);
    };

    return (
        <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <ScoreDisplay score={score} highScore={highScore} />

            <View style={styles.gameArea}>
                <GameCircle angle={angle} targetAngle={targetAngle} isGameOver={gameOver}/>

                <View style={styles.buttonContainer}>
                    <TapButton onPress={handleTap} gameOver={gameOver}/>
                </View>

                {gameOver && (
                    <Text style={styles.gameOverText}>Game Over!</Text>
                )}
            </View>
        </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create ({
    container: {
        flex:1 ,
        backgroundColor : colors.background,
    },
    gameArea: {
        flex :1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonContainer: {
        marginTop: spacing.xxl,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gameOverText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.primary,
        marginTop: spacing.xl,
    }
});