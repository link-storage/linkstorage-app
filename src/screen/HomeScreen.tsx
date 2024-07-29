import { StyleSheet, Text, View } from 'react-native'
import React, { Fragment } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@/src/shared/types/routes';
import Footer from '@/src/layout/Footer';

type Props = NativeStackScreenProps<StackParamList, 'HomeScreen'>;

const HomeScreen = ({ navigation, route }: Props) => {
  return (
    <Fragment>
      <Footer />
    </Fragment>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})