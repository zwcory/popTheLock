import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
    async get<T>(key: string): Promise<T | null> {
        try {
            const value = await AsyncStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.error('Storage get error:', error);
            return null;
        }
    },

    async set<T>(key: string, value: T): Promise<void> {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Storage set error:', error);
        }
    },

    async remove(key: string): Promise<void> {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.error('Storage remove error:', error);
        }
    },

    async clear(): Promise<void> {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.error('Storage clear error:', error);
        }
    },
};