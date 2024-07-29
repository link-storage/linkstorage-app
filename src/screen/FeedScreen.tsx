import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@/src/shared/types/routes';

type Props = NativeStackScreenProps<StackParamList, 'FeedScreen'>;

const FeedScreen = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>FeedScreen</Text>
    </View>
  )
}

export default FeedScreen

const styles = StyleSheet.create({})