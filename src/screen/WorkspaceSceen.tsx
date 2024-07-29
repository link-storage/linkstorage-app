import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@/src/shared/types/routes';

type Props = NativeStackScreenProps<StackParamList, 'WorkspaceScreen'>;

const WorkspaceScreen = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>WorkspaceSceen</Text>
    </View>
  )
}

export default WorkspaceScreen

const styles = StyleSheet.create({})