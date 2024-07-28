import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@/src/shared/types/routes';

type Props = NativeStackScreenProps<StackParamList, 'ProfileScreen'>;

const ProfileScreen = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})