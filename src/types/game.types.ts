export interface GameState {
    angle: number;
    targetAngle: number;
    score: number;
    highScore: number;
    gameOver: boolean;
    clockwise: boolean;
    isPaused: boolean;
}

export interface GameConfig {
    rotationSpeed: number;
    tolerance: number;
    difficulty: 'easy' | 'medium' | 'hard';
}

export const DIFFICULTY_SETTINGS: Record <
    GameConfig['difficulty'],
    {speed: number; tolerance: number}
    > = {
    easy: {speed: 2, tolerance: 20},
    medium: {speed: 3, tolerance: 15},
    hard: {speed: 4, tolerance: 10},
};