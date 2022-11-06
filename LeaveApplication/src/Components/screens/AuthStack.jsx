import { StyleSheet, Text, View } from 'react-native'
import React, {Component} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import Location from './Location';
import Notification from './Notification';
import CustomDrrawer from './CustomDrrawer';
import Interviews from './Interviews';
import Visits from './Visits';

const Drawer = createDrawerNavigator();
const AuthStack = () => {
  // drawerLabelStyle:{marginLeft:-25}screenOptions={{headerShown:false,}}
  return (
    <Drawer.Navigator useLegacyImplementation={true} drawerContent={props=><CustomDrrawer {...props}/>}
    screenOptions={{drawerActiveBackgroundColor:'#EC8F05',drawerActiveTintColor:'#fff',
    drawerLabelStyle:{fontSize:15,}}}>
    <Drawer.Screen name="Home" component={HomeScreen} options={{
      title:'Home',
      drawerIcon:({focused,size})=>{
          <FontAwesome name='home'  size={size} color={focused?'#EC8F05':'#000'}/>
      }
    }}
    />
    
    {/* <Drawer.Screen name="location" component={Location} /> */}
    <Drawer.Screen name='Notification' component={Notification}/>
    {/* <Drawer.Screen name="Interview" component={Interviews} /> */}
    <Drawer.Screen name="Visits" component={Visits} />
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