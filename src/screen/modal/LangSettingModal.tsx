import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParamList } from '@/src/shared/types/routes'

type Props = NativeStackScreenProps<StackParamList, 'LangSettingModal'>;

const LangSettingModal = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>LangSettingModal</Text>
    </View>
  )
}

export default LangSettingModal

const styles = StyleSheet.create({})