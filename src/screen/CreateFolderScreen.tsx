import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@/src/shared/types/routes';

type Props = NativeStackScreenProps<StackParamList, 'CreateFolderScreen'>;

const CreateFolderScreen = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>CreateFolderScreen</Text>
    </View>
  )
}

export default CreateFolderScreen

const styles = StyleSheet.create({})