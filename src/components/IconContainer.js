import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const IconContainer = ({ iconName, bgColor}) => {
  return (
    <View style={styles.iconContainer}>
      <Icon name={iconName} color={'black'} size={20} />
    </View>
  )
}

export default IconContainer

const styles = StyleSheet.create({
    iconContainer: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: 45,
        height: 45,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderWidth: 1.5,
        borderColor: '#d3d3d3'
    },
})