import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import HomeOnSvg from '@/public/icons/home-on.svg';
import ChatIcon from 'react-native-vector-icons/Ionicons';
import React from 'react'

const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tabContainer}>
      </TouchableOpacity>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  tabContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
