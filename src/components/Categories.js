import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Categories = ({ emoji, detailText }) => {
  return (
    <View>
      {detailText === 'All' 
      ? 
      <View style={[styles.container, {width: '40%'}]}>
        <View style={styles.emojiContainer}>
            <Image source={emoji} style={styles.image} />
        </View>

        <Text style={styles.detailText}>
            {detailText}
        </Text>
      </View>
      :
      <View style={styles.container}>
        <View style={styles.emojiContainer}>
            <Image source={emoji} style={styles.image} />
        </View>

        <Text style={styles.detailText}>
            {detailText}
        </Text>
      </View>
      }
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "white",
        borderWidth: 1.5,
        borderColor: "#d3d3d3",
        left: 20,
        height: 60,
        width: '60%',
        borderRadius: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        top: 10
    },

    emojiContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#eee',
    },

    image: {
        width: 20,
        height: 20,
        borderRadius: 50
    },

    detailText: {
        fontSize: 15,
        fontFamily: 'reost-semibold',
        color: 'black'
    }
})