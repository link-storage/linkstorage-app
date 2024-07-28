import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackParamList } from '@/src/shared/types/routes'

type Props = NativeStackScreenProps<StackParamList, 'DocDetailEditModal'>;

const DocDetailEditModal = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>DocDeetailEditModal</Text>
    </View>
  )
}

export default DocDetailEditModal

const styles = StyleSheet.create({})