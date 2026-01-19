import React from 'react';
import {Dimensions} from 'react-native';
import Svg, {Circle, Line, G} from 'react-native-svg';
import { colors } from '../../../theme/index';

interface GameCircleProps{
    angle: number;
    targetAngle: number;
    isGameOver: boolean;
}

const { width } = Dimensions.get('window');
const CIRCLE_SIZE = Math.min(width * 0.75, 350);
const RADIUS = CIRCLE_SIZE/ 2 - 50;
const CENTER = CIRCLE_SIZE / 2;

export const GameCircle: React.FC<GameCircleProps> = ({
    angle,
    targetAngle,
    isGameOver,
}) => {
    const getCoordinates = (degrees: number) => {
        const radians = ((degrees - 90) * Math.PI) / 180;
        return {
            x: CENTER + RADIUS * Math.cos(radians),
            y: CENTER + RADIUS * Math.sin(radians)
        };
    };

    const needlePos = getCoordinates(angle);
    const targetPos = getCoordinates(targetAngle);

    return (
        <Svg width={CIRCLE_SIZE} height={CIRCLE_SIZE}>
            <G>
                <Circle
                    cx = {CENTER}
                    cy = {CENTER}
                    r = {RADIUS}
                    stroke = {colors.game.circle}
                    strokeWidth = "4"
                    fill = "transparent"
                    />
                <Circle
                    cx = {targetPos.x}
                    cy = {targetPos.y}
                    r = "15"
                    fill = {isGameOver? colors.primary : colors.game.target}
                />

                <Line
                    x1 = {CENTER}
                    y1 = {CENTER}
                    x2 = {needlePos.x}
                    y2 = {needlePos.y}
                    stroke = {colors.game.needle}
                    strokeWidth= "5"
                    strokeLinecap="round"
                    />
                <Circle cx={CENTER}
                        cy = {CENTER}
                        r = "10"
                        fill={ colors.game.center} />
            </G>
        </Svg>
    )

}