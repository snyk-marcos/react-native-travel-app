import { View, Text } from 'react-native'
import React from 'react'
import TabNav from './src/navigation/TabNav'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  )
}

export default App