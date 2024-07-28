import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ParamListBase, useNavigation } from '@react-navigation/native';

type Props = BottomTabScreenProps<ParamListBase, 'SignInTab'>;

const SignInTab = ({ navigation, route }: Props) => {
  const stackNavigation = useNavigation();
  return (
    <View>
      <Text>SignInTab</Text>
    </View>
  )
}

export default SignInTab

const styles = StyleSheet.create({})