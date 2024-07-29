import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ParamListBase, useNavigation } from '@react-navigation/native';

type Props = BottomTabScreenProps<ParamListBase, 'SignUpTab'>;

const SignUpTab = ({ navigation, route }: Props) => {
  const stackNavigation = useNavigation();
  return (
    <View>
      <Text>SignUpTab</Text>
    </View>
  )
}

export default SignUpTab

const styles = StyleSheet.create({})