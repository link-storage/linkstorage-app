import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ParamListBase, useNavigation } from '@react-navigation/native';

type Props = BottomTabScreenProps<ParamListBase, 'FileStep'>;

const CreateFileTab = ({ navigation, route }: Props) => {
  const stackNavigation = useNavigation();

  return (
    <View>
      <Text>CreateFileTab</Text>
    </View>
  )
}

export default CreateFileTab

const styles = StyleSheet.create({})