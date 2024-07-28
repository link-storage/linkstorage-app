import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@/src/shared/types/routes';

type Props = NativeStackScreenProps<StackParamList, 'SignScreen'>;

const SignScreen = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>SignScreen</Text>
    </View>
  )
}

export default SignScreen

const styles = StyleSheet.create({})