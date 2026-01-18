import Constants from 'expo-constants';

export const ENV = {
    API_URL: Constants.expoConfig?.extra?.apiUrl || 'http://localhost:3000',
};