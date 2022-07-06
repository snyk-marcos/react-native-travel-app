import React, { useEffect} from 'react';
import { PermissionsAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './src/navigation/StackNav';


const App = () => {

  const androidPermissions = async () => {
    try{
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 
            'QuickPick needs access to your location ' +
            'so you can find the nearest courier.',
          buttonNeutral: 'Remind Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
      androidPermissions();
  }, [])

  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  )
}

export default App