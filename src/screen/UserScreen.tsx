import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParamList } from '@/src/shared/types/routes'

type Props = NativeStackScreenProps<StackParamList, 'UserScreen'>;

const UserScreen = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>UserScreen</Text>
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({})