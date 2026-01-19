import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { GameScreen } from './src/screens/Game';

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <GameScreen />
        </>
    );
}