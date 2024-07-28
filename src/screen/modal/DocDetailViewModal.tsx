import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack' 
import { StackParamList } from '@/src/shared/types/routes'

type Props = NativeStackScreenProps<StackParamList, 'DocDetailViewModal'>;

const DocDetailViewModal = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>DocDetailViewModal</Text>
    </View>
  )
}

export default DocDetailViewModal

const styles = StyleSheet.create({})