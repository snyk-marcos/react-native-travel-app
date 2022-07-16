import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import TabNav from './TabNav';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        {/* <Stack.Screen name="HomePage" component={TabNav} /> */}
    </Stack.Navigator>
  )
}

export default AuthStack