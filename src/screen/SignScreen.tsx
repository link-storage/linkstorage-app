import { StyleSheet } from 'react-native'
import React, { Fragment } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@/src/shared/types/routes';
import Footer from '@/src/layout/Footer';

type Props = NativeStackScreenProps<StackParamList, 'SignScreen'>;

const SignScreen = ({ navigation, route }: Props) => {
  return (
    <Fragment>
      <Footer />
    </Fragment>
  )
}

export default SignScreen

const styles = StyleSheet.create({})