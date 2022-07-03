import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import React from 'react';
import IconContainer from '../components/IconContainer';
import Categories from '../components/Categories';
import { categories } from '../data/DummyData';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH  = Dimensions.get('window').width;

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <IconContainer 
          iconName={'align-left'}
        />

        <Text style={styles.text}>
          Current Location
          {'\n'}
          Kuningan, West Java
        </Text>

        <IconContainer 
          iconName={'bell'}
        />
      </View>

      <Text style={[styles.text, {
        fontFamily: 'reost-bold',
        fontSize: 20,
        color: 'black',
        padding: 20,
        top: 0,
      }]}>
        Where do you want to go?
      </Text>

      <View style={styles.cats}>
        <Categories 
          emoji={require('../assets/images/globe.png')}
          detailText='All'
        />

        <Categories 
          emoji={require('../assets/images/mountain.png')}
          detailText='Mountain'
        />

        <Categories 
          emoji={require('../assets/images/shrine.png')}
          detailText='Temple'
        />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    height: SCREENHEIGHT/3,
    backgroundColor: 'white',
  },

  top: {
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  text: {
    fontFamily: 'reost-semibold',
    fontSize: 15,
    color: '#d3d3d3',
    top: 10
  },

  cats: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',  
  },
})