import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@/src/shared/types/routes';

type Props = NativeStackScreenProps<StackParamList, 'RecentDocListScreen'>;

const RecentDocListScreen = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>RecentDocListScreen</Text>
    </View>
  )
}

export default RecentDocListScreen

const styles = StyleSheet.create({})