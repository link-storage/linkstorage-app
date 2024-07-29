import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@/src/shared/types/routes';

type Props = NativeStackScreenProps<StackParamList, 'CreateFileScreen'>;


const CreateFileScreen = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>CreateFileScreen</Text>
    </View>
  )
}

export default CreateFileScreen

const styles = StyleSheet.create({})