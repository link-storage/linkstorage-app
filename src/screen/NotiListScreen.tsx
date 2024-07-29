import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@/src/shared/types/routes';

type Props = NativeStackScreenProps<StackParamList, 'NotiListScreen'>;

const NotiListScreen = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>NotiListScreen</Text>
    </View>
  )
}

export default NotiListScreen

const styles = StyleSheet.create({})