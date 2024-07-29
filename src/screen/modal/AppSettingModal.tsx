import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParamList } from '@/src/shared/types/routes'

type Props = NativeStackScreenProps<StackParamList, 'AppSettingModal'>;

const AppSettingModal = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>AppSettingModal</Text>
    </View>
  )
}

export default AppSettingModal

const styles = StyleSheet.create({})