import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@/src/shared/types/routes';

type Props = NativeStackScreenProps<StackParamList, 'ChatListScreen'>;

const ChatListScreen = ({ route }: Props) => {
  return (
    <View>
      <Text>ChatListScreen</Text>
    </View>
  )
}

export default ChatListScreen

const styles = StyleSheet.create({})