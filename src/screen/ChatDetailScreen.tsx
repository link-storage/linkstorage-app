import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackParamList } from '@/src/shared/types/routes'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<StackParamList, 'ChatDetailScreen'>;

const ChatDetailScreen = ({ route }: Props) => {
  return (
    <View>
      <Text>ChatDetailScreen</Text>
    </View>
  )
}

export default ChatDetailScreen

const styles = StyleSheet.create({})