import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@/src/shared/types/routes';

type Props = NativeStackScreenProps<StackParamList, 'ProfileSettingModal'>;

const ProfileSettingModal = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>ProfileSettingModal</Text>
    </View>
  )
}

export default ProfileSettingModal

const styles = StyleSheet.create({})