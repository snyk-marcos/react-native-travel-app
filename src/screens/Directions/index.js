import { View, Text, Dimensions, StyleSheet, Button } from 'react-native';
import React from 'react';
import firestore from '@react-native-firebase/firestore';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const Directions = () => {
  // const user = firestore().collection('users').doc('G1ceJQuWPfIoPVlhIc1f').onSnapshot(doc => {
  //   userFullName = doc.data().name;
  //   userEmail = doc.data().email;
  // });

  const addUser = () => {
    firestore().collection('users').add({
      name: 'John Doe',
      email: 'kofi@gmail.com',
    })
    .then(() => {
      console.log('Added user');
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Explore </Text>

      <View>
        <Text> {userFullName} </Text>
        <Text> {userEmail} </Text>

        <Button title='add user' onPress={addUser}/>
      </View>
    </View>
  )
}

export default Directions

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'black',
      height: SCREENHEIGHT,
      width: SCREENWIDTH,
      padding: 20,
  },

  header: {
    fontFamily: 'AlongSansExtraBold',
    color: 'white',
    fontSize: 30,
  }
})