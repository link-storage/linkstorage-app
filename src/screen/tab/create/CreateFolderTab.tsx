import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ParamListBase, useNavigation } from '@react-navigation/native';

const CreateFolderTab = () => {
  const stackNavigation = useNavigation();

  return (
    <View>
      <Text>CreateFolderTab</Text>
    </View>
  )
}

export default CreateFolderTab

const styles = StyleSheet.create({})