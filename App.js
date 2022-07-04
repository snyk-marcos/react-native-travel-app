import { View, Text } from 'react-native'
import React from 'react'
import TabNav from './src/navigation/TabNav'
import { NavigationContainer } from '@react-navigation/native'
import StackNav from './src/navigation/StackNav'

const App = () => {
  return (
    <NavigationContainer>
      {/* <TabNav /> */}
      <StackNav />
    </NavigationContainer>
  )
}

export default App