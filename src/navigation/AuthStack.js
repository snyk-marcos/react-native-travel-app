import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import SetPhotoName from '../screens/SetPhotoName';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SetPhotoName" component={SetPhotoName} />
    </Stack.Navigator>
  )
}

export default AuthStack