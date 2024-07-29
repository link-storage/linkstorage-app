import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParamList } from '@/src/shared/types/routes'

type Props = NativeStackScreenProps<StackParamList, 'WelcomeScreen'>;

const WelcomeScreen = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>WelcomeScreen</Text>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})