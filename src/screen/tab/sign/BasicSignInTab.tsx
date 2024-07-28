import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ParamListBase, useNavigation } from '@react-navigation/native';

type Props = BottomTabScreenProps<ParamListBase, 'BasicSignInTab'>;

const BasicSignInTab = ({ navigation, route }: Props) => {
  const stackNavigation = useNavigation();

  return (
    <View>
      <Text>BasicSignInTab</Text>
    </View>
  )
}

export default BasicSignInTab

const styles = StyleSheet.create({})