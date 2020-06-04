import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {enableScreens} from 'react-native-screens' ;

import MealsNavigator from './navigation/MealsNavigator';

enableScreens() ;

export default function App() {
  return (
    <MealsNavigator />
  );
}

const styles = StyleSheet.create({
});
