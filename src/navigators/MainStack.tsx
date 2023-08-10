import React from 'react';
import Home from '../pages/Home';
import {createStackNavigator} from "@react-navigation/stack";
import Modules from "../pages/Modules";
import Spell from "../pages/Spell";

const MainStack = createStackNavigator();

const MainStackNavigator = () => {

    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={ Home } options={{
                headerShown:false,
            }}/>
            <MainStack.Screen name="Modules" component={ Modules } options={{
                headerShown:false,
            }}/>
            <MainStack.Screen name="Spell" component={ Spell } options={{
                headerShown:false,
            }}/>
        </MainStack.Navigator>
    );
}

export default MainStackNavigator;