import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@/src/shared/types/routes';

type Props = NativeStackScreenProps<StackParamList, 'SearchScreen'>;

const SearchScreen = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>SearchScreen</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})