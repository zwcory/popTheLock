import AsyncStorage from '@react-native-async-storage/async-storage';

const HIGH_SCORE_KEY = '@pop_the_lock_high_score';

export class GameService {
    static async getHighScore(): Promise<number> {
        try{
            const score = await AsyncStorage.getItem(HIGH_SCORE_KEY);
            return score ? parseInt(score, 10): 0;
        } catch (error){
            console.error('Error Loading High Score:' , error);
            return 0;
        }
    }

    static async setHighScore(score: number): Promise<void> {
        try {
            await AsyncStorage.setItem(HIGH_SCORE_KEY, score.toString());
        } catch (error) {
            console.error('Error Saving High Score:' , error);
        }
    }

    static calculateAngleDifference(
        angle1: number,
        angle2: number

    ): number {
        const diff = Math.abs(angle1 - angle2);
        return Math.min(diff, 360-diff);
    }

    static normalizeAngle(angle: number): number {
        return ((angle % 360 + 360) % 360);
    }

    static generateRandomTarget(): number{
        return Math.random() * 360;
    }

    static isHit(
        currentAngle: number,
        targetAngle: number,
        tolerance: number
    ): boolean {
        const diff = this.calculateAngleDifference(currentAngle, targetAngle);
        return diff <= tolerance;
    }
}