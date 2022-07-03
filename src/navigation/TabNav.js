import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import SplashStackNav from './SplashStackNav';
import Home from '../screens/Home';
import Directions from '../screens/Directions';
import Bookmarks from '../screens/Bookmarks';
import User from '../screens/User';

const Tab = createBottomTabNavigator();

// function SplashNav(){
//     return(
//         <SplashStackNav />
//     );
// }

function TabNav(){
  return (
    <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
            },
            tabBarIcon: ({ focused, iconColor, iconName }) => {
                if (route.name === 'Home'){
                    iconColor = focused ? '#3a86fe' : 'black'
                    iconName = 'home'
                } else if (route.name === 'Directions'){
                    iconColor = focused ? '#3a86fe' : 'black'
                    iconName = 'compass'
                } else if (route.name === 'Bookmarks'){
                    iconColor = focused ? '#3a86fe' : 'black'
                    iconName = 'bookmark'
                } else {
                    iconColor = focused ? '#3a86fe' : 'black'
                    iconName = 'user'
                }
                return <Icon name={iconName} size={25} color={iconColor} />;
            },
            tabBarShowLabel: false,
        })}
    >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Directions' component={Directions} />
        <Tab.Screen name='Bookmarks' component={Bookmarks} />
        <Tab.Screen name='User' component={User} />
    </Tab.Navigator>
  )
}

export default TabNav