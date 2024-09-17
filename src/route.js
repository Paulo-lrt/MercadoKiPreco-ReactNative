import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import DetailsMercado from './pages/DetailsMercado';
import DetailsHortifruti from './pages/DetailsHortifruti';
import DetailsAcougue from './pages/DetailsAcougue';
import DetailsPadaria from './pages/DetailsPadaria';

const Stack = createStackNavigator();

export default function Route(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
                <Stack.Screen name="DetailsMercado" component={DetailsMercado}/>
                <Stack.Screen name="DetailsHortifruti" component={DetailsHortifruti}/>
                <Stack.Screen name="DetailsPadaria" component={DetailsPadaria}/>
                <Stack.Screen name="DetailsAcougue" component={DetailsAcougue}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
