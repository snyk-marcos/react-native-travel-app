import { StyleSheet, Text, View, Dimensions,  } from 'react-native';
import React from 'react';
import IconContainer from '../components/Home/IconContainer';
import Categories from '../components/Home/Categories';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../components/Home/Card';
import Search from '../components/Home/Search';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH  = Dimensions.get('window').width;

const Home = () => {
  return (
    <View>
      <View style={styles.upper}>
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

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.cats} >
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

            <Categories 
              emoji={require('../assets/images/water.png')}
              detailText='Lake'
            />
          </View>
        </ScrollView>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.middle}>
          <View style={styles.img}>
            <Card 
              img={require('../assets/images/reservoir.jpg')}
              locName='Bozeman Reservoir'
              rating={'5.0'}
              location={'Montana, USA'}
            />
          </View>

          <View style={styles.img}>
            <Card 
              img={require('../assets/images/reservoir2.jpg')}
              locName='Rajasthan Lake'
              rating={'5.0'}
              location={'Rajasthan, India'}
            />
          </View>

          <View style={styles.img}>
            <Card 
              img={require('../assets/images/temple2.jpg')}
              locName='Tian Tan Buddha'
              rating={'5.0'}
              location={'Hong Kong, China'}
            />
          </View>

          <View style={styles.img}>
            <Card 
              img={require('../assets/images/mount.jpg')}
              locName='Sierra Nevada'
              rating={'5.0'}
              location={'Nevada, USA'}
            />
          </View>

          <View style={styles.img}>
            <Card 
              img={require('../assets/images/temple.jpg')}
              locName='Osaka Castle'
              iconName={'star'}
              rating={'5.0'}
              location={'Osaka, Japan'}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottom}>
        <Search />
      </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  upper: {
    height: SCREENHEIGHT/3.5,
    backgroundColor: 'white',
  },

  middle: {
    height: SCREENHEIGHT/1.8,
    flexDirection: 'row',
    width: SCREENWIDTH * 4.1,
  },

  bottom: {
    height: (SCREENHEIGHT - (SCREENHEIGHT/3.5) - (SCREENHEIGHT/1.8)),
    top: 10,
    backgroundColor: "white",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
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
    width: SCREENWIDTH * 1.4,
    flexDirection: 'row',
    justifyContent: "space-evenly",
    left: 50
    },

    img: {
      padding: 20,
      backgroundColor: "white",
      width: 300,
      height: 420,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10,
      top: 10
    },
})