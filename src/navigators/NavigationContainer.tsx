import React from 'react'
import { NavigationContainer as Container } from '@react-navigation/native';
import MainStack from './MainStack';

const NavigationContainer = () => {
    return (
        <Container>
            <MainStack />
        </Container>
    );
}
export default NavigationContainer;