import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from  '@react-navigation/stack';

import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const Navigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen name="Home" component={OnboardingScreen} options={{headerShown: false}} />

                <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}} />
              
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}} />

                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
               
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;