import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import IconContainer from '../components/IconContainer';
import SignupInfo from '../components/SignupInfo';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../auth/AuthProvider';
import firestore from '@react-native-firebase/firestore';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const Signup = ({ route }) => {
  const { email, password } = route.params;
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const { signup } = useContext(AuthContext);

  const addUser = () => {
    firestore().collection('users').add({
      name: name,
      email: email,
    })
    .then(() => {
      console.log(name, email);
    })
  };

  const handleSignup = () => {
    signup(email, password);
    addUser();
  }

  return (
    <View>
      <View style={styles.upper}>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <TouchableOpacity>
            <IconContainer iconName='arrow-left' />
          </TouchableOpacity>

          <Text style={styles.signupText}> Profile </Text>
        </View>
      </View>

      <View style={styles.middle}>
        <View style={{ top: -50, alignSelf: 'center' }}>
          <Text style={styles.infoText}> Add a profile picture </Text>
          <View style={{ alignSelf: 'center' }}>
            <TouchableOpacity style={styles.IconContainer}>
              <Icon name='person' size={30} color='white' />
            </TouchableOpacity>
          </View>
        </View>
        
        <SignupInfo 
          infoTitle='Name' 
          placeholder='Enter your full name' 
          autoComplete='name' 
          value={name}
          onChangeText={userFullName => setName(userFullName)}
        />
      </View>

      <View style={styles.lower}>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}> Finish </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={styles.loginText}> Already have an account? </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.loginText,  {
              fontFamily: 'AlongSansExtraBold',
            }]}> Log in </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  upper: {
    backgroundColor: 'black',
    height: SCREENHEIGHT / 8,
    width: SCREENWIDTH,
    padding: 20
  },

  middle: {
    backgroundColor: 'black',
    height: SCREENHEIGHT - (SCREENHEIGHT / 8) - (SCREENHEIGHT / 2.5),
    width: SCREENWIDTH,
    padding: 20,
  },

  lower: {
    backgroundColor: 'black',
    height: SCREENHEIGHT / 2.5,
    width: SCREENWIDTH,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  signupText: {
    fontFamily: 'AlongSansExtraBold',
    marginLeft: 10,
    fontSize: 30,
    color: 'white'
  },

  infoText: {
    fontFamily: 'AlongSansMedium',
    fontSize: 20,
    color: 'white',
    marginTop: 50,
  },

  IconContainer: {
    backgroundColor: 'black',
    width: SCREENHEIGHT/5,
    alignItems: 'center',
    justifyContent: 'center',
    height: SCREENHEIGHT/5,
    marginTop: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'gray',
  },
  
  button: {
    backgroundColor: 'white',
    width: 0.7 * SCREENWIDTH,
    height: 0.07 * SCREENHEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },
  
  buttonText: {
    fontFamily: 'AlongSansExtraBold',
    fontSize: 18,
    color: 'black',
    alignSelf: 'center'
  },

  loginText: {
    fontFamily: 'AlongSansMedium',
    fontSize: 15,
    color: 'white',
    marginTop: 20,
  },
})