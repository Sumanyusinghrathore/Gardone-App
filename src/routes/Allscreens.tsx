import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {COLORS} from '../themes/theme';
import HomeScreen from '../screens/dashboard/HomeScreen';

// let same = bg => {
//     return {
//       headerShown: true,
//       textColor: COLORS.white,
//       headerBackgroundColor: bg ?? COLORS.primary,
//     };
//   };

export const screens = [
    {name: 'Dashboard', component: HomeScreen, headerShown: false},
]

const styles = StyleSheet.create({})