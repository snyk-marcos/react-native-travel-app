import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import React, { useContext} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import IconContainer from './IconContainer';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../auth/AuthProvider';

const Search = () => {
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('SearchPage')}>
        <View style={styles.search}>
            <Icon name='search' size={25} color='black' />
            <Text style={styles.text}> Search for places </Text>
        </View>
      </TouchableOpacity>

      <View style={{left: 10}}>
        <TouchableOpacity onPress={() => logout()}> 
          <IconContainer 
            iconName={'shuffle'}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 10
    },

    search: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        width: 250,
        height: 50,
        borderRadius: 15,
        padding: 10
    },

    text: {
        fontFamily: 'reost-medium',
        fontSize: 15,
        left: 10,
        top: 2,
        color: 'black'
    }
})