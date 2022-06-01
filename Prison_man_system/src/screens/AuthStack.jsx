import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './HomeScreen';
import Profile from './Profile';
import Location from './Location';
import CustomDrrawer from './CustomDrrawer';

const Drawer = createDrawerNavigator();
const AuthStack = () => {
  return (
    <Drawer.Navigator drawerContent={props=><CustomDrrawer {...props}/>}>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Profile" component={Profile} />
    <Drawer.Screen name="location" component={Location} />
  </Drawer.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})