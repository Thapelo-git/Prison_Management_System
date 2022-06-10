import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import Location from './Location';
import CustomDrrawer from './CustomDrrawer';
import Interviews from './Interviews';

const Drawer = createDrawerNavigator();
const AuthStack = () => {
  // drawerLabelStyle:{marginLeft:-25}
  return (
    <Drawer.Navigator drawerContent={props=><CustomDrrawer {...props}/>}
    screenOptions={{headerShown:false,}}>
    <Drawer.Screen name="Home" component={HomeScreen} options={{
      drawerIcon:()=>{
          <FontAwesome name='home' size={20} />
      }
    }}
    />
    
    <Drawer.Screen name="location" component={Location} />
    <Drawer.Screen name="Interview" component={Interviews} />
    <Drawer.Screen name="Profile" component={Profile} options={{
      drawerIcon:({color})=>{
          <FontAwesome name='user' size={20} color={color}/>
      }
    }}/>
  </Drawer.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})